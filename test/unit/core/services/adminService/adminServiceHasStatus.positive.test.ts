import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { adminService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * adminServiceHasStatus.positive
 *
 * A single test of 'adminService.hasStatus', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
describe('adminServiceHasStatus', () => {
  let id;
  let mockReturnValue;
  describe('positive', () => {
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
      mockReturnValue = 'TEST_RETURN_VALUE';
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
       * Mock a single, 200 status response from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        status: mockReturnValue,
      });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test('should return the expected, truthy response', async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const responseExpected = true;

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
