import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetHopOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/*
 * Generate a url for the dolomite service,
 * where 'id' will be the expected param.
 */
const id = new Types.ObjectId();
const methodEnum = MethodEnum.hop;
const serviceEnum = ServiceEnum.dolomite;
const url = generateServiceUrl({ id, methodEnum, serviceEnum });

/*
 * Define the value to be returned
 * within the mocked response.
 */
const mockReturnValue = 'TEST_RETURN_VALUE';

describe('dolomiteServiceGetHop', () => {
  describe('positive', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        hop: mockReturnValue,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test("should return the expected 'mockReturnValue'", async () => {
      /*
       * Arrange
       */
      const hopId = id;
      const hopExpected = mockReturnValue;

      /*
       * Act
       */
      let stat = await dolomiteService.getHop({ hopId });
      const { error } = stat;
      let hopFound = '';

      if (!error) {
        stat = stat as IDolomiteServiceGetHopOutputSuccess;
        hopFound = stat.payload.hop;
      }

      /*
       * Assert
       */
      expect(hopFound).toEqual(hopExpected);
    });
  });
});
