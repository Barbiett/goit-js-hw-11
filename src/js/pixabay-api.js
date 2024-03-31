export function getPhoto(value) {
    const KEY = "43058085-482a34128d0dce777e17b7853";
    const params = new URLSearchParams({
        key: KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
    });
    const bazeUrl = 'https://pixabay.com/api/';
    const url = `${bazeUrl}?${params}`;
   
    return fetch(url).then(res => res.json());
}

