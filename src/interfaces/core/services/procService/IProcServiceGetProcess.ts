import { IProcServiceGetProcessInput } from './IProcServiceGetProcessInput';
import { IProcServiceGetProcessOutputPromise } from './IProcServiceGetProcessOutputPromise';

export interface IProcServiceGetProcess {
  (args: IProcServiceGetProcessInput): IProcServiceGetProcessOutputPromise;
}
