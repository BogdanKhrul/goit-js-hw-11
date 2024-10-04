export function renderImages(images) {
    return images.reduce((acc, item) => {
        return (
            acc +
            `<article class="gallery-item">
                <a href="${item.largeImageURL}" class="gallery-link">
                    <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-image" />
                </a>
                <ul class="info">
                    <li class="info-item"><strong>Likes:</strong> ${item.likes}</li>
                    <li class="info-item"><strong>Views:</strong> ${item.views}</li>
                    <li class="info-item"><strong>Comments:</strong> ${item.comments}</li>
                    <li class="info-item"><strong>Downloads:</strong> ${item.downloads}</li>
                </ul>
            </article>`
        );
    }, '');
}