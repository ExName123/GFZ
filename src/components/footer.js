import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../images/logo.svg';

const FooterContainer = styled.footer`
  background-color: #CD8D6D;
  height: 225px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 25px 100px;
  color: white;
  font-family: 'Open Sans', sans-serif;
`;

const LinkItem = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  align-self: center;
  text-decoration: none;
  align-self: center;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoBlock = styled.div`
margin-top: 20px;
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 18px;
  }
`;
const CenterLink = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  text-align: center;
  align-self: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
 gap: 20px;
display: flex;
flex-direction: row;
  color: white;
  justify-self: center;
  align-self: center;

  svg {
    font-size: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <LinkItem href="#" style={{ gridColumn: '1 / span 1' }}>Newest</LinkItem>
            <LinkItem href="#" style={{ gridColumn: '2 / span 1' }}>Careers</LinkItem>
            <LinkItem href="#" style={{ gridColumn: '3 / span 1' }}>Blogs</LinkItem>
            <LogoBlock>
                <img style={{ width: '100px', height: '100px' }} src={logo} alt="Logo" />
                <span>KitStuffU</span>
            </LogoBlock>
            <CenterLink href="#" style={{ gridColumn: '6 / span 1' }}>Home</CenterLink>
            <CenterLink href="#" style={{ gridColumn: '7 / span 1' }}>Product</CenterLink>
            <CenterLink href="#" style={{ gridColumn: '8 / span 1' }}>Combo</CenterLink>
            <CenterLink href="#" style={{ gridColumn: '9 / span 1' }}>Blog</CenterLink>
            <CenterLink href="#" style={{ gridColumn: '10 / span 1' }}>About Us</CenterLink>

            <Icon style={{ gridColumn: '12 / span 1' }}>
                <FaTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
            </Icon>
        </FooterContainer>
    );
};

export default Footer;
