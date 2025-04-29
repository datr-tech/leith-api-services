import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IEntityServiceGetFrameworkOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * entityServiceGetFramework.negative.internalServiceError
 *
 * A single test of 'entityService.getFramework', where
 * a 500 (internal server error) response from the
 * associated API will be mocked within the 'beforeAll'
 * function.
 *
 * @author Datr.Tech Entity <entity@datr.tech>
 * @version 0.4.1
 */
describe('entityServiceGetFramework', () => {
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
       * itself, being passed, ultimately, to 'getFramework' as
       * the expected param, 'frameworkId'.
       */
      id = new Types.ObjectId();
      const methodEnum = MethodEnum.framework;
      const serviceEnum = ServiceEnum.entity;

      /*
       * Generate a url, which will be used to
       * mock the expected 'entityService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 500 framework response from the generated url.
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
      const frameworkId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = await entityService.getFramework({ frameworkId });
      const { error, payload } = stat as IEntityServiceGetFrameworkOutputError;
      const { message } = payload;

      /*
       * Assert
       */
      expect(error).toEqual(errorExpected);
      expect(message).toEqual(messageExpected);
    });
  });
});
