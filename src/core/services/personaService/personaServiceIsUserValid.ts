import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IPersonaServiceIsUserValid } from '@app-lcs/interfaces/core/services';

/**
 * personaServiceIsUserValid
 *
 * Retrieve the api-persona value associated with the received 'userId' param.
 *
 * @param {IPersonaServiceIsUserValidInput} params
 * @param {Types.ObjectId} params.validityId
 *
 * @returns { Promise<IPersonaServiceIsUserValidOutput> }
 * @returns { Promise<IPersonaServiceIsUserValidOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IPersonaServiceIsUserValidOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { validity }}>
 *
 * @author Datr.Tech Persona <persona@datr.tech>
 * @version 0.4.1
 */
export const personaServiceIsUserValid: IPersonaServiceIsUserValid = async ({
  userId,
}) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.user;
  const serviceEnum = ServiceEnum.persona;
  const targetFieldEnum = TargetFieldEnum.validity;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: userId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
