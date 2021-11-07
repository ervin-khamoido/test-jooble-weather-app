import React from 'react';
import classes from './Error.module.scss';

const Error = ({error}) => <span className={classes['ErrorMessage']}>{error}</span>;

export default Error;