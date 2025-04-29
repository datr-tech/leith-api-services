import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import {
  IEntityServiceGetService,
  IEntityServiceGetServiceOutput,
} from '@app-lcs/interfaces/core/services';

/**
 * entityServiceGetService
 *
 * Retrieve the api-entity value associated with the received 'serviceId' param.
 *
 * @param {IEntityServiceGetServiceInput} params
 * @param {Types.ObjectId} params.serviceId
 *
 * @returns { Promise<IEntityServiceGetServiceOutput> }
 * @returns { Promise<IEntityServiceGetServiceOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEntityServiceGetServiceOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { service }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const entityServiceGetService: IEntityServiceGetService = async ({
  serviceId,
}): Promise<IEntityServiceGetServiceOutput> => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.service;
  const serviceEnum = ServiceEnum.entity;
  const targetFieldEnum = TargetFieldEnum.service;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return (await fetchGetFieldById({
    id: serviceId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  })) as IEntityServiceGetServiceOutput;
};
