import validatePassword from "../CheckValidPasswordService";

describe('check that the password is validated well', ()=>{
    it('should return true if the password is 8 chars or longer ',()=>{
        const result = validatePassword('12345678');
        expect(result).toBeTruthy();
    });
    it('should return false if the password is 8 chars or longer ',()=>{
        const result = validatePassword('123456');
        expect(result).toBeFalsy();
    })
})