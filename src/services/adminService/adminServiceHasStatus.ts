import { adminServiceGetStatus } from './adminServiceGetStatus';

export const adminServiceHasStatus = async ({ statusId }) => {
  const adminStatus = await adminServiceGetStatus({ statusId });

  return !!adminStatus;
};
