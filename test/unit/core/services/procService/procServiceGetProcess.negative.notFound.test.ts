import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { procService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IProcServiceGetProcessOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * procServiceGetProcess.negative.notFound
 *
 * A single test of 'procService.getProcess', where
 * a 404 (not found) response from the associated API
 * will be mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Proc <proc@datr.tech>
 * @version 0.4.1
 */
describe('procServiceGetProcess', () => {
  let id;
  describe('negative.notFound', () => {
    /*
     * DEFINE MOCK
     */
    beforeAll(() => {
      /*
       * Create an ObjectId value, which will be passed to
       * 'generateServiceUrl' in order to construct an API
       * url, whose responses will be mocked using 'Nock'. The
       * ObjectId value will also be used within the unit test,
       * itself, being passed, ultimately, to 'getProcess' as
       * the expected param, 'processId'.
       */
      id = new Types.ObjectId();
      const methodEnum = MethodEnum.process;
      const serviceEnum = ServiceEnum.proc;

      /*
       * Generate a url, which will be used to
       * mock the expected 'procService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 404 process response from the generated url.
       */
      nock(url).get('').times(1).reply(404);
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
      const processId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = (await procService.getProcess({
        processId,
      })) as IProcServiceGetProcessOutputError;
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
