(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const g=document.querySelector(".menu-icon"),m=document.querySelector(".sidebar"),h=document.querySelector(".close-sidebar"),L=document.querySelector(".search-icon"),x=document.querySelector(".search-bar");document.querySelector(".title-input");document.querySelector(".author-input");document.querySelector(".note-input");document.querySelector(".add-note");document.querySelector(".add-p-note");const a=document.querySelector(".pinned-note-ul"),d=document.querySelector(".notes-ul"),l=document.querySelector(".note-details");document.querySelector(".title-error-message");document.querySelector(".author-error-message");document.querySelector(".note-error-message");const f=document.querySelectorAll(".search-input"),S=document.querySelector(".arrow-btn"),i=document.querySelector(".arrow-open-btn"),y=document.querySelector(".notes-section"),p=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},v=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},q=e=>{if(!confirm("Are you sure you want to delete this note?"))return;const r=p("notes")||[];r.splice(e,1),v("notes",r),u(r)},b=e=>{const t=p("notes")||[],r=e.toLowerCase().trim();if(r===""){u(t);return}const s=t.filter(n=>n.title.toLowerCase().includes(r)||n.content.toLowerCase().includes(r));s.length===0?(d.innerHTML=`
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
        `,a.innerHTML=`
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
    `):u(s)},u=e=>{if(e===null){a.innerHTML=`
        <li class="text-center text-gray-500">
            <p>Pinned your important notes</p>
        </li>
        `,d.innerHTML=`
        <li class="text-center text-gray-500">
            <p>Add your first note</p>
        </li>
    `;return}else if(e.length===0){a.innerHTML=`
        <li class="text-center text-gray-500">
            <p>Pinned your important notes</p>
        </li>
        `,d.innerHTML=`
        <li class="text-center text-gray-500">
            <p>Add your first note</p>
        </li>
    `;return}let t="",r="";e.forEach(s=>{const n=e.findIndex(c=>c.id===s.id),o=`
        <li class="note-li cursor-pointer rounded-lg hover:bg-gray-hover transition-all p-2.5" data-index="${n}">
            <h2 class="text-black text-[16px] leading-7 ">${s.title}</h2>
            <p class="text-gray-500 text-[13px] leading-5 mt-1 mb-4 overflow-hidden text-ellipsis">
            ${s.content}
            </p>
            <div class="flex justify-between items-center text-[13px]">
              <p class="text-gray-500">${s.date}</p>
              <button
                class="delete-btn mr-8 cursor-pointer text-orange-300 hover:text-orange-500 active:text-orange-500 transition-all p-1" data-index="${n}">Delete</button>
            </div>
          </li>
        `;s.isPinned?t+=o:r+=o}),a.innerHTML=t,d.innerHTML=r,N()},E=e=>{l.classList.contains("left-full")&&l.classList.remove("left-full"),l.classList.add("left-0");const t=p("notes")||[];l.innerHTML=`
    <h1 class="text-[26px] leading-8">${t[e].title}</h1>
    <div class="text-gray-500 text-sm mt-3.5 mb-9">
        <span>${t[e].date}</span>
        /
        <span>By ${t[e].author}</span>
    </div>
    <p class="leading-7">
        ${t[e].content}
    </p>
  `},I=()=>{const e=p("notes")||[];u(e)},N=()=>{document.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const r=parseInt(t.currentTarget.dataset.index);q(r)})}),document.querySelectorAll(".note-li").forEach(e=>{e.addEventListener("click",t=>{const r=parseInt(t.currentTarget.dataset.index);E(r),document.querySelectorAll(".note-li").forEach(s=>{s.classList.remove("lg:bg-gray-hover")}),e.classList.add("lg:bg-gray-hover")})})},T=()=>{g.addEventListener("click",()=>{m.classList.remove("hidden")}),h.addEventListener("click",()=>{m.classList.add("hidden")}),L.addEventListener("click",()=>{x.classList.toggle("top-0"),f.focus()}),f.forEach(e=>{e.addEventListener("input",t=>{b(t.target.value)})}),S.addEventListener("click",()=>{y.classList.add("hidden"),i.classList.contains("lg:hidden")&&i.classList.remove("lg:hidden"),i.classList.add("lg:flex")}),i.addEventListener("click",()=>{y.classList.remove("hidden"),i.classList.add("lg:hidden")})};I();T();
