const { hasUncaughtExceptionCaptureCallback } = require('process');
const TestService = require('./../src/testService');


/* 参考
https://weseek.co.jp/tech/2469/#i-15
*/


describe("TestServiceクラスのテスト", () =>{

  describe("multiplyNumメソッドのテスト", () => {
    test('multiplyNum', () => {
      const testService = new TestService();
      expect(testService.multiplyNum(1, 1)).toBe(1);
    });
  })

  describe("savNumメソッドのテスト", () => {
    test('saveNum', async () => {
      let testSaveTo = [];

      const testService = new TestService();
      expect(await testService.saveNum(1, testSaveTo)).toBe("Saved");
    });
  })

  describe("multiplyAndSaveメソッドのテスト", () => {
    
    test('multiplyAndSave', async () => {
      jest.mock('./../src/testService', () => {
        const originalModule = jest.requireActual('./../src/testService');
      
        return {
          __esModule: true,
          ...originalModule,
          saveNum: jest.fn(() => 'mockedSaved'),
        };
      });

      const number = 10;
      const multiplyBy = 10;
      const saveTo = [];
    
      const expectedNumAfterMultiplied = 100;
    
      const testService = new TestService();
      expect(testService.multiplyAndSave(number, multiplyBy, saveTo)).toBe(expectedNumAfterMultiplied);
    });
  })

})