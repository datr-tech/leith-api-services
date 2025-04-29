import { IDolomiteServiceHasJourneyInput } from './IDolomiteServiceHasJourneyInput';
import { IDolomiteServiceHasJourneyOutput } from './IDolomiteServiceHasJourneyOutput';

export interface IDolomiteServiceHasJourney {
  (args: IDolomiteServiceHasJourneyInput): Promise<IDolomiteServiceHasJourneyOutput>;
}
