import React from 'react';
import { HeaderStyles, ImgLogoHeader } from './styles';
import imgLogo from '../../assets/img/1.png'
import { MainPage,} from '../MainPage';

export const Header: React.FC = () => {
  return (
    <>
      <HeaderStyles>
      <div>
          <ImgLogoHeader src={imgLogo} alt="Logo" />
        </div>
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </HeaderStyles>
      <MainPage />
    </>
  );
};
