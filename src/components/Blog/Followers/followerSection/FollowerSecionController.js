const useHandler = () => {
  const handleSideClick = () => {
    const sideMenu = document.getElementById('List');
    console.log(sideMenu);
    if (sideMenu.style.display === 'none') { sideMenu.style.display = 'block'; } else { sideMenu.style.display = 'none'; }
  };
  return {
    handleSideClick,
  };
};

export default useHandler;
