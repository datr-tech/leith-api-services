import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { dolomiteService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IDolomiteServiceGetHopOutputError } from '@app-lcs/interfaces/core/services';
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

describe('dolomiteServiceGetHop', () => {
  describe('negative.wrongResponse', () => {
    beforeAll(() => {
      /*
       * Mock a single positive response
       * from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        hopId: id,
      });
    });
    afterEach(() => {
      nock.cleanAll();
    });
    test('should return an error', async () => {
      /*
       * Arrange
       */
      const hopId = id;
      const errorExpected = true;
      const messageExpected = 'json[hop]: not found';

      /*
       * Act
       */
      const stat = await dolomiteService.getHop({ hopId });
      const { error } = stat;
      let messageFound = '';

      if (error) {
        messageFound = (stat as IDolomiteServiceGetHopOutputError).payload.message;
      }

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(messageFound).toEqual(messageExpected);
    });
  });
});
