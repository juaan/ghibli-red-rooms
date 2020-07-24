import React, { FunctionComponent } from 'react';
import { Stack, Spinner } from '@chakra-ui/core';
import { FilmType } from '../Store';
import FilmItem from './FilmItem';

interface FilmItemListProps {
  films: FilmType[];
  loading: boolean;
}

const FilmItemList: FunctionComponent<FilmItemListProps> = (
  props: FilmItemListProps,
) => {
  const { films, loading } = props;
  return (
    <Stack spacing={16}>
      {films.map((film, i) => (
        <FilmItem key={i} film={film} idx={i} />
      ))}
      {loading && (
        <div className="spinner-showing">
          <Spinner color="red.500" />
        </div>
      )}
    </Stack>
  );
};

export default FilmItemList;
