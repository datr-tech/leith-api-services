import { procServiceGetProcess } from './procServiceGetProcess';
import { procServiceGetThread } from './procServiceGetThread';
import { procServiceHasProcess } from './procServiceHasProcess';
import { procServiceHasThread } from './procServiceHasThread';

export const procService = {
  getProcess: procServiceGetProcess,
  getThread: procServiceGetThread,
  hasProcess: procServiceHasProcess,
  hasThread: procServiceHasThread,
};
