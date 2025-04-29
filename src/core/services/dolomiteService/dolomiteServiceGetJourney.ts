import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import {
  IDolomiteServiceGetJourney,
  IDolomiteServiceGetJourneyOutputError,
  IDolomiteServiceGetJourneyOutputSuccess,
} from '@app-lcs/interfaces/core/services';

/**
 * dolomiteServiceGetJourney
 *
 * Retrieve the api-dolomite value associated with the received 'journeyId' param.
 *
 * @param {IDolomiteServiceGetJourneyInput} params
 * @param {Types.ObjectId} params.journeyId
 *
 * @returns { Promise<IDolomiteServiceGetJourneyOutput> }
 * @returns { Promise<IDolomiteServiceGetJourneyOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IDolomiteServiceGetJourneyOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journey }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const dolomiteServiceGetJourney: IDolomiteServiceGetJourney = async ({
  journeyId,
}) => {
  /*
   * Assemble the required params for the 'fetchGetFieldById' call.
   */
  const methodEnum = MethodEnum.journey;
  const serviceEnum = ServiceEnum.dolomite;
  const targetFieldEnum = TargetFieldEnum.journey;

  /*
   * Retrieve the value of the target field,
   * 'targetFieldEnum, within the standard
   * response object, stat.
   */
  return await fetchGetFieldById({
    id: journeyId,
    methodEnum,
    serviceEnum,
    targetFieldEnum,
  });
};
