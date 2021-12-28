import React from 'react';
import styles from './NotFound.module.scss'

const NotFound = function () {
  return( 
     <div className={styles.container}>
       <div class={styles.text}>
          <h1 class={styles.h1}>
           There's nothing here.
          </h1>
          <div class={styles.anotherText}>
             Whatever you were looking for doesn't currently exist at this address.
              Unless you were looking for this error page, in which case: Congrats! You totally found it.
          </div>
        </div>
     </div>
  
  );
};

export default NotFound;
