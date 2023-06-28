import axios from 'axios';

export const getImgs = async (searchText, page) => {
  const per_page = 12;
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: '36056334-58c346fb23a68bf9b46b38280',
    q: `${searchText}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: `${page}`,
    per_page: `${per_page}`,
  });

  const URL = `${BASE_URL}?${searchParams}`;

  try {
    const response = await axios.get(URL);

    const { data } = response;

    const { totalHits, hits } = data;
    const images = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
      id,
      tags,
      webformatURL,
      largeImageURL,
    }));

    return { totalImages: totalHits, images };
  } catch (error) {
    throw new Error(error.message);
  }
};
