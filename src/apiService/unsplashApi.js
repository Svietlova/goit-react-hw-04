import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] =
  'Client-ID pbQLiQVoL5jAD-v_D3P3YaJz37JmMX-3vCy4-oDz2q4';

axios.defaults.params = { per_page: 15 };

export default async function fetchPhotos(
  query,
  page,
  orientation,
  color,
  content_filter,
  order_by
) {
  const options = {
    query,
    page,
    content_filter,
    order_by,
  };

  if (orientation) {
    options['orientation'] = orientation;
  }

  if (color) {
    options['color'] = color;
  }

  const response = await axios.get('/search/photos', {
    params: options,
  });
  return response.data;
}