import React from 'react';
import style from './Navbar.module.scss';
import Logo from '../../../assets/2Dots.svg';
import CustomButton from '../../UI/Button/Button';

const navbar = props => {
  return (
    <div className={style.Nav}>
      <img src={Logo} alt="2 dots digital agency" />
      <div className={style.subNav}>
        <CustomButton secondary className={style.CustomButton}>
          Contact Us
        </CustomButton>
        <button className={style.hamMenu} onClick={props.handledMenu}>
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </button>
      </div>
    </div>
  );
};

export default navbar;
