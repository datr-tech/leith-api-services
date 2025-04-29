import { MethodEnum, ServiceEnum } from '@app-lcs/config';
import { generateServiceUrl } from '@app-lcs/util';
import { Types } from 'mongoose';

describe('generateServiceUrl', () => {
  describe('positive', () => {
    test("should return the expected url when 'methodEnum' = 'status' and 'serviceEnum' = 'admin'", () => {
      /*
       * Arrange
       */
      const id = new Types.ObjectId();
      const methodEnum = MethodEnum.status;
      const serviceEnum = ServiceEnum.admin;
      const urlExpected = `http://localhost:3010/admin/api/v1/status/${id}`;

      /*
       * Act
       */
      const urlFound = generateServiceUrl({ id, methodEnum, serviceEnum });

      /*
       * Assert
       */
      expect(urlFound).toEqual(urlExpected);
    });
  });
});
