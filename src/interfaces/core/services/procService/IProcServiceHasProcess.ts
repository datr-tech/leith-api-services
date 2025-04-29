import { IProcProcessHasProcessInput } from './IProcProcessHasProcessInput';
import { IProcProcessHasProcessOutput } from './IProcProcessHasProcessOutput';

export interface IProcProcessHasProcess {
  (args: IProcProcessHasProcessInput): Promise<IProcProcessHasProcessOutput>;
}
