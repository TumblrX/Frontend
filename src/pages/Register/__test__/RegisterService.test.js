import mockAxios from "axios";
import register from "../RegisterServiceToTest";

describe('Check that the register service works correctly', () => {
  it('should return symbol = 5 and token if the data are correct', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: { 
          token:'123456789',
          symbol:'5' 
        }
      })
    );

    const response = await register('taher','example@example.com', '123456');  
    expect(response.result).toEqual('5');  
    expect(response.token).toEqual('123456789');  
    
  });
  it('should return symbol != 5 and empty token if the data are wrong', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: { 
          token:'',
          symbol:'3' 
        }
      })
    );

    const response = await register('taher','example@ex', '123456');  
    expect(response.result).not.toEqual('5');  
    expect(response.token).toEqual('');      
  });
});