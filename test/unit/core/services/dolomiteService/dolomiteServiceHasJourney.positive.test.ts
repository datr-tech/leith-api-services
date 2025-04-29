import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * dolomiteServiceHasJourney.positive
 *
 * A single test of 'dolomiteService.hasJourney', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Dolomite <dolomite@datr.tech>
 * @version 0.4.1
 */
describe('dolomiteServiceHasJourney', () => {
  let id;
  let mockReturnValue;
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
       * itself, being passed, ultimately, to 'hasJourney' as
       * the expected param, 'journeyId'.
       */
      id = new Types.ObjectId();
      mockReturnValue = 'TEST_RETURN_VALUE';
      const methodEnum = MethodEnum.journey;
      const serviceEnum = ServiceEnum.dolomite;

      /*
       * Generate a url, which will be used to
       * mock the expected 'dolomiteService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 200 journey response from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        journey: mockReturnValue,
      });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test('should return the expected, truthy response', async () => {
      /*
       * Arrange
       */
      const journeyId = id;
      const responseExpected = true;

      /*
       * Act
       */
      const responseFound = await dolomiteService.hasJourney({ journeyId });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
