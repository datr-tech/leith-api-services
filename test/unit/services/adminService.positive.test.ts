import { adminService } from '@app-lcs/services';

describe('adminService', () => {
  describe('positive', () => {
    test('should contain the expected number of functions', () => {
      // Arrange
      const numFuncsExpected = 2;

      // Act
      const numFuncsFound = Object.keys(adminService).length;

      // Assert
      expect(numFuncsFound).toEqual(numFuncsExpected);
    });
  });
});
