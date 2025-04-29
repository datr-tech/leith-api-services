import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { procService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IProcServiceGetThreadOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * procServiceGetThread.negative.internalServiceError
 *
 * A single test of 'procService.getThread', where
 * a 500 (internal server error) response from the
 * associated API will be mocked within the 'beforeAll'
 * function.
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
describe('procServiceGetThread', () => {
  let id;
  describe('negative.internalServiceError', () => {
    /*
     * DEFINE MOCK
     */
    beforeAll(() => {
      /*
       * Create an ObjectId value, which will be passed to
       * 'generateServiceUrl' in order to construct an API
       * url, whose responses will be mocked using 'Nock'. The
       * ObjectId value will also be used within the unit test,
       * itself, being passed, ultimately, to 'getThread' as
       * the expected param, 'statusId'.
       */
      id = new Types.ObjectId();
      const methodEnum = MethodEnum.thread;
      const serviceEnum = ServiceEnum.proc;

      /*
       * Generate a url, which will be used to
       * mock the expected 'procService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 500 status response from the generated url.
       */
      nock(url).get('').times(1).reply(500);
    });
    afterEach(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return 'stat.error' = true and 'stat.payload.message' = 'response: invalid'", async () => {
      /*
       * Arrange
       */
      const threadId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await procService.getThread({ threadId });
      const { error, payload } = stat as IProcServiceGetThreadOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
