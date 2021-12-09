/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable block-spacing */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styles from './Chat.module.scss';


const Inbox = function () {
  return (
    <div className={styles.Chat}>
      <div className={`${styles.Chat_header} ${styles.row}`}>
        <div className={styles.title}>
          <a> username1 </a>
          <a> + username2</a>
        </div>
        <div className={styles.icons}>
          <button>
            Button
            <i style={{ fontSize: '24px' }}> &#xf142; </i>
          </button>
        </div>
      </div>
      <div className={styles.Chat_content}>
        content  
      </div>
      <div className={styles.Chat_footer}>
        <textarea className={styles.text}
          placeholder="Your message here"
          rows="1" 
          maxLength="4096"
        />
        <div className={styles.send}>

        </div>
      </div>
    </div>
  );
};

export default Inbox;
