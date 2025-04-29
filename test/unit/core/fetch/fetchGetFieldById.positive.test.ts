import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IFetchGetFieldByIdOutputSuccess } from '@app-lcs/interfaces/core/fetch';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the admin service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.status;
const serviceEnum = ServiceEnum.admin;
const targetFieldEnum = TargetFieldEnum.status;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

/*
 * Define the value to be returned
 * within the mocked response.
 */
const mockReturnValue = 'TEST_RETURN_VALUE';

describe('fetchGetFieldById', () => {
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
      const statusExpected = mockReturnValue;

      /*
       * Act
       */
      let stat = await fetchGetFieldById({
        id,
        methodEnum,
        serviceEnum,
        targetFieldEnum,
      });
      const { error } = stat;
      let statusFound = '';

      if (!error) {
        stat = stat as IFetchGetFieldByIdOutputSuccess;
        statusFound = stat.payload.status;
      }

      /*
       * Assert
       */
      expect(statusFound).toEqual(statusExpected);
    });
  });
});
