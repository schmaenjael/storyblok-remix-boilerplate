import type { SbReactComponentsMap } from '@storyblok/react';

import { Navigation } from './organisms/Navigation';

import { GenericPage } from './templates/GenericPage';

const atoms: SbReactComponentsMap = {};

const molecules: SbReactComponentsMap = {};

const organisms: SbReactComponentsMap = {
  Navigation,
};

const templates: SbReactComponentsMap = {
  GenericPage,
};

export const components = { ...atoms, ...molecules, ...organisms, ...templates };
