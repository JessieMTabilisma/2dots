import React from 'react';
import style from './Footer.module.scss';
import Gutter from '../../Helper/Gutter/Gutter';
import SocialMedia from '../UI/SocialMedia/SocialMedia';

import Newsletter from '../Newsletter/Newsletter';
const footer = props => {
  return (
    <div className={style.footer}>
      <Gutter>
        <Newsletter />
        <hr />
        <div className={style.subfooter}>
          <SocialMedia />
          <div>
            <span>The Dots Digital © 2019. All rights reserved</span>
          </div>
        </div>
      </Gutter>
    </div>
  );
};
export default footer;
