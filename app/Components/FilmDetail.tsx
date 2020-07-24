import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';

import { useParams } from 'react-router-dom';
import { useToast, Text, Heading, Image, Box, Flex } from '@chakra-ui/core';
import { ActionTypes, FilmType } from '../Store';
import useAppContext from '../helper/useAppContext';

interface FilmDetailProps {
  film?: FilmType;
}

const FilmDetail: FunctionComponent<FilmDetailProps> = (
  props: FilmDetailProps,
) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { state, dispatch } = useAppContext();
  const filmsState = state?.films;
  let filmData: FilmType;

  if (filmsState.length > 0) {
    const filteredFilmData = filmsState.filter((film) => film.id === id);

    if (filteredFilmData.length > 0) {
      filmData = filteredFilmData[0];
    } else {
      filmData = state?.film;
    }
  } else {
    filmData = state?.film;
  }

  const fetchDataFilm = useCallback(async () => {
    setLoading(true);
    try {
      const filmResponse = await fetch(
        `https://ghibliapi.herokuapp.com/films/${id}`,
      );
      const data = await filmResponse.json();
      dispatch({
        type: ActionTypes.GET_FILM,
        payload: {
          film: data,
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
  }, [filmData, id]);

  useEffect(() => {
    fetchDataFilm();
  }, [id]);

  return (
    <>
      <Flex w="100%" margin="16px" justify="space-between" wrap="wrap">
        <Box display={{ sm: 'block', md: 'flex' }}>
          <Heading color="white" margin="0" width="100%">
            {filmData?.title}
          </Heading>
        </Box>
        <Box display={{ sm: 'block', md: 'flex' }}>
          <Heading as="h4" margin="0" color="#F5DEB3" w="100%">
            Rate: {filmData?.rt_score}/100
          </Heading>
        </Box>
      </Flex>

      <Flex w="100%" padding="16px">
        <Text as="cite" fontSize="xl" color="white">
          {filmData?.description}
        </Text>
      </Flex>
      <Flex w="100%" padding="16px" justify="space-evenly" wrap="wrap">
        <Box
          display="block"
          backgroundColor="white"
          padding="16px"
          borderRadius="5px"
        >
          <Box display="flex" backgroundColor="white" justifyContent="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png"
              alt="Segun Adebayo"
              w="150px"
              height="150px"
            />
          </Box>
          <Text as="em" color="#1a202c" margin="0">
            Director: {filmData?.director}
          </Text>
        </Box>
        <Box
          display="block"
          backgroundColor="white"
          padding="16px"
          borderRadius="5px"
          marginTop="8px"
        >
          <Box display="flex" backgroundColor="white" justifyContent="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png"
              alt="Segun Adebayo"
              w="150px"
              height="150px"
            />
          </Box>
          <Text as="em" color="#1a202c" margin="0">
            Producer: {filmData?.producer}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default FilmDetail;
