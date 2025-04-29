import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { IEntityServiceGetFramework } from '@app-lcs/interfaces/core/services';

/**
 * entityServiceGetFramework
 *
 * Retrieve the api-entity value associated with the received 'frameworkId' param.
 *
 * @param {IEntityServiceGetFrameworkInput} params
 * @param {Types.ObjectId} params.frameworkId
 *
 * @returns { Promise<IEntityServiceGetFrameworkOutput> }
 * @returns { Promise<IEntityServiceGetFrameworkOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEntityServiceGetFrameworkOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { framework }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const entityServiceGetFramework: IEntityServiceGetFramework = async ({
  frameworkId,
}) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.framework;
  const serviceEnum = ServiceEnum.entity;
  const targetFieldEnum = TargetFieldEnum.framework;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: frameworkId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
