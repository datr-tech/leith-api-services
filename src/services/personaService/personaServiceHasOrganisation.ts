import { personaServiceGetOrganisation } from './personaServiceGetOrganisation';

export const personaServiceHasOrganisation = async ({ organisationId }) => {
  const organisation = await personaServiceGetOrganisation({
    organisationId,
  });

  return !!organisation;
};
