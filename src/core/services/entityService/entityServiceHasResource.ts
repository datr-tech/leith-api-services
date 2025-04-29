import { IEntityServiceHasResource } from '@app-lcs/interfaces/core/services';
import { entityServiceGetResource } from './entityServiceGetResource';

export const entityServiceHasResource: IEntityServiceHasResource = async ({
  resourceId,
}) => (await entityServiceGetResource({ resourceId })).error === false;
