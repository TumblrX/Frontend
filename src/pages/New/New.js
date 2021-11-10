import React, { Fragment } from 'react';
import classes from './New.module.scss';
const New = () => {
  return (
    <Fragment>
      <div className={classes.overlay}></div>
      <div className={classes.content}>Content</div>
    </Fragment>
  );
};

export default New;
