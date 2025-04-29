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
  describe('negative.wrongResponse', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        statusId: id,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test('should return an error', async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const errorExpected = true;
      const messageExpected = 'json[status]: not found';

      /*
       * Act
       */
      const stat = await adminService.getStatus({ statusId });
      const { error } = stat;
      let messageFound = '';

      if (error) {
        messageFound = (stat as IAdminServiceGetStatusOutputError).payload.message;
      }

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
