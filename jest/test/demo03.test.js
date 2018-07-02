const mockCallback = jest.fn();
[0, 1].forEach(mockCallback);

test('do some mack', () => {

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);
})