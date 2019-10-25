import React from 'react';
import style from './SocialMedia.module.scss';
import Instagram from '../../../assets/instagram.svg';
import Twitter from '../../../assets/twitter.svg';
import Facebook from '../../../assets/facebook.svg';
import Behance from '../../../assets/behance.svg';
import Github from '../../../assets/github.svg';

const socialmedia = props => {
  return (
    <div className={style.Social}>
      <ul>
        <li>
          <a href="#instagram">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <img src={Twitter} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#facebook">
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#behance">
            <img src={Behance} alt="Behance" />
          </a>
        </li>
        <li>
          <a href="#github">
            <img src={Github} alt="Github" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default socialmedia;
