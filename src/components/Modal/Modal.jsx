import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, Children } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Children>{children}</Children>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
