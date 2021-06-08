import React from 'react';
import { Link } from 'react-router-dom';
import { GifContainer, GifTitle, GifImageWrapper, GifImage } from './styles';

const Gif = ({ gifData }) => {
  const { id, title, url } = gifData;
  return (
    <Link to={`/gif/${id}`}>
      <GifContainer>
        <GifTitle>{title}</GifTitle>
        <GifImageWrapper>
          <GifImage key={id} alt={title} src={url}></GifImage>
        </GifImageWrapper>
      </GifContainer>
    </Link>
  );
};

export default Gif;
