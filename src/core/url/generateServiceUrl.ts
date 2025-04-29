import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { IGenerateServiceUrl } from '@app-lcs/interfaces/core/url';
import { ports } from '@datr.tech/leith-config-api-ports';

/**
 * generateServiceUrl
 *
 * Generate a URL for a service to API REST call.
 *
 * @param {IGenerateServiceUrlInput} params
 * @param {Types.ObjectId} params.id (Required)
 * @param {MethodEnum} params.methodEnum (Required)
 * @param {ServiceEnum} params.serviceEnum (Required)
 * @param {string} params.host (Optional) Defaults to 'localhost'
 * @param {number} params.version (Optional) Defaults to 1
 *
 * @returns {IGenerateServiceUrlOutput} ON SUCCESS, returns string 'url'
 *
 * @throws When 'host' is an empty string
 * @throws When 'port' has not been found
 * @throws When 'version' is a non-truthy number
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
export const generateServiceUrl: IGenerateServiceUrl = ({
  id,
  methodEnum,
  serviceEnum,
  host = 'localhost',
  version = 1,
}) => {
  /*
   * Convert the received enum params,
   * 'methodEnum' and 'serviceEnum, to strings.
   */
  const methodStr = MethodEnum[methodEnum].toString();
  const serviceStr = ServiceEnum[serviceEnum].toString();

  /*
   * Validate the converted enum variable strings,
   * along with the received 'host' and 'version' params,
   * and the output of the 'ports[serviceStr]' lookup.
   */
  if (!host) {
    throw new Error('host: invalid');
  }

  if (version <= 0) {
    throw new Error('version: invalid');
  }

  if (typeof ports[serviceStr] === 'undefined') {
    throw new Error('port: not found');
  }

  /*
   * Extract the per service 'port',
   * and generate the 'url'.
   */
  const port = ports[serviceStr];
  const url = `http://${host}:${port}/${serviceStr}/api/v${version}/${methodStr}/${id}`;

  return url;
};
