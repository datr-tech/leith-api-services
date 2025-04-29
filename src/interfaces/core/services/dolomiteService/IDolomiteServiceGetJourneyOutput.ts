import { IDolomiteServiceGetJourneyOutputError } from './IDolomiteServiceGetJourneyOutputError';
import { IDolomiteServiceGetJourneyOutputSuccess } from './IDolomiteServiceGetJourneyOutputSuccess';

export type IDolomiteServiceGetJourneyOutput =
  | IDolomiteServiceGetJourneyOutputError
  | IDolomiteServiceGetJourneyOutputSuccess;
