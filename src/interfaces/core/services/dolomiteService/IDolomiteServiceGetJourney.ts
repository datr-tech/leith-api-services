import { IDolomiteServiceGetJourneyInput } from './IDolomiteServiceGetJourneyInput';
import { IDolomiteServiceGetJourneyOutputPromise } from './IDolomiteServiceGetJourneyOutputPromise';

export interface IDolomiteServiceGetJourney {
  (args: IDolomiteServiceGetJourneyInput): IDolomiteServiceGetJourneyOutputPromise;
}
