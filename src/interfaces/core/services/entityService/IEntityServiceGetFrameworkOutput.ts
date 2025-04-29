import { IEntityServiceGetFrameworkOutputError } from './IEntityServiceGetFrameworkOutputError';
import { IEntityServiceGetFrameworkOutputSuccess } from './IEntityServiceGetFrameworkOutputSuccess';

export type IEntityServiceGetFrameworkOutput =
  | IEntityServiceGetFrameworkOutputError
  | IEntityServiceGetFrameworkOutputSuccess;
