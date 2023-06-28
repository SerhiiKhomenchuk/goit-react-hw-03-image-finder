import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalStyled } from './ModalStyled.styled';
import { Overlay } from './Overlay.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = e => {
    if (e.target.name === e.currentTarget.name) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImage, imageDescription } = this.props;
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalStyled>
          <img src={largeImage} alt={imageDescription} />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
