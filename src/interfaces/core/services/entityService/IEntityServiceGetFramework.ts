import { IEntityServiceGetFrameworkInput } from './IEntityServiceGetFrameworkInput';
import { IEntityServiceGetFrameworkOutput } from './IEntityServiceGetFrameworkOutput';

export interface IEntityServiceGetFramework {
  (args: IEntityServiceGetFrameworkInput): Promise<IEntityServiceGetFrameworkOutput>;
}
