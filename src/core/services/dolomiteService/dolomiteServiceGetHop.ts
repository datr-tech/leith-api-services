import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IDolomiteServiceGetHop } from '@app-lcs/interfaces/core/services';

/**
 * dolomiteServiceGetHop
 *
 * Retrieve the api-dolomite value associated with the received 'hopId' param.
 *
 * @param {IDolomiteServiceGetHopInput} params
 * @param {Types.ObjectId} params.hopId
 *
 * @returns { Promise<IDolomiteServiceGetHopOutput> }
 * @returns { Promise<IDolomiteServiceGetHopOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IDolomiteServiceGetHopOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { hop }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const dolomiteServiceGetHop: IDolomiteServiceGetHop = async ({ hopId }) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.hop;
  const serviceEnum = ServiceEnum.dolomite;
  const targetFieldEnum = TargetFieldEnum.hop;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: hopId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
