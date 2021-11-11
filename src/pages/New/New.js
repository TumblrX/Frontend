import React from 'react';
import classes from './New.module.scss';
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
  return (
    <div className={classes.new}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div className={classes.text}>
          <div>
            <IoText />
          </div>
          <span>Text</span>
        </div>
        <div className={classes.photo}>
          <div>
            <AiFillCamera />
          </div>
          <span>Photo</span>
        </div>
        <div className={classes.quote}>
          <div>
            <ImQuotesLeft />
          </div>
          <span>Quote</span>
        </div>
        <div className={classes.link}>
          <div>
            <FaLink />
          </div>
          <span>Link</span>
        </div>
        <div className={classes.chat}>
          <div>
            <BsFillChatDotsFill />
          </div>
          <span>Chat</span>
        </div>
        <div className={classes.audio}>
          <div>
            <ImHeadphones />
          </div>
          <span>Audio</span>
        </div>
        <div className={classes.video}>
          <div>
            <TiVideo />
          </div>
          <span>Video</span>
        </div>
      </div>
    </div>
  );
};

export default New;
