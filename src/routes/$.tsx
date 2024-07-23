import { json, LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getStoryblokApi, ISbStoryData, StoryblokComponent, useStoryblokState } from '@storyblok/react';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const [language, param] = [params['*']?.substring(0, 2), params['*']?.slice(2)];
  const route = param === '/' || param === '' ? '/home' : param;
  const { data } = await getStoryblokApi().get(`cdn/stories/${route}`, { language, version: 'draft', cv: Date.now() });

  return json({ data });
};

export const meta: MetaFunction = ({ data }: any) => {
  const { title, description } = data.data.story.content;

  return [{ title: title }, { name: 'description', content: description }];
};

const Entry = () => {
  const { data } = useLoaderData<typeof loader>();
  const story = useStoryblokState(data.story as ISbStoryData);

  return (
    <div className="relative min-h-full w-full overflow-x-hidden">
      <div className="relative flex items-center justify-center">
        <StoryblokComponent blok={story?.content} key={story?.name} />
      </div>
    </div>
  );
};

export default Entry;
