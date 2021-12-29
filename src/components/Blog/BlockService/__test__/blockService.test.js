import mockAxios from "axios";
import { block } from "../blockServiceToTest";

describe('Check that the block service works correctly', () => {
  it('should return true if the block is done with correct blogid', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status:'200',
      })
    );
    const response = await block('example@example.com', '123456');  
    expect(response).toEqual(true);  
    
  });
});