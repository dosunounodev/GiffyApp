import React from 'react';
import Gif from 'components/Atoms/Gif';
import { List } from './styles';
import Title from 'components/Atoms/Title';

const ListOfGifs = ({ gifs, minheight, collage, singleList, loadingMore }) => {
  return (
    <>
      <List minheight={minheight} collage={collage} singleList={singleList}>
        {gifs.map((singleGif) => (
          <Gif key={singleGif.id} gifData={singleGif} collage={collage} />
        ))}
      </List>
      {loadingMore && (
        <>
          <br />
          <Title>Loading...</Title>
        </>
      )}
    </>
  );
};

export default ListOfGifs;
