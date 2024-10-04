export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46110623-cffeede45492ee1adb33fe3c4';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(
        'An error occurred while fetching images. Please try again later.'
      );
    });
}
