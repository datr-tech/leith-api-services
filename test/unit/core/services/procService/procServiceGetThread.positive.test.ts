import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { procService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IProcServiceGetThreadOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * procServiceGetThread.positive
 *
 * A single test of 'procService.getThread', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
describe('procServiceGetThread', () => {
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
       * itself, being passed, ultimately, to 'getThread' as
       * the expected param, 'threadId'.
       */
      id = new Types.ObjectId();
      mockReturnValue = 'TEST_RETURN_VALUE';
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
       * Mock a single, 200 thread response from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        thread: mockReturnValue,
      });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return the expected 'mockReturnValue' for 'stat.payload.thread'", async () => {
      /*
       * Arrange
       */
      const threadId = id;
      const threadExpected = mockReturnValue;

      /*
       * Act
       */
      const stat = (await procService.getThread({
        threadId,
      })) as IProcServiceGetThreadOutputSuccess;
      const threadFound = stat.payload.thread;

      /*
       * Assert
       */
      expect(threadFound).toEqual(threadExpected);
    });
  });
});
