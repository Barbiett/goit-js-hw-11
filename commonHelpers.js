import{S as u,i}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function g(n){const r="43058085-482a34128d0dce777e17b7853",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!1})}`;return fetch(e).then(t=>t.json())}const m=document.querySelector(".gallery");function d(n){const r=n.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");m.insertAdjacentHTML("beforeend",r),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const p=document.getElementById("search-form"),l=document.getElementById("search-input"),f=document.querySelector(".gallery"),c=document.querySelector(".loader");p.addEventListener("submit",h);function h(n){n.preventDefault();const r=l.value.trim();if(r==="")return i.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});c.classList.remove("is-hidden"),g(r).then(a=>{if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}f.innerHTML="",d(a.hits)}).catch(a=>{console.error("Error fetching data:",a)}).finally(()=>{c.classList.add("is-hidden")}),l.value=""}
//# sourceMappingURL=commonHelpers.js.map