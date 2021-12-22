import {follow} from './followservice';

const useHandler = () => {
  const handleSideClick = (event) => {
    const sideMenu = event.currentTarget.querySelector('#list');
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
  };
  const handleClick = (event, id) => {
    const f = event.currentTarget;
    f.style.display = 'none';
    follow(id);
  };
  return {
    handleSideClick,
    handleClick,
  };
};

export default useHandler;
