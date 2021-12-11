const dropDown = () => {
  document.getElementById('Chat').style.display = 'none';
  document.getElementById('ExitAvatar').style.display = 'block';
};
const close = () => {
  document.getElementById('Chat').style.display = 'none';
};
const open = () => {
  document.getElementById('Chat').style.display = 'block';
  document.getElementById('ExitAvatar').style.display = 'none';
};

export { open, close, dropDown };
