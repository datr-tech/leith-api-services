import { dolomiteServiceGetHop } from './dolomiteServiceGetHop';

export const dolomiteServiceHasHop = async ({ hopId }) => {
  const hop = await dolomiteServiceGetHop({ hopId });

  return !!hop;
};
