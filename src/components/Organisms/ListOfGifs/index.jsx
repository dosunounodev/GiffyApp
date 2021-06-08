import React from 'react';
import Gif from 'components/Atoms/Gif';
import { List } from './styles';

const ListOfGifs = ({ gifs }) => {
  return (
    <List>
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} gifData={singleGif} />
      ))}
    </List>
  );
};

export default ListOfGifs;
