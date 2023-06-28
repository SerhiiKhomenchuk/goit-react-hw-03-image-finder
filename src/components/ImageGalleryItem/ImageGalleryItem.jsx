import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItemImage } from './ImageGalleryItemImage.styled';
import { ImageGalleryItemStyled } from './ImageGalleryItemStyled.styled';
import { Modal } from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { tagImage, smallImage, largeImage } = this.props;

    return (
      <>
        <ImageGalleryItemStyled>
          <ImageGalleryItemImage
            src={smallImage}
            alt={tagImage}
            onClick={this.openModal}
          />
          {this.state.isModalOpen && (
            <Modal
              closeModal={this.closeModal}
              largeImage={largeImage}
              imageDescription={tagImage}
            />
          )}
        </ImageGalleryItemStyled>
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tagImage: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
