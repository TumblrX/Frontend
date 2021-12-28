import validateEmail from "../CheckValidEmailService";

describe('check that the email is validated well', ()=>{
    it('should return true if the input email is valid',()=>{
        const result = validateEmail('taher@gamil.com');
        expect(result).toBeTruthy();
    });
    it('should return false if the input email don\'t have @',()=>{
        const result = validateEmail('tahergamil.com');
        expect(result).toBeFalsy();
    });
    it('should return false if the input email don\'t have .',()=>{
        const result = validateEmail('tahergamil.com');
        expect(result).toBeFalsy();
    });
})