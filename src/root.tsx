import { Links, Meta, Outlet, redirect, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react';
import { json, LinksFunction, LoaderFunctionArgs } from '@vercel/remix';

import { components } from '~/components';

import { getEnv } from '~/utils/env.server';
import { useNonce } from '~/utils/nonceProvider';
import { i18next } from '~/utils/i18next';

// @ts-expect-error
import globalStylesheet from '~/styles/tailwind.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: globalStylesheet }];

const accessToken = typeof window === 'undefined' ? process.env.STORYBLOK_TOKEN : window.env.STORYBLOK_TOKEN;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { language_codes: validLocales } = (await getStoryblokApi().get('/cdn/spaces/me')).data.space;

  const requestLocale = request.url.split(/\/|\?/g).splice(3)[0];
  const detectedLocale = i18next.language.substring(0, 2);
  const fallbackLocale = validLocales[0];

  return !validLocales.includes(requestLocale)
    ? redirect(`${detectedLocale}/`)
    : json({
        locale: validLocales.includes(requestLocale) ? requestLocale : fallbackLocale,
        env: getEnv(),
      });
};

storyblokInit({ accessToken, components, use: [apiPlugin] });

const App = () => {
  const { locale, env } = useLoaderData<typeof loader>();
  const nonce = useNonce();

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <script dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(env)}` }} />
      </body>
    </html>
  );
};
