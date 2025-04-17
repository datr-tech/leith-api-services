import { entityServiceGetService } from './entityServiceGetService';

export const entityServiceHasService = async ({ serviceId }) => {
  const service = await entityServiceGetService({ serviceId });

  return !!service;
};
