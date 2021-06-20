import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'contexts/UserContext';
import useUser from 'hooks/useUser';
import { StyledFav } from './style';

const Fav = ({ id }) => {
  const history = useHistory();
  const { isLogged, addFav, deleteFav, favs } = useUser();
  const { showFavs } = useContext(UserContext);

  const isFavFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return history.push('/login');
    isFavFaved ? deleteFav({ id }) : addFav({ id });
  };

  const [label, emoji] = isFavFaved ? ['Remove Fav', '✖️'] : ['Add Fav', '💙'];

  return (
    <StyledFav onClick={handleClick} isFav={isFavFaved} show={showFavs}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </StyledFav>
  );
};

export default Fav;
