import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { personaService } from '@app-lcs/core/services';
import { generateServiceUrl } from '@app-lcs/core/url';
import { IPersonaServiceGetOrganisationOutputError } from '@app-lcs/interfaces/core/services';
import { Types } from 'mongoose';
import nock from 'nock';

/**
 * personaServiceGetOrganisation.negative.notFound
 *
 * A single test of 'personaService.getOrganisation', where
 * a 404 (not found) response from the associated API
 * will be mocked within the 'beforeAll' function.
 *
 * @author Datr.Tech Persona <persona@datr.tech>
 * @version 0.4.1
 */
describe('personaServiceGetOrganisation', () => {
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
       * itself, being passed, ultimately, to 'getOrganisation' as
       * the expected param, 'organisationId'.
       */
      id = new Types.ObjectId();
      const methodEnum = MethodEnum.organisation;
      const serviceEnum = ServiceEnum.persona;

      /*
       * Generate a url, which will be used to
       * mock the expected 'personaService' call
       * (within the unit test defined below),
       * and where 'id' will be the expected param.
       */
      const url = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Mock a single, 404 organisation response from the generated url.
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
      const organisationId = id;
      const errorExpected = true;
      const messageExpected = 'response: invalid';

      /*
       * Act
       */
      const stat = (await personaService.getOrganisation({
        organisationId,
      })) as IPersonaServiceGetOrganisationOutputError;
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
