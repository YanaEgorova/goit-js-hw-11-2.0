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
  console.log(tags);

  return `
      <div class="gallery">
      <a href="${webformatURL}"><img src="${webformatURL}" alt="" title=""/></a>
      <a href="${largeImageURL}"><img src="${largeImageURL}" alt="" title="Beautiful Image"/></a>
  </div>
    `;
}
