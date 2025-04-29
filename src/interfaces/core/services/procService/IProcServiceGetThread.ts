import { IProcServiceGetThreadInput } from './IProcServiceGetThreadInput';
import { IProcServiceGetThreadOutputPromise } from './IProcServiceGetThreadOutputPromise';

export interface IProcServiceGetThread {
  (args: IProcServiceGetThreadInput): IProcServiceGetThreadOutputPromise;
}
