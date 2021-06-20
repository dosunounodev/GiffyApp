import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from 'contexts/UserContext';
import Modal from 'components/Organisms/Modal';
import useUser from 'hooks/useUser';
import { StyledFav } from './style';
import Login from 'components/Organisms/Login';
import { LoginModalContext } from 'contexts/LoginModalContext';

const Fav = ({ id }) => {
  // const history = useHistory();
  const { isLogged, addFav, deleteFav, favs } = useUser();
  const { showFavs } = useContext(UserContext);
  const { showLoginModal, setShowLoginModal } = useContext(LoginModalContext);
  const isFavFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    // if (!isLogged) return history.push('/login');
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
          <Login />
        </Modal>
      )}
    </>
  );
};

export default Fav;
