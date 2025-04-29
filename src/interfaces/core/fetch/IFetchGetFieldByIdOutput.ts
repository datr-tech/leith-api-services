import { IFetchFieldByIdOutputError } from './IFetchFieldByIdOutputError';
import { IFetchFieldByIdOutputSuccess } from './IFetchFieldByIdOutputSuccess';

export type IFetchFieldByIdOutput =
  | IFetchFieldByIdOutputError
  | IFetchFieldByIdOutputSuccess;
