import{S as l}from"./assets/vendor-5af972a3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(o){const r="44031619-a947df2c149ce3ba62f1c08d8",n="https://pixabay.com/api/",s=`?key=${r}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=n+s;return fetch(e).then(t=>t.json())}function u({webformatURL:o,largeImageURL:r,tags:n,likes:s,views:e,comments:t,downloads:i}){return console.log(o),console.log(r),`
      <div class="gallery">
      <a href="${o}"><img src="${o}" alt="" title=""/></a>
      <a href="${r}"><img src="${r}" alt="" title="Beautiful Image"/></a>
      <p>Likes<span>${s}</span></p>
       <p>Views<span>${e}</span></p>
        <p>Comments<span>${t}</span></p>
         <p>Downloads<span>${i}</span></p>
  </div>
    `}const c={formEl:document.querySelector(".js-form"),listEl:document.querySelector(".js-list")};new l(".js-list");c.formEl.addEventListener("submit",f);function f(o){o.preventDefault();const r=o.target,n=r.elements.query.value;n.trim()!==""&&(a(n).then(s=>p(s.hits)),r.reset())}function p(o){console.log(o);const r=o.map(u).join("");c.listEl.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
