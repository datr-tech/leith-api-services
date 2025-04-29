import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetJourneyOutputError } from '@app-lcs/interfaces/core/services';
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

describe('dolomiteServiceGetJourney', () => {
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
      const journeyId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await dolomiteService.getJourney({ journeyId });
      const { error, payload } = stat as IDolomiteServiceGetJourneyOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
