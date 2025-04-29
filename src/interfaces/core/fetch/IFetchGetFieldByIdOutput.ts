import { IFetchGetFieldByIdOutputError } from './IFetchGetFieldByIdOutputError';
import { IFetchGetFieldByIdOutputSuccess } from './IFetchGetFieldByIdOutputSuccess';

export type IFetchGetFieldByIdOutput =
  | IFetchGetFieldByIdOutputError
  | IFetchGetFieldByIdOutputSuccess;
