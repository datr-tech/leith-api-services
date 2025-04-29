import { IProcServiceGetProcessOutputError } from './IProcServiceGetProcessOutputError';
import { IProcServiceGetProcessOutputSuccess } from './IProcServiceGetProcessOutputSuccess';

export type IProcServiceGetProcessOutput =
  | IProcServiceGetProcessOutputError
  | IProcServiceGetProcessOutputSuccess;
