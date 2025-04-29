import { personaServiceIsUserValid } from './personaServiceIsUserValid';

export const personaServiceHasUser = async ({ userId, isAdmin }) => {
  const isAdminLocal = typeof isAdmin !== 'undefined' ? isAdmin : false;

  const isUserValid = await personaServiceIsUserValid({
    userId,
    isAdmin: isAdminLocal,
  });

  return isUserValid;
};
