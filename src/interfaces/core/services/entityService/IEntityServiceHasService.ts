import { IEntityServiceHasServiceInput } from './IEntityServiceHasServiceInput';
import { IEntityServiceHasServiceOutput } from './IEntityServiceHasServiceOutput';

export interface IEntityServiceHasService {
  (args: IEntityServiceHasServiceInput): Promise<IEntityServiceHasServiceOutput>;
}
