import { isbot } from 'isbot';
import { randomBytes } from 'crypto';
import { PassThrough } from 'node:stream';

import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { createReadableStreamFromReadable, type HandleDocumentRequestFunction } from '@remix-run/node';

import { NonceProvider } from './utils/nonceProvider';

const ABORT_DELAY = 5_000;

const handleRequest: HandleDocumentRequestFunction = (request, statusCode, headers, context) => {
  const nonce = randomBytes(16).toString('hex');

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <NonceProvider value={nonce}>
        <RemixServer context={context} url={request.url} abortDelay={ABORT_DELAY} />
      </NonceProvider>,
      {
        [isbot(request.headers.get('user-agent') || '') ? 'onAllReady' : 'onShellReady']: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          headers.set('Content-Type', 'text/html');

          resolve(new Response(stream, { headers: headers, status: statusCode }));
          pipe(body);
        },
        onShellError: (error: unknown) => reject(error),
        onError: (error: unknown) => {
          statusCode = 500;
          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
};

export default handleRequest;
