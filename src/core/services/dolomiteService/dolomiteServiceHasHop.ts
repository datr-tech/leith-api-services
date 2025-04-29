import { IDolomiteServiceHasHop } from '@app-lcs/interfaces/core/services';
import { dolomiteServiceGetHop } from './dolomiteServiceGetHop';

export const dolomiteServiceHasHop: IDolomiteServiceHasHop = async ({ hopId }) =>
  (await dolomiteServiceGetHop({ hopId })).error === false;
