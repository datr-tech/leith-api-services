import { IAdminServiceHasStatusInput } from './IAdminServiceHasStatusInput';
import { IAdminServiceHasStatusOutput } from './IAdminServiceHasStatusOutput';

export interface IAdminServiceHasStatus {
  (args: IAdminServiceHasStatusInput): Promise<IAdminServiceHasStatusOutput>;
}
