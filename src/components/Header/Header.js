import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { QUERIES } from '../../constants';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <UnstyledButton className="menu">
          <Icon id="menu" strokeWidth={1}  />
        </UnstyledButton>
        <Side className="menuSide" />
      </MainHeader>
    </header>
  );
};



const MainHeader = styled.div`
   background: blue;
  padding: 24px 16px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  .menu {
    margin-left: auto;
  }
  gap: 48px;
  @media ${ QUERIES.tabletAndUp} {
    padding: 24px 32px;
  .menu {
    display: none;
  }
}
`;

const Side = styled.div`
 &.menuSide  {
  display: none;
  }
  @media ${ QUERIES.tabletAndUp} {
    display: initial;
     flex: 1;
    background: red;
    &.menuSide {
      display: initial;
    }
  }
 `;

const Nav = styled.nav`
  background: white;
  position: fixed;
   left: 75px;
   top: 0;
   right: 0;
   bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
   gap: 22px;
  left: 100%;
  @media ${ QUERIES.tabletAndUp} {
  position: initial;
  flex-direction: row;
  gap: 48px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;



export default Header;
