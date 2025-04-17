import { adminService } from '../../../dist';

describe('sdminService', () => {
  describe('positive', () => {
    test('should contain the expected functions', () => {
      // Arrange
      let isGetStatusFuncValid = false;
      let isHasStatusFuncValid = false;

      // Act
      isGetStatusFuncValid = typeof adminService.getStatus !== 'undefined' && typeof adminService.getStatus === 'function';

      isHasStatusFuncValid = typeof adminService.hasStatus !== 'undefined' && typeof adminService.hasStatus === 'function';

      // Assert
      expect(isGetStatusFuncValid).toEqual(true);
      expect(isHasStatusFuncValid).toEqual(true);
    });
  });
});
