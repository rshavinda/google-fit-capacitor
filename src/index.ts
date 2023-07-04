import { registerPlugin } from '@capacitor/core';

import type { FitnessPluginPlugin } from './definitions';

const FitnessPlugin = registerPlugin<FitnessPluginPlugin>('FitnessPlugin', {
  web: () => import('./web').then(m => new m.FitnessPluginWeb()),
});

export * from './definitions';
export { FitnessPlugin };
