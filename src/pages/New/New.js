import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory, Link } from 'react-router-dom';
import classes from './New.module.scss';
import NewText from './Text/Text';
import NewQuote from './Quote/Quote';
import NewLink from './Link/Link';
import NewChat from './Chat/Chat';
import NewPhoto from './Photo/Photo';
import NewAudio from './Audio/Audio';
import NewVideo from './Video/Video';
import { newPostIcons } from '../../components/UI/Icons';
const {
  IoText,
  AiFillCamera,
  ImQuotesLeft,
  FaLink,
  BsFillChatDotsFill,
  ImHeadphones,
  TiVideo,
} = newPostIcons;
const New = () => {
  const history = useHistory();
  const overlayClickHandler = () => {
    history.push('/dashboard');
  };
  return (
    <div className={classes.new}>
      <Route path='/new' exact>
        <div className={classes.overlay} onClick={overlayClickHandler}></div>
        <div className={classes.content}>
          <Link to='/new/text'>
            <div className={classes.text}>
              <div>
                <IoText />
              </div>
              <span>Text</span>
            </div>
          </Link>
          <Link to='/new/photo'>
            <div className={classes.photo}>
              <div>
                <AiFillCamera />
              </div>
              <span>Photo</span>
            </div>
          </Link>
          <Link to='/new/quote'>
            <div className={classes.quote}>
              <div>
                <ImQuotesLeft />
              </div>
              <span>Quote</span>
            </div>
          </Link>
          <Link to='/new/link'>
            <div className={classes.link}>
              <div>
                <FaLink />
              </div>
              <span>Link</span>
            </div>
          </Link>
          <Link to='/new/chat'>
            <div className={classes.chat}>
              <div>
                <BsFillChatDotsFill />
              </div>
              <span>Chat</span>
            </div>
          </Link>
          <Link to='/new/audio'>
            <div className={classes.audio}>
              <div>
                <ImHeadphones />
              </div>
              <span>Audio</span>
            </div>
          </Link>
          <Link to='/new/video'>
            <div className={classes.video}>
              <div>
                <TiVideo />
              </div>
              <span>Video</span>
            </div>
          </Link>
        </div>
      </Route>
      <Route path='/new/text'>
        <NewText />
      </Route>
      <Route path='/new/photo'>
        <NewPhoto />
      </Route>
      <Route path='/new/quote'>
        <NewQuote />
      </Route>
      <Route path='/new/link'>
        <NewLink />
      </Route>
      <Route path='/new/chat'>
        <NewChat />
      </Route>
      <Route path='/new/audio'>
        <NewAudio />
      </Route>
      <Route path='/new/video'>
        <NewVideo />
      </Route>
    </div>
  );
};

export default New;
