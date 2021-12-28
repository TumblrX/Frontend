import React from 'react'
import styles from './NotFound.module.scss'

const mystyle = {
    backgroundImage: `url(https://64.media.tumblr.com/5865a129ed7251379b9eefdaed2fbe86/tumblr_miidckSoFJ1rt0g8wo1_500.gif)`
};
const ServerError = () => {
    return (
    <div className={styles.container} style={mystyle} >
       <div class={styles.text}>
          <h1 class={styles.h1}>
          Oops Server Error
          </h1>
          <div class={styles.anotherText} >
            Please try again later
          </div>
        </div>
     </div>
    )
}

export default ServerError

