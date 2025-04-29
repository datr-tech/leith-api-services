import { entityServiceGetResource } from './entityServiceGetResource';

export const entityServiceHasResource = async ({ resourceId }) => {
  const resource = await entityServiceGetResource({ resourceId });

  return !!resource;
};
