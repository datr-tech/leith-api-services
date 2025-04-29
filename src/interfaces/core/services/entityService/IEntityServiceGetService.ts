import { IEntityServiceGetServiceInput } from './IEntityServiceGetServiceInput';
import { IEntityServiceGetServiceOutput } from './IEntityServiceGetServiceOutput';

export interface IEntityServiceGetService {
  (args: IEntityServiceGetServiceInput): Promise<IEntityServiceGetServiceOutput>;
}
