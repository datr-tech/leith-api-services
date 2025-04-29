import { IPersonaServiceGetOrganisationInput } from './IPersonaServiceGetOrganisationInput';
import { IPersonaServiceGetOrganisationOutputPromise } from './IPersonaServiceGetOrganisationOutputPromise';

export interface IPersonaServiceGetOrganisation {
  (
    args: IPersonaServiceGetOrganisationInput,
  ): IPersonaServiceGetOrganisationOutputPromise;
}
