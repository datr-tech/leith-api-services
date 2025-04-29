import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { adminService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IAdminServiceGetStatusOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';


/**
 * adminServiceGetStatus.negative.wrongResponse
 *
 * A single test of 'adminService.getStatus', where
 * the assocated API will be mocked within the 'beforeAll'
 * function to return a positive, though incorrectly named
 * response, leading to a "wrong response" error.
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 * @version 0.4.1
 */
describe('adminServiceGetStatus', () => {
  let id;
  describe('negative.wrongResponse', () => {
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
       * Mock a single 200 status response from
			 * the generated url with 'unknownField',
			 * rather than the expected 'status' field.
       */
      nock(url).get('').times(1).reply(200, {
        unknownField: id,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return the expected error when the 'status' field can not be found", async () => {
      /*
       * Arrange
       */
      const statusId = id;
      const errorExpected = true;
      const messageExpected = 'json[status]: not found';

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
