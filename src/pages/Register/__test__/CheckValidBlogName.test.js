import validateBlogName from "../CheckValidBlogName";

describe('check Tat blog name is valid ', ()=>{
    it('should return 1 if blog name have spaces only',()=>{
        const result = validateBlogName(' ');
        expect(result).toEqual(1);
    });
    it('should return 2 if blog name have special chars',()=>{
        const result = validateBlogName('T@her');
        expect(result).toEqual(2);
    });

    it('should return 3 if blog name is more than 32 char',()=>{
        const result = validateBlogName('tttttttttttttttttttttttttttttttttttttttttttttttt');
        expect(result).toEqual(3);
    }); 

    it('should return 4 if blog name is valid',()=>{
        const result = validateBlogName('taher');
        expect(result).toEqual(4);
    });
    
})