const validateBlogName = (blogName) => {
    const empty = /^\s+$/;
    const noSpecialChars = /^[A-Za-z0-9-]*$/;
    const normalLenght = /^(?=.{0,32}$)([-'\w]+\s)*[-'\w]+$/;
    if (empty.test(blogName)){
        return 1;
    }else if(!noSpecialChars.test(blogName)){
        return 2;
    }else if(!normalLenght.test(blogName)){
        return 3;
    }
    return 4;   
};
export default validateBlogName;