import { IPersonaServiceHasOrganisationInput } from './IPersonaServiceHasOrganisationInput';
import { IPersonaServiceHasOrganisationOutput } from './IPersonaServiceHasOrganisationOutput';

export interface IPersonaServiceHasOrganisation {
  (
    args: IPersonaServiceHasOrganisationInput,
  ): Promise<IPersonaServiceHasOrganisationOutput>;
}
