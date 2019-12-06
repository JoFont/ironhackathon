import React from 'react';
import Container from "react-bootstrap/Container";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HeroView from './views/HeroView';
import ProblemView from './views/ProblemView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import PurchaseView from './views/PurchaseView';
import "holderjs";

function App() {
  return (
    <Container fluid className="m-0 p-0">
      <NavBar />
      <HeroView/>
      <ProblemView/>
      <AboutView/>
      <PurchaseView />
      <ContactView/>
      <Footer />  
    </Container>
  );
}

export default App;