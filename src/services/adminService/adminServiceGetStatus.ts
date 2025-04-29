import { fetchDefaultsGet, MethodEnum, ServiceEnum } from '@app-lcs/config';
import {
  IAdminServiceGetStatus,
  IAdminServiceGetStatusOutputError,
} from '@app-lcs/interfaces/adminService';
import { baseStat } from '@app-lcs/utils';

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
export const adminServiceGetStatus: IAdminServiceGetStatus = async ({ statusId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Construct the service 'url', which will
     * be used to call the associated API via 'fetch'.
     */
    const methodEnum = MethodEnum.status;
    const serviceEnum = ServiceEnum.admin;
    const url = generateServiceUrl({ id: statusId, methodEnum, serviceEnum });
    const response = await fetch(url, fetchDefaultsGet);

    /*
     * Check the validity of the fetch response.
     * When successful, extract a JSON object from the response.
     * Otherwise, throw an error.
     */
    if (!response.ok) throw new Error('response: invalid');
    const json = await response.json();

    /*
     * Ensure that the expected 'status'
     * field has been retrieved. Then return
     * it within the standard service response
     * object, 'stat'. Otherwise, throw an error.
     */
    if (json && typeof json['status'] !== 'undefined') {
      stat.error = false;
      stat.payload = { status: json['status'] };
    } else {
      throw new Error('json[status]: not found');
    }

    /*
     * Cast the response object to
     * 'IAdminServiceGetStatusOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IAdminServiceGetStatusOutput'.
     */
    return stat as IAdminServiceGetStatusOutputSuccess;
  } catch (error) {
    /*
     * Use the standard service response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IAdminServiceGetStatusOutputError',
     */
    return stat as IAdminServiceGetStatusOutputError;
  }
};
