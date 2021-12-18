const useHandler = () => {
  const handleSideClick = (event) => {
    const sideMenu = event.currentTarget.querySelector('#list');
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
  };
  return {
    handleSideClick,
  };
};

export default useHandler;
