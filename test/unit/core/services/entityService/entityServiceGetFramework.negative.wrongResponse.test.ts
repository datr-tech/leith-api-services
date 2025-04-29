import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IEntityServiceGetFrameworkOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the admin service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.framework;
const serviceEnum = ServiceEnum.entity;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

describe('entityServiceGetFramework', () => {
  describe('negative.wrongResponse', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        frameworkId: id,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test('should return an error', async () => {
      /*
       * Arrange
       */
      const frameworkId = id;
      const errorExpected = true;
      const messageExpected = 'json[framework]: not found';

      /*
       * Act
       */
      const stat = await entityService.getFramework({ frameworkId });
      const { error } = stat;
      let messageFound = '';

      if (error) {
        messageFound = (stat as IEntityServiceGetFrameworkOutputError).payload.message;
      }

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
