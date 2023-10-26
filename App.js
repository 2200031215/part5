import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <Container fluid>
     <ProductCatalog/> 
    </Container>
  );
}

export default App;
