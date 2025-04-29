import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IAdminServiceGetStatus, IAdminServiceGetStatusOutput } from '@app-lcs/interfaces/core/services';

/**
 * adminServiceGetStatus
 *
 * Retrieve the api-admin value associated with the received 'statusId' param.
 *
 * @param {IAdminServiceGetStatusInput} params
 * @param {Types.ObjectId} params.statusId
 *
 * @returns { Promise<IAdminServiceGetStatusOutput> }
 * @returns { Promise<IAdminServiceGetStatusOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IAdminServiceGetStatusOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { status }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const adminServiceGetStatus: IAdminServiceGetStatus = async ({ statusId }): Promise<IAdminServiceGetStatusOutput> => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.status;
  const serviceEnum = ServiceEnum.admin;
  const targetFieldEnum = TargetFieldEnum.status;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: statusId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  }) as IAdminServiceGetStatusOutput;
};
