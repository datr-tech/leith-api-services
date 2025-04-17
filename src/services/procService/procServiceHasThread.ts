import { procServiceGetThread } from './procServiceGetThread';

export const procServiceHasThread = async ({ threadId }) => {
  const thread = await procServiceGetThread({ threadId });

  return !!thread;
};
