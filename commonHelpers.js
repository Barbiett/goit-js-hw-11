import{i as l,S as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function u(e){const r="43058085-482a34128d0dce777e17b7853",t=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(t).then(s=>s.json())}function m(e){return`<li class="gallery-item">
	<a class="gallery-link" href="${e.largeImageURL}">
		<img
            src="${e.webformatURL}"
            alt="${e.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${e.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${e.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${e.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${e.downloads}</li>
     </ul>
	</a>
</li>`}function g(e){if(e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}const r=e.map(m).join("");return new c(".gallery a",{captionsData:"alt",captionDelay:250}),r}const p=document.getElementById("search-form"),d=document.getElementById("search-input"),f=document.querySelector(".gallery"),i=document.querySelector(".loader");p.addEventListener("submit",h);function h(e){e.preventDefault();const r=d.value.trim();if(r==="")return l.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});i.classList.remove("is-hidden"),u(r).then(n=>{y(n.hits)}).catch(n=>{console.error("Error fetching data:",n)}).finally(()=>{i.classList.add("is-hidden")})}function y(e){f.innerHTML=g(e)}
//# sourceMappingURL=commonHelpers.js.map
