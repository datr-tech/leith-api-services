import { IEntityServiceGetResourceInput } from './IEntityServiceGetResourceInput';
import { IEntityServiceGetResourceOutputPromise } from './IEntityServiceGetResourceOutputPromise';

export interface IEntityServiceGetResource {
  (args: IEntityServiceGetResourceInput): IEntityServiceGetResourceOutputPromise;
}
