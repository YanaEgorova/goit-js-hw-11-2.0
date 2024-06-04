import"./assets/vendor-b20c67ea.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function a(o){const r="44031619-a947df2c149ce3ba62f1c08d8",s="https://pixabay.com/api/",n=`?key=${r}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=s+n;return fetch(e).then(t=>t.json())}function l({webformatURL:o,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:i}){return`
      <div class="gallery">
      <a href="${o}"><img src="${o}" alt="" title=""/></a>
      <a href="${r}"><img src="${r}" alt="" title="Beautiful Image"/></a>
      <p>Likes<span>${n}</span></p>
       <p>Views<span>${e}</span></p>
        <p>Comments<span>${t}</span></p>
         <p>Downloads<span>${i}</span></p>
  </div>
    `}const c={formEl:document.querySelector(".js-form"),listEl:document.querySelector(".js-list")};c.formEl.addEventListener("submit",u);function u(o){o.preventDefault();const r=o.target,s=r.elements.query.value;s.trim()!==""&&(a(s).then(n=>f(n.hits)),r.reset())}function f(o){console.log(o);const r=o.map(l).join("");c.listEl.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
