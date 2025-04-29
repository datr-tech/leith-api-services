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
      const errorExpected = true;
      const targetField = TargetFieldEnum[targetFieldEnum].toString();
      const messageExpected = `json[${targetField}]: not found`;

      /*
       * Act
       */
      const stat = await fetchGetFieldById({
        id,
        methodEnum,
        serviceEnum,
        targetFieldEnum,
      });
      const { error } = stat;
      let messageFound = '';

      if (error) {
        messageFound = (stat as IFetchGetFieldByIdOutputError).payload.message;
      }

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
