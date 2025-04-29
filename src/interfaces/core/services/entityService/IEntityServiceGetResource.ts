import { IEntityServiceGetResourceInput } from './IEntityServiceGetResourceInput';
import { IEntityServiceGetResourceOutput } from './IEntityServiceGetResourceOutput';

export interface IEntityServiceGetResource {
  (args: IEntityServiceGetResourceInput): Promise<IEntityServiceGetResourceOutput>;
}
