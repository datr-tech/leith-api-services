import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { generateServiceUrl } from '@app-lcs/core/url';
import { Types } from 'mongoose';

describe('generateServiceUrl', () => {
  describe('negative', () => {
    test("should throw an error when the value of the received 'host' param is an empty string.", () => {
      /*
       * Arrange
       */
      const host = '';
      const id = new Types.ObjectId();
      const methodEnum = MethodEnum.status;
      const serviceEnum = ServiceEnum.admin;
      const errorMessageExpected = 'host: invalid';

      /*
       * Act
       */
      const handler = () => {
        generateServiceUrl({ host, id, methodEnum, serviceEnum });
      };

      /*
       * Assert
       */
      expect(handler).toThrow(errorMessageExpected);
    });
    test("should throw an error when the value of the received 'version' param is zero.", () => {
      /*
       * Arrange
       */
      const id = new Types.ObjectId();
      const methodEnum = MethodEnum.status;
      const serviceEnum = ServiceEnum.admin;
      const version = 0;
      const errorMessageExpected = 'version: invalid';

      /*
       * Act
       */
      const handler = () => {
        generateServiceUrl({ id, methodEnum, serviceEnum, version });
      };

      /*
       * Assert
       */
      expect(handler).toThrow(errorMessageExpected);
    });
    test("should throw an error when the value of the received 'version' param is a negative number.", () => {
      /*
       * Arrange
       */
      const id = new Types.ObjectId();
      const methodEnum = MethodEnum.status;
      const serviceEnum = ServiceEnum.admin;
      const version = -10;
      const errorMessageExpected = 'version: invalid';

      /*
       * Act
       */
      const handler = () => {
        generateServiceUrl({ id, methodEnum, serviceEnum, version });
      };

      /*
       * Assert
       */
      expect(handler).toThrow(errorMessageExpected);
    });
  });
});
