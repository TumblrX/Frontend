/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './FollowerSection.module.scss';
import useHandler from './FollowerSecionController';
import { handleBlock } from '../../BlockService/blockService';

const FollowerSection = function ({ data, index, blogId }) {
  const {
    _id, title, handle, avatar, alreadyFollow,
  } = data;
  const { handleSideClick, handleClick } = useHandler();
  return (
    <div className={styles.container}>
      <a
        href={`https://${handle}.tumblrx.com`}
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        className={styles.a}
      />
      <div className={styles.side}>
        <div className={styles.sideSide}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <object data="https://assets.tumblr.com/images/default_avatar/cone_open_128.png" width="37" height="37">
                <img
                  className={styles.img}
                  src={avatar}
                  alt="Avatar"
                  loading="eager"
                />
              </object>
            </div>
          </div>
          <div className={styles.titlesContainer}>
            <div className={styles.handle}>
              <span className={styles.handleSpan}>{handle}</span>
              {alreadyFollow && (
              <div className={styles.svgDiv}>
                <svg
                  viewBox="0 0 20 21"
                  height="12"
                  width="12"
                  className={styles.svg}
                >
                  <path d="M11.5 8.8c0-1.5-1.2-2.8-2.6-2.8-1.4 0-2.6 1.3-2.6 2.8 0 1.5 1.2 2.2 2.6 2.2 1.5 0 2.6-.7 2.6-2.2zM5 16.2v.8h7.7v-.8c0-3-1.7-4.2-3.9-4.2C6.7 12 5 13.2 5 16.2zM16 19H2V4h10V2H2C.9 2 0 2.9 0 4v14.9C0 20.1.9 21 2 21h14.2c1.1 0 1.8-.9 1.8-2.1V8h-2v11zm2-17V0h-2v2h-2v2h2v2h2V4h2V2h-2z" />
                </svg>
              </div>
              )}
            </div>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
      <div className={styles.sideSelect}>
        <div className={styles.list}>
          {!alreadyFollow && (
          <button className={styles.follow} aria-label="Follow" onClick={(event) => handleClick(event, _id)}>
            <span className={styles.followspan} tabIndex="-1">
              Follow
            </span>
          </button>
          )}
          <span className={styles.span1} onClick={handleSideClick}>
            <span className={styles.span2}>
              <button
                className={styles.button}
                aria-label="More options"
                tabIndex="0"
              >
                <span className={styles.buttonSpanC} tabIndex="-1">
                  <span className={styles.buttonSpan}>
                    <svg
                      viewBox="0 0 17.5 3.9"
                      width="14"
                      height="8"
                      className={styles.Buttonsvg}
                    >
                      <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9" />
                    </svg>
                  </span>
                </span>
              </button>
            </span>
            <div className={styles.dropDown} id="list">
              <div className={styles.dropDownContainer}>
                <div className={styles.anotherContainer}>
                  <button className={styles.block} id={`block${index}`} onClick={() => handleBlock(_id,index,blogId)}>block</button>
                  <button className={styles.close}>close</button>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>

    </div>
  );
};

export default FollowerSection;
