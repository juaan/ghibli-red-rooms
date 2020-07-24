import React, { FunctionComponent, useCallback } from 'react';
import { Heading, Flex, IconButton } from '@chakra-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header: FunctionComponent<{}> = ({}) => {
  const { pathname } = useLocation();
  const { goBack } = useHistory();

  const isHome = pathname === '/';
  const handleBack = useCallback(() => goBack && goBack(), []);
  return (
    <Flex
      as="nav"
      justify="flex-start"
      padding="8px"
      bg="gray.800"
      align="center"
    >
      {!isHome && (
        <IconButton
          variant="outline"
          variantColor="orange"
          className="back-button"
          aria-label="back"
          icon="arrow-back"
          w="30px"
          onClick={handleBack}
        />
      )}

      <Flex wrap="wrap" w="100%" padding="8px" justifyContent="center">
        <Link to="/" className="header-link">
          <Heading
            as="h3"
            size="md"
            letterSpacing={'-.1rem'}
            color="red.400"
            margin="0"
          >
            Ghibli Red Rooms
          </Heading>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
