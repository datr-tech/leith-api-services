import { IDolomiteServiceGetHopOutputError } from './IDolomiteServiceGetHopOutputError';
import { IDolomiteServiceGetHopOutputSuccess } from './IDolomiteServiceGetHopOutputSuccess';

export type IDolomiteServiceGetHopOutput =
  | IDolomiteServiceGetHopOutputError
  | IDolomiteServiceGetHopOutputSuccess;
