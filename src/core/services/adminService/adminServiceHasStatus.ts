import { IAdminServiceHasStatus } from '@app-lcs/interfaces/core/services';
import { adminServiceGetStatus } from './adminServiceGetStatus';

export const adminServiceHasStatus: IAdminServiceHasStatus = async ({ statusId }) =>
  (await adminServiceGetStatus({ statusId })).error === false;
