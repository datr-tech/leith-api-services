import { entityServiceGetFramework } from './entityServiceGetFramework';

export const entityServiceHasFramework = async ({ frameworkId }) => {
  const framework = await entityServiceGetFramework({ frameworkId });

  return !!framework;
};
