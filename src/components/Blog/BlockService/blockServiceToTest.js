/* eslint-disable no-unused-vars */
import axios from 'axios';
   
/**
 * this function makes a post request to the server to block a certain blog
 * @function block
 * @param {string} blogid
 * @return {void} return nothing
 */
const block = async (blogid,id) => {
    try {
        const response = await axios.post(`/api/blog/${blogid}/blocks`, id);
        return true;
    } catch (err) {
        return false;
    } 
};
/**
 * this function makes a delete request to the server to unblock a certain blog
 * @function unblock
 * @param {string} blogid
 * @return {void} return nothing
 */
const unblock = async (blogid,id) => {
    try {
        const response = await axios.delete(`/api/blog/${blogid}/unblock`, { data: id} );
        return true;
    } catch (err) {
        return false;
    }
};

const handleBlock = (id,index,blogid) => {
  const button = document.getElementById(`block${index}`);
  if(button.innerText === 'block'){
    if(block(blogid,{_id : id})){
      button.innerText = 'unblock';
      button.style.color= 'black';
    }
  }else{
    if(unblock(blogid,{_id : id})){
      button.innerText = 'block';
      button.style.color= 'red';
    }
  }
}
export { block, unblock, handleBlock };



