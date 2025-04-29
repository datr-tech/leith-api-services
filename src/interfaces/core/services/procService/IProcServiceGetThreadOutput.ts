import { IProcServiceGetThreadOutputError } from './IProcServiceGetThreadOutputError';
import { IProcServiceGetThreadOutputSuccess } from './IProcServiceGetThreadOutputSuccess';

export type IProcServiceGetThreadOutput =
  | IProcServiceGetThreadOutputError
  | IProcServiceGetThreadOutputSuccess;
