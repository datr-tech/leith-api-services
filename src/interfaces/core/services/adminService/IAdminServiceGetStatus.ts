import { IAdminServiceGetStatusInput } from './IAdminServiceGetStatusInput';
import { IAdminServiceGetStatusOutputPromise } from './IAdminServiceGetStatusOutputPromise';

export interface IAdminServiceGetStatus {
  (args: IAdminServiceGetStatusInput): IAdminServiceGetStatusOutputPromise;
}
