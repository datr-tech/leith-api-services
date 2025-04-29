import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { baseStat } from '@app-lcs/core/response';
import { generateServiceUrl } from '@app-lcs/core/url';
import {
  IFetchGetFieldById,
  IFetchGetFieldByIdOutputError,
  IFetchGetFieldByIdOutputSuccess,
} from '@app-lcs/interfaces/core/fetch';
import { fetchGetHeader } from './fetchGetHeader';

/**
 * fetchGetFieldById
 *
 * Retrieve the per service, 'serviceEnum', field value,
 * 'targetFieldEnum', associated with the received 'id' param.
 *
 * @param {IFetchGetFieldByIdInput} params
 * @param {Types.ObjectId} params.id (Required)
 * @param {MethodEnum} params.methodEnum (Required)
 * @param {ServiceEnum} params.serviceEnum (Required)
 * @param {TargetFieldEnum} params.targetFieldEnum (Required)
 *
 * @returns { Promise<IFetchGetFieldByIdOutput> }
 * @returns { Promise<IFetchGetFieldByIdOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IFetchGetFieldByIdOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { targetField }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const fetchGetFieldById: IFetchGetFieldById = async ({
  id,
  methodEnum,
  serviceEnum,
  targetFieldEnum,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Cast 'targetFieldEnum' to a string.
     */
    const targetField = TargetFieldEnum[targetFieldEnum].toString();

    /*
     * Construct the service 'url', which will
     * be used to call the associated API via 'fetch'.
     */
    const url = generateServiceUrl({ id, methodEnum, serviceEnum });
    const response = await fetch(url, fetchGetHeader);

    /*
     * Check the validity of the fetch response. When successful,
     * extract a JSON object from the 'response'. Otherwise,
     * throw an error.
     */
    if (!response.ok) throw new Error('response: invalid');
    const json = await response.json();

    /*
     * Ensure that the expected 'targetField' has been retrieved,
     * and return it within the standard response object, 'stat'.
     * Otherwise, throw an error.
     */
    if (json && typeof json[targetField] !== 'undefined') {
      const targetFieldValue = json[targetField] as string;

      stat.error = false;
      stat.payload = {};
      stat.payload[targetField] = targetFieldValue;
    } else {
      throw new Error(`json[${targetField}]: not found`);
    }

    /*
     * Cast the response object to 'IFetchGetFieldByIdOutputSuccess',
     * where the casting interface is a component of the binary
     * union type 'IFetchGetFieldByIdOutput'.
     */
    return stat as IFetchGetFieldByIdOutputSuccess;
  } catch (error) {
    /*
     * Use the standard response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IFetchGetFieldByIdOutputError',
     */
    return stat as IFetchGetFieldByIdOutputError;
  }
};
