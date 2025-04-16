import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalGrid from './GlobalGrid'; 

const NavigationWrapper = styled.div`
 margin-left: 100px;
 margin-right: 100px;
  grid-column: span 12;
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
`;

const MenuItem = styled.h3`
  position: relative;
  color: ${({ active }) => (active ? 'rgba(79, 72, 72, 0.7)' : 'rgba(79, 72, 72, 0.5)')}; 
  font-family: 'Open Sans', sans-serif;
  font-weight: 510; 
  font-size: 17px;
  cursor: pointer;
  text-align: center;
  grid-column: ${({ column }) => column};

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background: ${({ active }) => (active ? '#C3612F' : 'transparent')}; 
    transition: width 0.3s ease-in-out, background 0.3s ease-in-out;
  }

  &:hover {
    color: rgba(79, 72, 72, 0.8);
  }

  &:hover:after {
    width: 100%;
    background: #C3612F;
  }
`;

const CustomHR = styled.hr`
  margin-bottom: 50px;
    grid-column: span 12;
    height: 3px;
    border: none; 
    background-color: rgba(243, 216, 199, 1);
`
function Navigation() {
  const [activeTab, setActiveTab] = useState('Main');

  const menuItems = [
    { name: 'Main', column: '3' },
    { name: 'Sale', column: '4' },
    { name: 'New', column: '5' },
    { name: 'Cupes', column: '6' },
  ];

  return (
    <NavigationWrapper>
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          column={item.column}
          active={activeTab === item.name}
          onClick={() => setActiveTab(item.name)}
        >
          {item.name}
        </MenuItem>
      ))}
      <CustomHR></CustomHR>
    </NavigationWrapper>
  );
}

export default Navigation;
