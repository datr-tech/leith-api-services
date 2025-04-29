import { IProcServiceGetThreadInput } from './IProcServiceGetThreadInput';
import { IProcServiceGetThreadOutput } from './IProcServiceGetThreadOutput';

export interface IProcServiceGetThread {
  (args: IProcServiceGetThreadInput): Promise<IProcServiceGetThreadOutput>;
}
