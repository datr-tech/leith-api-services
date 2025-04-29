import { dolomiteServiceGetHop } from './dolomiteServiceGetHop';
import { dolomiteServiceGetJourney } from './dolomiteServiceGetJourney';
import { dolomiteServiceHasHop } from './dolomiteServiceHasHop';
import { dolomiteServiceHasJourney } from './dolomiteServiceHasJourney';

export const dolomiteService = {
  getHop: dolomiteServiceGetHop,
  getJourney: dolomiteServiceGetJourney,
  hasHop: dolomiteServiceHasHop,
  hasJourney: dolomiteServiceHasJourney,
};
