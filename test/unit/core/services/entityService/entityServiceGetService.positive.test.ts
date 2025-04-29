import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IEntityServiceGetServiceOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the admin service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.service;
const serviceEnum = ServiceEnum.entity;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

/*
 * Define the value to be returned
 * within the mocked response.
 */
const mockReturnValue = 'TEST_RETURN_VALUE';

describe('entityServiceGetService', () => {
  describe('positive', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        service: mockReturnValue,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test("should return the expected 'mockReturnValue'", async () => {
      /*
       * Arrange
       */
      const serviceId = id;
      const serviceExpected = mockReturnValue;

      /*
       * Act
       */
      let stat = await entityService.getService({ serviceId });
      const { error } = stat;
      let serviceFound = '';

      if (!error) {
        stat = stat as IEntityServiceGetServiceOutputSuccess;
        serviceFound = stat.payload.service;
      }

      /*
       * Assert
       */
      expect(serviceFound).toEqual(serviceExpected);
    });
  });
});
