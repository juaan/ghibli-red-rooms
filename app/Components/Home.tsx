import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { Box, useToast } from '@chakra-ui/core';
import debounce from 'lodash.debounce';

import FilmItemList from './FilmItemList';
import useAppContext from '../helper/useAppContext';
import { ActionTypes } from '../Store';
import PeopleSection from './PeopleSection';

const Home: FunctionComponent<{}> = ({}) => {
  const { state, dispatch } = useAppContext();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const filmdata = state?.films || [];
  const fetchDataFilm = useCallback(async () => {
    setLoading(true);
    try {
      const filmResponse = await fetch(
        `https://ghibliapi.herokuapp.com/films?limit=${limit}`,
      );
      const data = await filmResponse.json();
      dispatch({
        type: ActionTypes.GET_FILMS,
        payload: {
          films: data,
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
  }, [filmdata, limit]);

  useEffect(() => {
    fetchDataFilm();
  }, [state.films.length, limit]);

  //infinite scroll handling
  window.onscroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      if (filmdata.length < limit) {
        return;
      }
      setLimit(limit + 10);
    }
  }, 100);

  return (
    <div className="home-content">
      <Box
        display={{ sm: 'block', md: 'flex' }}
        width={{ sm: 'auto', md: '30%' }}
        flexGrow={1}
        className="right-bar"
        marginBottom="16px"
      >
        <div>
          <PeopleSection />
        </div>
      </Box>
      <Box
        display={{ sm: 'block', md: 'flex' }}
        width={{ sm: 'auto', md: '65%' }}
        alignItems="center"
        flexGrow={1}
        paddingLeft={{ sm: '0', md: '8px' }}
      >
        <FilmItemList films={filmdata} loading={loading} />
      </Box>
    </div>
  );
};

export default Home;
