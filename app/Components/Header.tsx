import React from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';

const Header = () => {
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    bg="gray.600"
  >
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
        Chakra UI
      </Heading>
    </Flex>
  </Flex>;
};
