import { PublicEnvironment } from 'types/globals';

/** @returns public environment variables */
export const getEnv = (): PublicEnvironment => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    STORYBLOK_MODE: process.env.STORYBLOK_MODE,
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  };
};
