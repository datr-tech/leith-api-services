import { IAdminServiceGetStatusOutputError } from './IAdminServiceGetStatusOutputError';
import { IAdminServiceGetStatusOutputSuccess } from './IAdminServiceGetStatusOutputSuccess';

export type IAdminServiceGetStatusOutput =
  | IAdminServiceGetStatusOutputError
  | IAdminServiceGetStatusOutputSuccess;
