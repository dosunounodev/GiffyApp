import React from 'react';
import { Link } from 'react-router-dom';
import { GifContainer, GifTitle, GifImage } from './styles';

const Gif = ({ gifData }) => {
  const { id, title, url } = gifData;
  return (
    <Link to={`/gif/${id}`}>
      <GifContainer>
        <GifTitle>{title}</GifTitle>
        <GifImage key={id} alt={title} src={url}></GifImage>
      </GifContainer>
    </Link>
  );
};

export default React.memo(
  Gif,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);
