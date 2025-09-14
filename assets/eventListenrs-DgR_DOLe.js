(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const y=document.querySelector(".menu-icon"),m=document.querySelector(".sidebar"),h=document.querySelector(".close-sidebar"),L=document.querySelector(".search-icon"),x=document.querySelector(".search-bar"),M=document.querySelector(".title-input"),N=document.querySelector(".author-input"),T=document.querySelector(".note-input"),w=document.querySelector(".add-note"),A=document.querySelector(".add-p-note"),a=document.querySelector(".pinned-note-ul"),d=document.querySelector(".notes-ul"),l=document.querySelector(".note-details"),H=document.querySelector(".title-error-message"),O=document.querySelector(".author-error-message"),P=document.querySelector(".note-error-message"),f=document.querySelectorAll(".search-input"),S=document.querySelector(".arrow-btn"),i=document.querySelector(".arrow-open-btn"),g=document.querySelector(".notes-section"),p=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},v=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},q=e=>{if(!confirm("Are you sure you want to delete this note?"))return;const s=p("notes")||[];s.splice(e,1),v("notes",s),u(s)},b=e=>{const t=p("notes")||[],s=e.toLowerCase().trim();if(s===""){u(t);return}const r=t.filter(n=>n.title.toLowerCase().includes(s)||n.content.toLowerCase().includes(s));r.length===0?(d.innerHTML=`
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
        `,a.innerHTML=`
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
    `):u(r)},u=e=>{if(e===null){a.innerHTML=`
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
    `;return}let t="",s="";e.forEach(r=>{const n=e.findIndex(c=>c.id===r.id),o=`
        <li class="note-li cursor-pointer rounded-lg hover:bg-gray-hover transition-all p-2.5" data-index="${n}">
            <h2 class="text-black text-[16px] leading-7 ">${r.title}</h2>
            <p class="text-gray-500 text-[13px] leading-5 mt-1 mb-4 overflow-hidden text-ellipsis">
            ${r.content}
            </p>
            <div class="flex justify-between items-center text-[13px]">
              <p class="text-gray-500">${r.date}</p>
              <button
                class="delete-btn mr-8 cursor-pointer text-orange-300 hover:text-orange-500 active:text-orange-500 transition-all p-1" data-index="${n}">Delete</button>
            </div>
          </li>
        `;r.isPinned?t+=o:s+=o}),a.innerHTML=t,d.innerHTML=s,I()},E=e=>{l.classList.contains("left-full")&&l.classList.remove("left-full"),l.classList.add("left-0");const t=p("notes")||[];l.innerHTML=`
    <h1 class="text-[26px] leading-8">${t[e].title}</h1>
    <div class="text-gray-500 text-sm mt-3.5 mb-9">
        <span>${t[e].date}</span>
        /
        <span>By ${t[e].author}</span>
    </div>
    <p class="leading-7">
        ${t[e].content}
    </p>
  `},$=()=>{const e=p("notes")||[];u(e)},I=()=>{document.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const s=parseInt(t.currentTarget.dataset.index);q(s)})}),document.querySelectorAll(".note-li").forEach(e=>{e.addEventListener("click",t=>{const s=parseInt(t.currentTarget.dataset.index);E(s),document.querySelectorAll(".note-li").forEach(r=>{r.classList.remove("lg:bg-gray-hover")}),e.classList.add("lg:bg-gray-hover")})})},B=()=>{y.addEventListener("click",()=>{m.classList.remove("hidden")}),h.addEventListener("click",()=>{m.classList.add("hidden")}),L.addEventListener("click",()=>{x.classList.toggle("top-0"),f.focus()}),f.forEach(e=>{e.addEventListener("input",t=>{b(t.target.value)})}),S.addEventListener("click",()=>{g.classList.add("hidden"),i.classList.contains("lg:hidden")&&i.classList.remove("lg:hidden"),i.classList.add("lg:flex")}),i.addEventListener("click",()=>{g.classList.remove("hidden"),i.classList.add("lg:hidden")})};export{B as a,L as b,h as c,w as d,A as e,N as f,H as g,O as h,$ as i,P as j,p as k,v as l,y as m,T as n,m as s,M as t};
