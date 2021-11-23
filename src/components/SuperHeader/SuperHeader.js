import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { QUERIES} from '../../constants';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 4px;
  @media ${ QUERIES.tabletAndUp} {
    height: initial;
    font-size: 0.875rem;
    display: flex;
    padding: 8px 32px;
    gap: 24px;
  }
`;

const MarketingMessage = styled.span`
  display: none;
  @media ${ QUERIES.tabletAndUp} {
    display: inline;
   color: ${COLORS.white};
   margin-right: auto;
  }
`;

const HelpLink = styled.a`
  display: none;
  @media ${ QUERIES.tabletAndUp} {
    display: block;
    color: inherit;
    text-decoration: none;
    outline-offset: 2px;

    &:not(:focus-visible) {
      outline: none;
    }
}
`;

export default SuperHeader;
