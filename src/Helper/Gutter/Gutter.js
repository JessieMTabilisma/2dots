import React from 'react';
import style from './Gutter.module.scss';

const gutter = props => <div className={style.Gutter}>{props.children}</div>;

export default gutter;
