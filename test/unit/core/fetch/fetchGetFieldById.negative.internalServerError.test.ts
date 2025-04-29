import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { fetchGetFieldById } from '@app-lcs/core/fetch';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IFetchGetFieldByIdOutputError } from '@app-lcs/interfaces/core/fetch';
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

describe('fetchGetFieldById', () => {
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
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await fetchGetFieldById({
        id,
        methodEnum,
        serviceEnum,
        targetFieldEnum,
      });
      const { error, payload } = stat as IFetchGetFieldByIdOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
