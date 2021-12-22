import checkNonEmptyFields from "./CheckNonEmptyFieldsService";

describe('check THat feilds are not empty', ()=>{
    it('should return 0 if all inputs are empty',()=>{
        const result = checkNonEmptyFields('', '', '');
        expect(result).toEqual(0);
    });
    it('should return 1 if all inputs are empty',()=>{
        const result = checkNonEmptyFields('', 'a', '');
        expect(result).toEqual(1);
    });
    it('should return 2 if all inputs are empty',()=>{
        const result = checkNonEmptyFields('a', '', '');
        expect(result).toEqual(2);
    });
    it('should return 3 if all inputs are empty',()=>{
        const result = checkNonEmptyFields('a', 'a', '');
        expect(result).toEqual(3);
    });
    it('should return 4 if all inputs are filled',()=>{
        const result = checkNonEmptyFields('a', 'b', 'c');
        expect(result).toEqual(4);
    });
    
})