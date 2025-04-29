import { IEntityServiceGetFrameworkInput } from './IEntityServiceGetFrameworkInput';
import { IEntityServiceGetFrameworkOutputPromise } from './IEntityServiceGetFrameworkOutputPromise';

export interface IEntityServiceGetFramework {
  (args: IEntityServiceGetFrameworkInput): IEntityServiceGetFrameworkOutputPromise;
}
