import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import {
  IProcServiceGetProcess,
  IProcServiceGetProcessOutput,
} from '@app-lcs/interfaces/core/services';

/**
 * procServiceGetProcess
 *
 * Retrieve the api-proc value associated with the received 'processId' param.
 *
 * @param {IProcServiceGetProcessInput} params
 * @param {Types.ObjectId} params.processId
 *
 * @returns { Promise<IProcServiceGetProcessOutput> }
 * @returns { Promise<IProcServiceGetProcessOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProcServiceGetProcessOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { process }}>
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
export const procServiceGetProcess: IProcServiceGetProcess = async ({
  processId,
}): Promise<IProcServiceGetProcessOutput> => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.process;
  const serviceEnum = ServiceEnum.proc;
  const targetFieldEnum = TargetFieldEnum.process;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return (await fetchGetFieldById({
    id: processId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  })) as IProcServiceGetProcessOutput;
};
