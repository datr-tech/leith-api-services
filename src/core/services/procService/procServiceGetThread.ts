import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IProcServiceGetThread } from '@app-lcs/interfaces/core/services';

/**
 * procServiceGetThread
 *
 * Retrieve the api-proc value associated with the received 'threadId' param.
 *
 * @param {IProcServiceGetThreadInput} params
 * @param {Types.ObjectId} params.threadId
 *
 * @returns { Promise<IProcServiceGetThreadOutput> }
 * @returns { Promise<IProcServiceGetThreadOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcServiceGetThreadOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { thread }}>
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
export const procServiceGetThread: IProcServiceGetThread = async ({ threadId }) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.thread;
  const serviceEnum = ServiceEnum.proc;
  const targetFieldEnum = TargetFieldEnum.thread;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: threadId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
