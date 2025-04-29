import { IDolomiteServiceHasHopInput } from './IDolomiteServiceHasHopInput';
import { IDolomiteServiceHasHopOutput } from './IDolomiteServiceHasHopOutput';

export interface IDolomiteServiceHasHop {
  (args: IDolomiteServiceHasHopInput): Promise<IDolomiteServiceHasHopOutput>;
}
