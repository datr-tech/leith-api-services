import { IEntityServiceGetResourceOutputError } from './IEntityServiceGetResourceOutputError';
import { IEntityServiceGetResourceOutputSuccess } from './IEntityServiceGetResourceOutputSuccess';

export type IEntityServiceGetResourceOutput =
  | IEntityServiceGetResourceOutputError
  | IEntityServiceGetResourceOutputSuccess;
