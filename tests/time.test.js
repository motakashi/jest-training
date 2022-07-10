const Time = require("./../src/time");

describe('getTimeメソッドのテスト', () => {
  test('spyを使った方法', () => {
    const mockDate = new Date('2022-01-01T00:00:00')
    const spy = jest.spyOn(global, "Date")
                    .mockImplementation(() => mockDate)
  
    const time = new Time();
    const actual = time.getTime();
    const expected = '2022/1/1 0:00:00'
  
    expect(spy).toHaveBeenCalled()
    expect(actual).toBe(expected)
  
    // 初期化
    spy.mockReset()
    spy.mockRestore()
  })
  
  test('useFakeTimersを使った方法', () => {
    jest.useFakeTimers('modern').setSystemTime(new Date('2022-12-31 23:59:59'));

    const time = new Time();
    const actual = time.getTime();
    const expected = '2022/12/31 23:59:59'
  
    expect(actual).toBe(expected)
  })
})



