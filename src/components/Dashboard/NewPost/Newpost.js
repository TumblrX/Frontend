/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import classes from './NewPost.module.scss';
import { IconContext } from 'react-icons';
import { IoText } from 'react-icons/io5';
import { AiFillCamera } from 'react-icons/ai';
import { ImQuotesLeft, ImHeadphones } from 'react-icons/im';
import { FaLink } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { TiVideo } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Newpost = function () {
  return (
    <div className={classes.newPost}>
      <Link to="/new/text" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.text }}>
          <IoText />
        </IconContext.Provider>
        Text
      </Link>
      <Link to="/new/photo" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.photo }}>
          <AiFillCamera />
        </IconContext.Provider>
        Photo
      </Link>
      <Link to="/new/quote" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.quote }}>
          <ImQuotesLeft />
        </IconContext.Provider>
        Quote
      </Link>
      <Link to="/new/link" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.link }}>
          <FaLink />
        </IconContext.Provider>
        Link
      </Link>
      <Link to="/new/chat" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.chat }}>
          <BsFillChatDotsFill />
        </IconContext.Provider>
        Chat
      </Link>
      <Link to="/new/audio" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.audio }}>
          <ImHeadphones />
        </IconContext.Provider>
        Audio
      </Link>
      <Link to="/new/video" className={classes.icon}>
        <IconContext.Provider value={{ className: classes.video }}>
          <TiVideo />
        </IconContext.Provider>
        Video
      </Link>
    </div>
  );
};

export default Newpost;
