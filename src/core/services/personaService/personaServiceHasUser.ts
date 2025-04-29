import { IPersonaServiceHasUser } from '@app-lcs/interfaces/core/services';
import { personaServiceIsUserValid } from './personaServiceIsUserValid';

export const personaServiceHasUser: IPersonaServiceHasUser = async ({ userId }) =>
  (await personaServiceIsUserValid({ userId })).error === false;
