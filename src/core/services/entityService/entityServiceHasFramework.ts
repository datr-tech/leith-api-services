import { IEntityServiceHasFramework } from '@app-lcs/interfaces/core/services';
import { entityServiceGetFramework } from './entityServiceGetFramework';

export const entityServiceHasFramework: IEntityServiceHasFramework = async ({
  frameworkId,
}) => (await entityServiceGetFramework({ frameworkId })).error === false;
