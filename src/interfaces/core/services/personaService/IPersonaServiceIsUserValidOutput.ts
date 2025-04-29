import { IPersonaServiceGetUserOutputError } from './IPersonaServiceGetUserOutputError';
import { IPersonaServiceGetUserOutputSuccess } from './IPersonaServiceGetUserOutputSuccess';

export type IPersonaServiceGetUserOutput =
  | IPersonaServiceGetUserOutputError
  | IPersonaServiceGetUserOutputSuccess;
