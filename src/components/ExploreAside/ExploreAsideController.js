import { fetchBlogs } from "./CheckBlogServices"

const showMoreTags=function(){
    fetchBlogs();
}


export{showMoreTags}