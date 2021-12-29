/* eslint-disable no-unused-vars */
import api from '../../../api/api';
   
/**
 * this function makes a post request to the server to block a certain blog
 * @function block
 * @param {string} blogid
 * @return {void} return nothing
 */
const block = async (blogid,id) => {
    try {
        const response = await api.post(`/api/blog/${blogid}/blocks`, id);
        console.log('success');
    } catch (err) {
        console.log(`Error: ${err.response.data.message}`);
        return false;
    }
    return true;
};
/**
 * this function makes a delete request to the server to unblock a certain blog
 * @function unblock
 * @param {string} blogid
 * @return {void} return nothing
 */
const unblock = async (blogid,id) => {
    try {
        const response = await api.delete(`/api/blog/${blogid}/unblock`, { data: id} );
        console.log('success');
    } catch (err) {
        console.log(`Error: ${err.response.data.message}`);
        return false;
    }
    return true;
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



