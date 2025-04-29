import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * entityServiceHasFramework.positive
 *
 * A single test of 'entityService.hasFramework', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Entity <entity@datr.tech>
 * @version 0.4.1
 */
describe('entityServiceHasFramework', () => {
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
       * itself, being passed, ultimately, to 'hasFramework' as
       * the expected param, 'frameworkId'.
       */
      id = new Types.ObjectId();
      mockResponse = 'TEST_RESPONSE';
      const methodEnum = MethodEnum.framework;
      const serviceEnum = ServiceEnum.entity;

      /*
       * Generate a url, which will be used to
       * mock the expected 'entityService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 200 framework response from the generated url.
       */
      nock(url).get('').times(1).reply(200, { framework: mockResponse });
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
      const frameworkId = id;
      const responseExpected = true;

      /*
       * Act
       */
      const responseFound = await entityService.hasFramework({ frameworkId });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
