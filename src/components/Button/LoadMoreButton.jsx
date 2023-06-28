import PropTypes from 'prop-types';

export const LoadMoreButton = ({ loadMore, status }) => {
  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={loadMore()}
        disabled={status === 'pending'}
      >
        LoadMore...
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  status: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
