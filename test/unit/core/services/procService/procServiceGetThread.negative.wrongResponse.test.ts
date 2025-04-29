import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { procService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IProcServiceGetThreadOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * procServiceGetThread.negative.wrongResponse
 *
 * A single test of 'procService.getThread', where
 * the associated API will be mocked within the 'beforeAll'
 * function to return a positive, though incorrectly named
 * response, leading to a "wrong response" error.
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
describe('procServiceGetThread', () => {
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
       * itself, being passed, ultimately, to 'getThread' as
       * the expected param, 'threadId'.
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
       * Mock a single 200 thread response from
       * the generated url with 'unknownField',
       * rather than the expected 'thread' field.
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
    test("should return the expected error when the 'thread' field can not be found", async () => {
      /*
       * Arrange
       */
      const threadId = id;
      const errorExpected = true;
      const messageExpected = 'json[thread]: not found';

      /*
       * Act
       */
      const stat = (await procService.getThread({
        threadId,
      })) as IProcServiceGetThreadOutputError;
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
