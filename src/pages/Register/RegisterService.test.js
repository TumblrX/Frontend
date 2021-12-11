import register from './RegisterService';

describe('Check that the register service works correctly', () => {
  /* it('should return true if the register done correctly', async () => {
    const response = await register('example1', 'example@example.com', 'Taher#123');
    expect(response.result).toEqual(true);
  }); */
  it('should return false if the register done in a wrong way because data already exists before', async () => {
    const response = await register('example1', 'example@example.com', 'Taher#123');
    expect(response.result).toEqual(false);
  });
  it('should return noToken if the register is unsuccessful', async () => {
    const response = await register('example1', 'example@example.com', 'Taher#123');
    expect(response.token).toEqual('noToken');
  });
});
