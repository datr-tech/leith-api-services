import { procServiceGetProcess } from './procServiceGetProcess';

export const procServiceHasProcess = async ({ processId }) => {
  const proc = await procServiceGetProcess({ processId });

  return !!proc;
};
