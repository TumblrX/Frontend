import React from 'react';
import { IconContext } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';
import classes from './Notes.module.scss';
const Notes = () => {
  const overlayClickHandler = () =>{

  }
  return (
    <div className={classes.notes}>
      <header className={classes.header}>
        <IconContext.Provider value={{ size: '1.3rem' }}>
          <div>
            <FaArrowLeft/>
          </div>
        </IconContext.Provider>
      </header>
      <div className={classes.content}>
        Content
      </div>
      <footer className={classes.footer}>
        Footer
      </footer>
    </div>
  );
};

export default Notes;