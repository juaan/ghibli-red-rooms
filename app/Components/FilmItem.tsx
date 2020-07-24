import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';
import { FilmType, IndexColors } from '../Store';
import { Link } from 'react-router-dom';

interface FilmItemProps {
  film: FilmType;
  idx: number;
}

const FilmItem: FunctionComponent<FilmItemProps> = (props: FilmItemProps) => {
  const { film, idx } = props;
  return (
    <Link to={`/film/${film.id}`} className="link-item">
      <Box
        className="film-item"
        p={4}
        shadow="md"
        borderWidth="1px"
        bg={IndexColors[idx % 7]}
        marginBottom="8px"
        borderRadius="10px"
      >
        <Heading margin="0" fontSize="lg">
          {film.title}
        </Heading>
        <Text margin="0" fontSize="xs" as="cite">
          {film.director} - {film.release_date}
        </Text>
        <Text margin="0" fontSize="xs">
          {film.description}
        </Text>
      </Box>
    </Link>
  );
};

export default FilmItem;
