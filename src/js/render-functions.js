export default function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
      <div class="gallery">
      <a href="${webformatURL}"><img src="${webformatURL}" alt="" title=""/></a>
      <a href="${largeImageURL}"><img src="${largeImageURL}" alt="" title="Beautiful Image"/></a>
      <p>Likes<span>${likes}</span></p>
       <p>Views<span>${views}</span></p>
        <p>Comments<span>${comments}</span></p>
         <p>Downloads<span>${downloads}</span></p>
  </div>
    `;
}
