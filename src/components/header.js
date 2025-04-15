import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../images/logo.svg';

const HeaderWrapper = styled.div`
 margin-left: 100px;
 margin-right: 100px;
  grid-column: span 12;
  background: #CD8D6D;
  height: 45px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

const Icon = styled.div`
margin-left: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  align-self:center;
  grid-column: 1 / span 2;
`;

const StyledText = styled.h3`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 3px;
  margin-right: 5px;
`;

const HeaderButton = styled.p`
  color: #FDFDFD; 
  cursor: pointer;
  text-align: center;
  grid-column: ${({ column }) => column};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;  
  height: 100%;  

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transition: background-color 0.3s ease;
  }
`;

const menuItems = [
    { name: 'Contacts', column: 8 },
    { name: 'About us', column: 9 },
    { name: 'Sign in', column: 11 },
    { name: 'Sign up', column: 12 },
];

function Header() {
    return (
        <HeaderWrapper>
            <a href="#" style={{ textDecoration: 'none' }}>
                <Icon>
                    <StyledText>KitStuffU</StyledText>
                    <LogoSVG />
                </Icon>
            </a>

            {menuItems.map((item) => (
                <HeaderButton key={item.name} column={item.column}>
                    {item.name}
                </HeaderButton>
            ))}
        </HeaderWrapper>
    );
}

export default Header;
