import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { entityService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IEntityServiceGetResourceOutputSuccess } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * entityServiceGetResource.positive
 *
 * A single test of 'entityService.getResource', where
 * a positive response from the associated API will be
 * mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Entity <entity@datr.tech>
 * @version 0.4.1
 */
describe('entityServiceGetResource', () => {
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
       * itself, being passed, ultimately, to 'getResource' as
       * the expected param, 'resourceId'.
       */
      id = new Types.ObjectId();
      mockReturnValue = 'TEST_RETURN_VALUE';
      const methodEnum = MethodEnum.resource;
      const serviceEnum = ServiceEnum.entity;

      /*
       * Generate a url, which will be used to
       * mock the expected 'entityService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 200 resource response from the generated url.
       */
      nock(url).get('').times(1).reply(200, {
        resource: mockReturnValue,
      });
    });
    afterAll(() => {
      nock.cleanAll();
    });
    /*
     * PERFORM TEST
     */
    test("should return the expected 'mockReturnValue' for 'stat.payload.resource'", async () => {
      /*
       * Arrange
       */
      const resourceId = id;
      const resourceExpected = mockReturnValue;

      /*
       * Act
       */
      const stat = (await entityService.getResource({
        resourceId,
      })) as IEntityServiceGetResourceOutputSuccess;
      const resourceFound = stat.payload.resource;

      /*
       * Assert
       */
      expect(resourceFound).toEqual(resourceExpected);
    });
  });
});
