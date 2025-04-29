import { MethodEnum, ServiceEnum } from '@app-lcs/config';
import { IAdminServiceGetStatusOutputError } from '@app-lcs/interfaces/services/adminService';
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

describe('adminServiceGetStatus', () => {
  describe('negative.internalServiceError', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(500);
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test('should return stat.error = true', async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await adminService.getStatus({ statusId });
      const { error, payload } = stat as IAdminServiceGetStatusOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
