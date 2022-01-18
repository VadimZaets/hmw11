const URL = 'https://pixabay.com/api/';
const KEY = '23318810-108b3ea994e39ab45f238c241';
const PER_PAGE = 40;

const axios = require('axios').default;

const fetchImagesNew = async (request, page = 1) => {
  const params = {
    key: KEY,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(URL, { params });
  return response.data;
};

export { fetchImagesNew, PER_PAGE };
