import { dolomiteServiceGetJourney } from './dolomiteServiceGetJourney';

export const dolomiteServiceHasJourney = async ({ journeyId }) => {
  const journey = await dolomiteServiceGetJourney({ journeyId });

  return !!journey;
};
