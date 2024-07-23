import { storyblokEditable } from '@storyblok/react';

export const Navigation = ({ blok }: any) => {
  return (
    <nav key={blok._uid} {...storyblokEditable(blok)}>
      {blok.name}!
    </nav>
  );
};
