import { IEntityServiceGetServiceOutputError } from './IEntityServiceGetServiceOutputError';
import { IEntityServiceGetServiceOutputSuccess } from './IEntityServiceGetServiceOutputSuccess';

export type IEntityServiceGetServiceOutput =
  | IEntityServiceGetServiceOutputError
  | IEntityServiceGetServiceOutputSuccess;
