import { IProcThreadHasThreadInput } from './IProcThreadHasThreadInput';
import { IProcThreadHasThreadOutput } from './IProcThreadHasThreadOutput';

export interface IProcThreadHasThread {
  (args: IProcThreadHasThreadInput): Promise<IProcThreadHasThreadOutput>;
}
