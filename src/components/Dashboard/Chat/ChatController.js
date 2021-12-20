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
const scroll = (scrollRef) => {
  scrollRef.current?.scrollIntoView({ block: 'start' });
};
export {
  open, close, dropDown, scroll,
};
