import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { adminService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * adminServiceHasStatus.negative
 *
 * A single test of 'adminService.hasStatus', where
 * a negative response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
describe('adminServiceHasStatus', () => {
  let id;
  describe('negative', () => {
    /*
     * DEFINE MOCK
     */
    beforeAll(() => {
      /*
       * Create an ObjectId value, which will be passed to
       * 'generateServiceUrl' in order to construct an API
       * url, whose responses will be mocked using 'Nock'. The
       * ObjectId value will also be used within the unit test,
       * itself, being passed, ultimately, to 'hasStatus' as
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
      nock(url).get('').times(1).reply(404, {});
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test('should return the expected negative response', async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const responseExpected = false;

      /*
       * Act
       */
      const responseFound = await adminService.hasStatus({ statusId });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
