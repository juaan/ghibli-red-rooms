import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  Spinner,
  useToast,
  Text,
  Heading,
  Image,
  Box,
  Flex,
} from '@chakra-ui/core';
import { ActionTypes, PeopleType } from '../Store';
import useAppContext from '../helper/useAppContext';

const PeopleSection: FunctionComponent<{}> = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { state, dispatch } = useAppContext();
  const peoplesData = state?.peoples || [];
  const fetchDataPeoples = useCallback(async () => {
    setLoading(true);
    try {
      const peoplesResponse = await fetch(
        `https://ghibliapi.herokuapp.com/people?limit=${12}`,
      );
      const data = await peoplesResponse.json();
      dispatch({
        type: ActionTypes.GET_PEOPLES,
        payload: {
          peoples: data,
        },
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast({
        title: 'Failed to load films',
        description: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [peoplesData]);

  useEffect(() => {
    fetchDataPeoples();
  }, [peoplesData.length]);

  return (
    <>
      <Heading
        as="h2"
        size="md"
        letterSpacing={'-.1rem'}
        margin="0"
        paddingTop="8px"
      >
        Peoples in The Movie
      </Heading>
      {(peoplesData || []).map((people: PeopleType, i: number) => (
        <Flex w="100%" key={i} h="35px" paddingTop="16px">
          <Box
            size="sm"
            w="30px"
            bg="white"
            h="30px"
            borderRadius="50%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            overflow="hidden"
            marginRight="8px"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png"
              alt="Segun Adebayo"
              w="30px"
              height="30px"
            />
          </Box>
          <Text margin="0">
            {people.name} ({people.age}
            {0 / Number(people.age) === 0 ? ' y.o' : ''})
          </Text>
        </Flex>
      ))}
      {loading && (
        <div className="spinner-showing">
          <Spinner color="red.500" />
        </div>
      )}
    </>
  );
};

export default PeopleSection;
