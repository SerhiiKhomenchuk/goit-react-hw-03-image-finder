import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGalleryStyled.styled';
import { Error } from 'components/Error/Error';
import { LoadMoreButton } from 'components/Button/LoadMoreButton';

export function ImageGallery({ images, status, error, loadMore, totalImages }) {
  if (status === 'resolved' || status === 'pending')
    return (
      <>
        <ImageGalleryStyled>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                tagImage={tags}
                smallImage={webformatURL}
                largeImage={largeImageURL}
              />
            );
          })}
        </ImageGalleryStyled>
        {images.length !== totalImages && status !== 'pending' && (
          <LoadMoreButton loadMore={loadMore} status={status} />
        )}
        ;
      </>
    );
  else if (status === 'rejected') return <Error errorMessage={error} />;
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
  totalImages: PropTypes.number.isRequired,
};
