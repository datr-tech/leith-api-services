import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetHopOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * dolomiteServiceGetHop.negative.wrongResponse
 *
 * A single test of 'dolomiteService.getHop', where
 * the associated API will be mocked within the 'beforeAll'
 * function to return a positive, though incorrectly named
 * response, leading to a "wrong response" error.
 *
 * @author Datr.Tech Dolomite <dolomite@datr.tech>
 * @version 0.4.1
 */
describe('dolomiteServiceGetHop', () => {
  let id;
  describe('negative.wrongResponse', () => {
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
       * Mock a single 200 hop response from
       * the generated url with 'unknownField',
       * rather than the expected 'hop' field.
       */
      nock(url).get('').times(1).reply(200, {
        unknownField: id,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return the expected error when the 'hop' field can not be found", async () => {
      /*
       * Arrange
       */
      const hopId = id;
      const errorExpected = true;
      const messageExpected = 'json[hop]: not found';

      /*
       * Act
       */
      const stat = (await dolomiteService.getHop({
        hopId,
      })) as IDolomiteServiceGetHopOutputError;
      const errorFound = stat.error;
      const messageFound = stat.payload.message;

      /*
       * Assert
       */
      expect(errorFound).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
