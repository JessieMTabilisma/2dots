import React from 'react';
import style from './Newsletter.module.scss';
import CustomButton from '../UI/Button/Button';

const newsletter = props => (
  <div className={style.Newsletter}>
    <div className={style.Headings}>
      <h3>Recieve our newsletter ?</h3>
      <p>News, updates, Promo and Services.</p>
    </div>
    <input type="text" placeholder="Your Email Address" />
    <CustomButton className={style.regButton}>Register</CustomButton>
  </div>
);

export default newsletter;
