import { IEntityServiceHasService } from '@app-lcs/interfaces/core/services';
import { entityServiceGetService } from './entityServiceGetService';

export const entityServiceHasService: IEntityServiceHasService = async ({ serviceId }) =>
  (await entityServiceGetService({ serviceId })).error === false;
