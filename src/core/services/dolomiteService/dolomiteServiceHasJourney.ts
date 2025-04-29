import { IDolomiteServiceHasJourney } from '@app-lcs/interfaces/core/services';
import { dolomiteServiceGetJourney } from './dolomiteServiceGetJourney';

export const dolomiteServiceHasJourney: IDolomiteServiceHasJourney = async ({
  journeyId,
}) => (await dolomiteServiceGetJourney({ journeyId })).error === false;
