import { IEntityServiceHasFrameworkInput } from './IEntityServiceHasFrameworkInput';
import { IEntityServiceHasFrameworkOutput } from './IEntityServiceHasFrameworkOutput';

export interface IEntityServiceHasFramework {
  (args: IEntityServiceHasFrameworkInput): Promise<IEntityServiceHasFrameworkOutput>;
}
