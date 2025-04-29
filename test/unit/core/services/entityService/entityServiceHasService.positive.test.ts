import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * entityServiceHasService.positive
 *
 * A single test of 'entityService.hasService', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Entity <entity@datr.tech>
 * @version 0.4.1
 */
describe('entityServiceHasService', () => {
  let id;
  let mockResponse;
  describe('positive', () => {
    /*
     * DEFINE MOCK
     */
    beforeAll(() => {
      /*
       * Create an ObjectId value, which will be passed to
       * 'generateServiceUrl' in order to construct an API
       * url, whose responses will be mocked using 'Nock'. The
       * ObjectId value will also be used within the unit test,
       * itself, being passed, ultimately, to 'hasService' as
       * the expected param, 'serviceId'.
       */
      id = new Types.ObjectId();
      mockResponse = 'TEST_RESPONSE';
      const methodEnum = MethodEnum.service;
      const serviceEnum = ServiceEnum.entity;

      /*
       * Generate a url, which will be used to
       * mock the expected 'entityService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 200 service response from the generated url.
       */
      nock(url).get('').times(1).reply(200, { service: mockResponse });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test('should return the expected positive response', async () => {
      /*
       * Arrange
       */
      const serviceId = id;
      const responseExpected = true;

      /*
       * Act
       */
      const responseFound = await entityService.hasService({ serviceId });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
