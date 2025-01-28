export const fetchPhotos = query => {
  // console.log(query);

  const urlParams = new URLSearchParams({
    key: '48435380-ac618ab0bf8356a94370146f1',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    // console.log(response);
    // console.log(response.json());

    return response.json();
  });
};
