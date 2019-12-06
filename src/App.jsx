import React from 'react';
import Container from "react-bootstrap/Container";
import NavBar from './components/Navbar';
import HeroView from './views/HeroView';

function App() {
  return (
    <Container fluid className="m-0 p-0">
      <NavBar />  
      <HeroView id="#"/>
    </Container>
  );
}

export default App;