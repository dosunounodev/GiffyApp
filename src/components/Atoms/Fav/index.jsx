import React, { useContext, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import Modal from 'components/Organisms/Modal';
import useUser from 'hooks/useUser';
import Login from 'components/Organisms/Login';
import { StyledFav } from './style';

const Fav = ({ id }) => {
  const { isLogged, addFav, deleteFav, favs } = useUser();
  const { showFavs } = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isFavFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return setShowLoginModal(true);
    isFavFaved ? deleteFav({ id }) : addFav({ id });
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const [label, emoji] = isFavFaved ? ['Remove Fav', '✖️'] : ['Add Fav', '💙'];

  return (
    <>
      <StyledFav onClick={handleClick} isFav={isFavFaved} show={showFavs}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </StyledFav>
      {showLoginModal && (
        <Modal onClose={handleCloseModal}>
          <Login showModalToggle={setShowLoginModal} />
        </Modal>
      )}
    </>
  );
};

export default Fav;
