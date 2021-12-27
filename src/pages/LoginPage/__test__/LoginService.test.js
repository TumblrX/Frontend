import mockAxios from "axios";
import login from "../LoginServiceToTest";

describe('Check that the login service works correctly', () => {
  it('should return true if the login is done with correct email', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status:'200',
        data: { 
          token:'123456789' 
        }
      })
    );

    const response = await login('example@example.com', '123456');  
    expect(response.result).toEqual(true);  
    
  });
  it('should return token no equal to noToken if the login is done with correct email', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status:'200',
        data: { 
          token:'123456789' 
        }
      })
    );

    const response = await login('example@example.com', '123456');  
    expect(response.token).toEqual('123456789');
  });
  
  it('should return false if the login is done with wrong email', async () => {

    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status:'fail',
        err :{
          statusCode:400,
          status:"fail"
        }    
      })
    );
    
    const response = await login('emailNotInDataBase@example.com', '123456');
    expect(response.result).toEqual(false);

  });

  it('should return noToken if the login is done with wrong email', async () => {
    
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        status:'fail',
        err :{
          statusCode:400,
          status:"fail"
        }    
      })
    );
    
    const response = await login('emailNotInDataBase@example.com', '123456');
    expect(response.token).toEqual('noToken');
    
  });
});