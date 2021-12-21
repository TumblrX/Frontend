/* eslint-disable space-before-blocks */
/* eslint quotes: ["error","single"] */
/* eslint jsx-quotes: ["error", "prefer-single"] */
/* eslint-disable no-unused-vars */

/**
 * This is the /new page
 * @module New
 * @author Yousef Elshabrawy
 */

import React, { useState } from 'react';
import { Route, useHistory, Link } from 'react-router-dom';
import api from '../../api/api';
import { IoText } from 'react-icons/io5';
import { AiFillCamera } from 'react-icons/ai';
import { ImQuotesLeft, ImHeadphones } from 'react-icons/im';
import { FaLink } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { TiVideo } from 'react-icons/ti';

import classes from './New.module.scss';
import NewText from './Text/Text';
import NewQuote from './Quote/Quote';
import NewLink from './Link/Link';
import NewChat from './Chat/Chat';
import NewPhoto from './Photo/Photo';
import NewAudio from './Audio/Audio';
import NewVideo from './Video/Video';

const New = function () {
  const history = useHistory();
  const overlayClickHandler = () => {
    history.goBack();
  };
  return (
    <div className={classes.new}>
      <Route path='/new' exact>
        <div className={classes.overlay} onClick={overlayClickHandler} />
        <div className={classes.content}>
          <Link to='/new/text'>
            <div className={classes.text}>
              <div>
                <IoText />
              </div>
              <span>Text</span>
            </div>
          </Link>
          <Link to='/new/text'>
            <div className={classes.photo}>
              <div>
                <AiFillCamera />
              </div>
              <span>Photo</span>
            </div>
          </Link>
          <Link to='/new/text'>
            <div className={classes.quote}>
              <div>
                <ImQuotesLeft />
              </div>
              <span>Quote</span>
            </div>
          </Link>
          <Link to='/new/text'>
            <div className={classes.link}>
              <div>
                <FaLink />
              </div>
              <span>Link</span>
            </div>
          </Link>
          <Link to='/new/text'>
            <div className={classes.chat}>
              <div>
                <BsFillChatDotsFill />
              </div>
              <span>Chat</span>
            </div>
          </Link>
          <Link to='/new/text'>
            <div className={classes.audio}>
              <div>
                <ImHeadphones />
              </div>
              <span>Audio</span>
            </div>
          </Link>
          <Link to='/new/text'>
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
