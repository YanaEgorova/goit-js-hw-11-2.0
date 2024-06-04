export default function getImages(searchString) {
  const API_KEY = '44031619-a947df2c149ce3ba62f1c08d8';
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = `?key=${API_KEY}&q=${searchString}`;

  const url = BASE_URL + PARAMS;

  return fetch(url).then(res => res.json());
}
