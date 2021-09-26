import React from 'react';
import { StyledWrapper, StyledHeader, StyledSwitch } from './HeaderElements';
import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg';

const Header = ({ toggleTheme, themeTitle }) => {
  return (
    <StyledWrapper>
      <StyledHeader>TODO</StyledHeader>
      <StyledSwitch
        onClick={toggleTheme}
        src={themeTitle === 'light' ? moon : sun}
      />
    </StyledWrapper>
  );
};

export default Header;
