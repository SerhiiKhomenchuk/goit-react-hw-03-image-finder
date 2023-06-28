import PropTypes from 'prop-types';

export const Error = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger text-center mx-3" role="alert">
      {errorMessage}
    </div>
  );
};

Error.propTypes = { errorMessage: PropTypes.string.isRequired };
