import configureStore from '../../../redux/store';
import { setIsSearch, setBlogs, setNewMessage, setConversations} from '../../../redux/DropDownInbox';
import { setIsChat } from '../../../redux/DashBoardReducer';
import { setFriend } from '../../../redux/ChatReducer';
import { search, getConversations } from './DropDownInboxService';

    const handleOpenSearch = (e, isSearch) => {
        e.preventDefault();
        configureStore.dispatch(setIsSearch(!isSearch));
        if(e.target.innerText === 'New Message'){
          e.target.innerText ='Never Mind'
        }else {
          e.target.innerText ='New Message';
          configureStore.dispatch(setBlogs([]));
        }
    }

  const handleSearch = async (newMessage) =>{
    if (!newMessage.match(/^\s*$/)) {
      const mySearch = await search(newMessage);
      // console.log('my Search', mySearch)
    //   mySearch.blogs = await mySearch.blogs.filter((blog) => {
    //     return blog._id !== id;
    //   })
      await configureStore.dispatch(setBlogs(mySearch.blogs))
    }
    configureStore.dispatch(setNewMessage(''))
  }

  const handleOpenChat = async (conversation)=>{
    let freind={};
    if(conversation.hasOwnProperty('description')  ){
      freind ={ id:conversation.owner , handle:conversation.handle   , avatar:conversation.avatar };
    } else{
      freind ={ id:conversation.textedUser , handle:conversation.blogHandle   , avatar:conversation.avatar };
    }
    console.log('freind ', freind);   
    // console.log('conversation ', conversation);   
    await configureStore.dispatch(setFriend(freind));
    await configureStore.dispatch(setIsChat(true));
  };

  const componentOnMount = async () => {
    const conversations = await getConversations();
    if(conversations.hasOwnProperty('data')){
      await configureStore.dispatch(setConversations(conversations.data));
    }
    // console.log('data -->', conversations);
  }
  export { handleOpenSearch, handleSearch, handleOpenChat, componentOnMount };