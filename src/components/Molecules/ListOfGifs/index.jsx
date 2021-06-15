import React from 'react';
import Gif from 'components/Atoms/Gif';
import { List } from './styles';

const ListOfGifs = ({ gifs, minheight, collage, singleList }) => {
  return (
    <List minheight={minheight} collage={collage} singleList={singleList}>
      {gifs.map((singleGif) => (
        <Gif key={singleGif.id} gifData={singleGif} collage={collage} />
      ))}
    </List>
  );
};

export default ListOfGifs;
