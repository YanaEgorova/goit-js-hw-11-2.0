export default function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  console.log(webformatURL);
  console.log(largeImageURL);
  return `
      <div class="image-block">
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="" title=""/>
        <p>Likes<span>${likes}</span></p>
       <p>Views<span>${views}</span></p>
        <p>Comments<span>${comments}</span></p>
         <p>Downloads<span>${downloads}</span></p>
      </a>
  </div>
    `;
}
