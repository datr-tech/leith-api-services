import { IEntityServiceGetServiceInput } from './IEntityServiceGetServiceInput';
import { IEntityServiceGetServiceOutputPromise } from './IEntityServiceGetServiceOutputPromise';

export interface IEntityServiceGetService {
  (args: IEntityServiceGetServiceInput): IEntityServiceGetServiceOutputPromise;
}
