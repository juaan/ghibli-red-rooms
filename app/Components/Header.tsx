import React, { FunctionComponent } from 'react';
import { Box, Heading, Flex, Input } from '@chakra-ui/core';

const Header: FunctionComponent<{}> = ({}) => {
  return (
    <Flex
      as="nav"
      justify="space-around"
      padding="8px"
      bg="gray.800"
      align="center"
    >
      <Flex wrap="wrap" w="100px" padding="8px">
        <Heading
          as="h3"
          size="md"
          letterSpacing={'-.1rem'}
          color="red.400"
          margin="0"
        >
          Ghibli Red Rooms
        </Heading>
      </Flex>

      <Box
        display={{ sm: 'block', md: 'flex' }}
        width={{ sm: 'auto', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        paddingRight="8px"
      >
        <Input
          placeholder="Find Gibhli Movie"
          isFullWidth
          size="sm"
          focusBorderColor="orange.200"
        />
      </Box>
    </Flex>
  );
};

export default Header;
