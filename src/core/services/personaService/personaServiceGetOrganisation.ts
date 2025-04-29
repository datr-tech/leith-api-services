import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IPersonaServiceGetOrganisation } from '@app-lcs/interfaces/core/services';

/**
 * personaServiceGetOrganisation
 *
 * Retrieve the api-persona value associated with the received 'organisationId' param.
 *
 * @param {IPersonaServiceGetOrganisationInput} params
 * @param {Types.ObjectId} params.organisationId
 *
 * @returns { Promise<IPersonaServiceGetOrganisationOutput> }
 * @returns { Promise<IPersonaServiceGetOrganisationOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IPersonaServiceGetOrganisationOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisation }}>
 *
 * @author Datr.Tech Persona <persona@datr.tech>
 * @version 0.4.1
 */
export const personaServiceGetOrganisation: IPersonaServiceGetOrganisation = async ({
  organisationId,
}) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.organisation;
  const serviceEnum = ServiceEnum.persona;
  const targetFieldEnum = TargetFieldEnum.organisation;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: organisationId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
