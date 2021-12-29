import {follow} from './followservice';
import { block , unblock } from '../../BlockService/blockService';

const useHandler = () => {
  const handleSideClick = (event) => {
    
    const sideMenu = event.currentTarget.querySelector('#list');
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
    var cusid_ele = document.getElementsByClassName('dropmenu');
    for (var i = 0; i < cusid_ele.length; ++i) {
      if(sideMenu !== cusid_ele[i]){
        cusid_ele[i].style.display = 'none';
      }
    }
   
  };
  const handleClick = (event, id) => {
    const f = event.currentTarget;
    f.style.display = 'none';
    follow({_id: id});
  };
  return {
    handleSideClick,
    handleClick,
  };
};

export default useHandler;
