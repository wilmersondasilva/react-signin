import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = () => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Mine</h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
        </Container>
      </Jumbotron>
  );
};

export default Home;