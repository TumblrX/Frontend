import React, { Fragment } from 'react';
import classes from './Explore.module.scss';

const Explore = function (props) {
  return <main className={classes.main}>{props.children}</main>;
};

export default Explore;
