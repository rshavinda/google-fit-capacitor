import { WebPlugin } from '@capacitor/core';

import type { FitnessPluginPlugin } from './definitions';

export class FitnessPluginWeb extends WebPlugin implements FitnessPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
