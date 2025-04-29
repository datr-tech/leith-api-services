import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import {
  IEntityServiceGetResource,
  IEntityServiceGetResourceOutput,
} from '@app-lcs/interfaces/core/services';

/**
 * entityServiceGetResource
 *
 * Retrieve the api-entity value associated with the received 'resourceId' param.
 *
 * @param {IEntityServiceGetResourceInput} params
 * @param {Types.ObjectId} params.resourceId
 *
 * @returns { Promise<IEntityServiceGetResourceOutput> }
 * @returns { Promise<IEntityServiceGetResourceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEntityServiceGetResourceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { resource }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const entityServiceGetResource: IEntityServiceGetResource = async ({
  resourceId,
}): Promise<IEntityServiceGetResourceOutput> => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.resource;
  const serviceEnum = ServiceEnum.entity;
  const targetFieldEnum = TargetFieldEnum.resource;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return (await fetchGetFieldById({
    id: resourceId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  })) as IEntityServiceGetResourceOutput;
};
