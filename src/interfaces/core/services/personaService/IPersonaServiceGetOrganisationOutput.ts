import { IPersonaServiceGetOrganisationOutputError } from './IPersonaServiceGetOrganisationOutputError';
import { IPersonaServiceGetOrganisationOutputSuccess } from './IPersonaServiceGetOrganisationOutputSuccess';

export type IPersonaServiceGetOrganisationOutput =
  | IPersonaServiceGetOrganisationOutputError
  | IPersonaServiceGetOrganisationOutputSuccess;
