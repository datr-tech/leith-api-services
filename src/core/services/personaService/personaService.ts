import { personaServiceGetOrganisation } from './personaServiceGetOrganisation';
import { personaServiceHasOrganisation } from './personaServiceHasOrganisation';
import { personaServiceHasUser } from './personaServiceHasUser';
import { personaServiceIsUserValid } from './personaServiceIsUserValid';

export const personaService = {
  getOrganisation: personaServiceGetOrganisation,
  hasOrganisation: personaServiceHasOrganisation,
  hasUser: personaServiceHasUser,
  isUserValid: personaServiceIsUserValid,
};
