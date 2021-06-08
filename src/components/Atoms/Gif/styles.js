import styled from 'styled-components';

const GifContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #fafafa;
  border-radius: 6px;
`;

const GifTitle = styled.h3`
  width: 100%;
  height: 50px;
  max-width: 280px;
  font-size: 1.4rem;
  text-align: center;
`;

const GifImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-radius: 6px;
  overflow: hidden;
`;

const GifImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { GifContainer, GifTitle, GifImageWrapper, GifImage };
