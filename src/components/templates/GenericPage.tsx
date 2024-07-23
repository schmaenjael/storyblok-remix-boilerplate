import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export const GenericPage = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="relative h-full w-full">
      <main role="main" className="relative flex items-center justify-center">
        {blok.body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </div>
  );
};
