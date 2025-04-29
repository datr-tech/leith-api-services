import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetHopOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * dolomiteServiceGetHop.positive
 *
 * A single test of 'dolomiteService.getHop', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Dolomite <dolomite@datr.tech>
 * @version 0.4.1
 */
describe('dolomiteServiceGetHop', () => {
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
       * itself, being passed, ultimately, to 'getHop' as
       * the expected param, 'hopId'.
       */
      id = new Types.ObjectId();
      mockReturnValue = 'TEST_RETURN_VALUE';
      const methodEnum = MethodEnum.hop;
      const serviceEnum = ServiceEnum.dolomite;

      /*
       * Generate a url, which will be used to
       * mock the expected 'dolomiteService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 200 hop response from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        hop: mockReturnValue,
      });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return the expected 'mockReturnValue' for 'stat.payload.hop'", async () => {
      /*
       * Arrange
       */
      const hopId = id;
      const hopExpected = mockReturnValue;

      /*
       * Act
       */
      const stat = (await dolomiteService.getHop({
        hopId,
      })) as IDolomiteServiceGetHopOutputSuccess;
      const hopFound = stat.payload.hop;

      /*
       * Assert
       */
      expect(hopFound).toEqual(hopExpected);
    });
  });
});
