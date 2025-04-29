import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetJourneyOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the dolomite service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.journey;
const serviceEnum = ServiceEnum.dolomite;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

/*
 * Define the value to be returned
 * within the mocked response.
 */
const mockReturnValue = 'TEST_RETURN_VALUE';

describe('dolomiteServiceGetJourney', () => {
  describe('positive', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        journey: mockReturnValue,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test("should return the expected 'mockReturnValue'", async () => {
      /*
       * Arrange
       */
      const journeyId = id;
      const journeyExpected = mockReturnValue;

      /*
       * Act
       */
      let stat = await dolomiteService.getJourney({ journeyId });
      const { error } = stat;
      let journeyFound = '';

      if (!error) {
        stat = stat as IDolomiteServiceGetJourneyOutputSuccess;
        journeyFound = stat.payload.journey;
      }

      /*
       * Assert
       */
      expect(journeyFound).toEqual(journeyExpected);
    });
  });
});
