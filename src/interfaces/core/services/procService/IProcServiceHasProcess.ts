import { IProcServiceHasProcessInput } from './IProcServiceHasProcessInput';
import { IProcServiceHasProcessOutput } from './IProcServiceHasProcessOutput';

export interface IProcServiceHasProcess {
  (args: IProcServiceHasProcessInput): Promise<IProcServiceHasProcessOutput>;
}
