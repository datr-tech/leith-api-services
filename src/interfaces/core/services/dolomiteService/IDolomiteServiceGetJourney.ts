import { IDolomiteServiceGetJourneyInput } from './IDolomiteServiceGetJourneyInput';
import { IDolomiteServiceGetJourneyOutput } from './IDolomiteServiceGetJourneyOutput';

export interface IDolomiteServiceGetJourney {
  (args: IDolomiteServiceGetJourneyInput): Promise<IDolomiteServiceGetJourneyOutput>;
}
