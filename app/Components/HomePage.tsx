import React from 'react';
import { Heading } from '@chakra-ui/core';
import useAppContext from '../helper/useAppContext';

const HomePage = () => {
  const { state } = useAppContext();
  console.log('state maneh ajig', state);
  return (
    <div>
      <Heading className="heading">Hello HomePage siga tunggir ayam</Heading>
    </div>
  );
};

export default HomePage;
