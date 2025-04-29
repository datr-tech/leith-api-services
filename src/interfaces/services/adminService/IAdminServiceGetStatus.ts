import { IAdminServiceGetStatusInput } from './IAdminServiceGetStatusInput';
import { IAdminServiceGetStatusOutput } from './IAdminServiceGetStatusOutput';

export interface IAdminServiceGetStatus {
  (args: IAdminServiceGetStatusInput): Promise<IAdminServiceGetStatusOutput>;
}
