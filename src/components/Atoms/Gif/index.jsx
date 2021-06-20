import React from 'react';
import { Link } from 'react-router-dom';
import Fav from '../Fav';
import { GifContainer, GifTitle, GifImage } from './styles';

const Gif = ({ gifData, collage }) => {
  const { id, title, url } = gifData;
  return (
    <GifContainer collage={collage}>
      <Fav id={id} />
      <Link to={`/gif/${id}`}>
        <GifTitle>{title}</GifTitle>
        <GifImage key={id} alt={title} src={url}></GifImage>
      </Link>
    </GifContainer>
  );
};

export default React.memo(
  Gif,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);
