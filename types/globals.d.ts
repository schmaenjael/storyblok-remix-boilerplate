export interface PublicEnvironment {
  STORYBLOK_TOKEN: string;
  STORYBLOK_MODE: 'draft' | 'preview';
  NODE_ENV: 'production' | 'development' | 'test';
}

export interface PrivateEnvironment {}

declare global {
  interface Window {
    env: PublicEnvironment;
  }

  namespace NodeJS {
    interface ProcessEnv extends PublicEnvironment, PrivateEnvironment {}
  }
}
