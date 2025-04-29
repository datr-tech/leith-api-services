import { IPersonaServiceIsUserValidOutputError } from './IPersonaServiceIsUserValidOutputError';
import { IPersonaServiceIsUserValidOutputSuccess } from './IPersonaServiceIsUserValidOutputSuccess';

export type IPersonaServiceIsUserValidOutput =
  | IPersonaServiceIsUserValidOutputError
  | IPersonaServiceIsUserValidOutputSuccess;
