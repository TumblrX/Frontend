import React from 'react';
import classes from './Explore.module.scss';

const Explore = function ({ children }) {
  return <main className={classes.main}>{children}</main>;
};

export default Explore;
