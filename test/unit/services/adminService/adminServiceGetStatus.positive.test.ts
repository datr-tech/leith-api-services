import { MethodEnum, ServiceEnum } from '@app-lcs/config';
import { IAdminServiceGetStatusOutputSuccess } from '@app-lcs/interfaces/services/adminService';
import { adminService } from '@app-lcs/services';
import { generateServiceUrl } from '@app-lcs/util';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the admin service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.status;
const serviceEnum = ServiceEnum.admin;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

/*
 * Define the value to be returned
 * within the mocked response.
 */
const mockReturnValue = 'TEST_RETURN_VALUE';

describe('adminServiceGetStatus', () => {
  describe('positive', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        status: mockReturnValue,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test("should return the expected 'mockReturnValue'", async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const statusExpected = mockReturnValue;

      /*
       * Act
       */
      let stat = await adminService.getStatus({ statusId });
      const { error } = stat;
      let statusFound = '';

      if (!error) {
        stat = stat as IAdminServiceGetStatusOutputSuccess;
        statusFound = stat.payload.status;
      }

      /*
       * Assert
       */
      expect(statusFound).toEqual(statusExpected);
    });
  });
});
