import React from 'react';

import Navbar from '@components/navBar';

import {
  Container,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;