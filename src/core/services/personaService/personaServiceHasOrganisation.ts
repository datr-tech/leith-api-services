import { IPersonaServiceHasOrganisation } from '@app-lcs/interfaces/core/services';
import { personaServiceGetOrganisation } from './personaServiceGetOrganisation';

export const personaServiceHasOrganisation: IPersonaServiceHasOrganisation = async ({
  organisationId,
}) => (await personaServiceGetOrganisation({ organisationId })).error === false;
