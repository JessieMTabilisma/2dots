import React from 'react';
import styled from 'styled-components';
import CustomButton from '../Button/Button';

const Item = styled.div`
  height: 70%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  ul {
    padding: 0;
    margin: 0;
    position: relative;
    top: 80px;
    li {
      list-style-type: none;
      margin: 20px;
      font-weight: 600;
      a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 20px;
        color: #333333;
        font-family: 'Segoe UI', 'Helvetica Neue', sansserif;
      }
    }
  }
`;
const navitems = props => {
  return (
    <Item>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Services</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#ourstory">Our Story</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </Item>
  );
};

export default navitems;
