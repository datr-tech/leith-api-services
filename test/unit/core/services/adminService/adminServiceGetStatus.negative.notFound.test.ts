import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { adminService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IAdminServiceGetStatusOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * adminServiceGetStatus.negative.notFound
 *
 * A single test of 'adminService.getStatus', where
 * a 404 (not found) response from the assocated API
 * will be mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
describe('adminServiceGetStatus', () => {
  let id;
  describe('negative.notFound', () => {
    /*
     * DEFINE MOCK
     */
    beforeAll(() => {
      /*
       * Create an ObjectId value, which will be passed to
       * 'generateServiceUrl' in order to construct an API
       * url, whose responses will be mocked using 'Nock'. The
       * ObjectId value will also be used within the unit test,
       * itself, being passed, ultimately, to 'getStatus' as
			 * the expected param, 'statusId'.
       */
      id = new Types.ObjectId();
      const methodEnum = MethodEnum.status;
      const serviceEnum = ServiceEnum.admin;

      /*
       * Generate a url, which will be used to
       * mock the expected 'adminService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 404 status response from the generated url.
       */
      nock(url).get('').times(1).reply(404);
    });
    afterEach(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return 'stat.error' = true and 'stat.payload.message' = 'response: invalid'", async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await adminService.getStatus({ statusId }) as IAdminServiceGetStatusOutputError;
      const errorFound = stat.error;
      const messageFound = stat.payload.message;

      /*
       * Assert
       */
      expect(errorFound).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
