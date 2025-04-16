import React from 'react';
import './App.css';
import styled from 'styled-components';
import GlobalGrid from './components/GlobalGrid';
import Header from './components/header';
import Navigation from './components/navigation';
import GlobalStyle from './components/globalStyles';
import RotatingPanel from './components/rotatingPanel';
import Items from './components/items';
import Cupes from './components/cupes';
import Footer from './components/footer';

const MainPlate = styled.div`
`;

function App() {
  return (
    <MainPlate>
      <GlobalStyle />
        <Header />
        <Navigation />
        <RotatingPanel />
      <Items />
      <Cupes/>
      <Footer/>
    </MainPlate>
  );
}

export default App;
