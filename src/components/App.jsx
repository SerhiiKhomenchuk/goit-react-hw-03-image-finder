import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { getImgs } from './utilites/getImgs';
import { Loader } from './Loader/Loader';

const STATUS = {
  IDLE: 'IDLE',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchText: '',
    status: STATUS.IDLE,
    data: [],
    totalImages: 0,
    page: 1,
    error: '',
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page)
      try {
        this.setState({ status: STATUS.PENDING });
        const { totalImages, images } = await getImgs(searchText, page);

        if (totalImages === 0) {
          this.setState({
            status: STATUS.REJECTED,
            error:
              'Nothing was found for your request. Please change your request',
          });
          return;
        }

        this.setState(({ data }) => {
          return {
            data: [...data, ...images],
            totalImages,
            status: STATUS.RESOLVED,
          };
        });
      } catch (error) {
        console.log('error in APP', `${error}`);
        this.setState({ error: `${error}`, status: STATUS.REJECTED });
      }
  }

  handleSearch = nextSearchText => {
    if (nextSearchText === '') {
      this.setState({
        error: 'Please fill in the search field',
        status: STATUS.REJECTED,
      });
    } else if (this.state.searchText !== nextSearchText)
      this.setState({
        searchText: nextSearchText,
        page: 1,
        data: [],
        totalImages: 0,
      });
  };

  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { status, error, data, totalImages } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <>
          <Searchbar handleSearch={this.handleSearch} />

          <ImageGallery
            images={data}
            status={status}
            error={error}
            loadMore={() => this.onLoadMore}
            totalImages={totalImages}
          />
          {status === 'pending' && <Loader />}
        </>
      </div>
    );
  }
}

export default App;
