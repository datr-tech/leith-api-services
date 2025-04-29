import { IPersonaOrganisationHasOrganisationInput } from './IPersonaOrganisationHasOrganisationInput';
import { IPersonaOrganisationHasOrganisationOutput } from './IPersonaOrganisationHasOrganisationOutput';

export interface IPersonaOrganisationHasOrganisation {
  (
    args: IPersonaOrganisationHasOrganisationInput,
  ): Promise<IPersonaOrganisationHasOrganisationOutput>;
}
