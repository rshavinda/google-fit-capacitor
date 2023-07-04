export interface FitnessPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
