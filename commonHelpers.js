import"./assets/vendor-b20c67ea.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function i(n){const r="44031619-a947df2c149ce3ba62f1c08d8",o="https://pixabay.com/api/",s=`?key=${r}&q=${n}`,e=o+s;return fetch(e).then(t=>t.json())}const u={formEl:document.querySelector(".js-form"),listEl:document.querySelector(".js-list")};u.formEl.addEventListener("submit",l);function l(n){n.preventDefault();const r=n.target,o=r.elements.query.value;o.trim()!==""&&(i(o).then(s=>console.log(s)),r.reset())}
//# sourceMappingURL=commonHelpers.js.map
