import { IProcServiceHasThreadInput } from './IProcServiceHasThreadInput';
import { IProcServiceHasThreadOutput } from './IProcServiceHasThreadOutput';

export interface IProcServiceHasThread {
  (args: IProcServiceHasThreadInput): Promise<IProcServiceHasThreadOutput>;
}
