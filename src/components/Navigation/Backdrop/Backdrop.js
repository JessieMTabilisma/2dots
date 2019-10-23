import React from 'react';
import style from './Backdrop.module.scss';
import NavItems from '../../UI/NavItems/NavItems';


const backdrop = props => (
  <div className={style.Backdrop}>
    <NavItems className={style.NavItems} />
  </div>
);

export default backdrop;
