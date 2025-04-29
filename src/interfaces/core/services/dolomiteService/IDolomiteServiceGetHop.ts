import { IDolomiteServiceGetHopInput } from './IDolomiteServiceGetHopInput';
import { IDolomiteServiceGetHopOutputPromise } from './IDolomiteServiceGetHopOutputPromise';

export interface IDolomiteServiceGetHop {
  (args: IDolomiteServiceGetHopInput): IDolomiteServiceGetHopOutputPromise;
}
