import React from 'react';
import Gif from 'components/Atoms/Gif';
import { List } from './styles';

const ListOfGifs = ({ gifs, minheight, collage }) => {
  return (
    <List minheight={minheight}>
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} gifData={singleGif} collage={collage} />
      ))}
    </List>
  );
};

export default ListOfGifs;
