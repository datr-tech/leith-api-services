import { IProcServiceGetProcessInput } from './IProcServiceGetProcessInput';
import { IProcServiceGetProcessOutput } from './IProcServiceGetProcessOutput';

export interface IProcServiceGetProcess {
  (args: IProcServiceGetProcessInput): Promise<IProcServiceGetProcessOutput>;
}
