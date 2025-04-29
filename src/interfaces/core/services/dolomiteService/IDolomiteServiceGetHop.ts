import { IDolomiteServiceGetHopInput } from './IDolomiteServiceGetHopInput';
import { IDolomiteServiceGetHopOutput } from './IDolomiteServiceGetHopOutput';

export interface IDolomiteServiceGetHop {
  (args: IDolomiteServiceGetHopInput): Promise<IDolomiteServiceGetHopOutput>;
}
