import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IEntityServiceGetResourceOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the admin service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.resource;
const serviceEnum = ServiceEnum.entity;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

describe('entityServiceGetResource', () => {
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
      const resourceId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await entityService.getResource({ resourceId });
      const { error, payload } = stat as IEntityServiceGetResourceOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
