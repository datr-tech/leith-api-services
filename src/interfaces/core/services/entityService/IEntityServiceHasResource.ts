import { IEntityServiceHasResourceInput } from './IEntityServiceHasResourceInput';
import { IEntityServiceHasResourceOutput } from './IEntityServiceHasResourceOutput';

export interface IEntityServiceHasResource {
  (args: IEntityServiceHasResourceInput): Promise<IEntityServiceHasResourceOutput>;
}
