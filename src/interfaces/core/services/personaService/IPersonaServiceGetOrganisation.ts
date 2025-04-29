import { IPersonaServiceGetOrganisationInput } from './IPersonaServiceGetOrganisationInput';
import { IPersonaServiceGetOrganisationOutput } from './IPersonaServiceGetOrganisationOutput';

export interface IPersonaServiceGetOrganisation {
  (
    args: IPersonaServiceGetOrganisationInput,
  ): Promise<IPersonaServiceGetOrganisationOutput>;
}
