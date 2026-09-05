(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))N(y);new MutationObserver(y=>{for(const I of y)if(I.type==="childList")for(const F of I.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&N(F)}).observe(document,{childList:!0,subtree:!0});function $(y){const I={};return y.integrity&&(I.integrity=y.integrity),y.referrerPolicy&&(I.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?I.credentials="include":y.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function N(y){if(y.ep)return;y.ep=!0;const I=$(y);fetch(y.href,I)}})();document.addEventListener("DOMContentLoaded",()=>{const k=document.getElementById("siteIntroPreloader");k?(document.body.style.overflow="hidden",setTimeout(()=>{k.classList.add("fade-out"),document.body.classList.add("intro-complete"),document.body.style.overflow="",setTimeout(()=>{k.parentNode&&k.parentNode.removeChild(k)},850)},800)):document.body.classList.add("intro-complete"),window.lucide&&window.lucide.createIcons();function B(t){const e=t||window.location.hash;if(!e||e==="#")return;const s=document.querySelector(e);if(s){const i=window.innerWidth<=992?-10:0,o=s.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:Math.max(0,o),behavior:"smooth"})}}window.location.hash&&(setTimeout(()=>B(),100),window.addEventListener("load",()=>setTimeout(()=>B(),220),{once:!0})),document.body.addEventListener("click",t=>{const e=t.target.closest('a[href*="#"]');if(!e)return;const s=e.getAttribute("href");if(s)try{const i=new URL(s,window.location.origin);i.pathname===window.location.pathname&&i.hash&&document.querySelector(i.hash)&&(t.preventDefault(),history.pushState(null,"",i.hash),B(i.hash))}catch{}});const $=document.getElementById("clinicalOutcomeGraphCard");if($){new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&$.classList.add("is-drawn")})},{threshold:.2}).observe($);const e=$.querySelectorAll(".chart-tab-btn"),s=document.getElementById("graphLinePath"),i=document.getElementById("graphAreaPath");e&&s&&i&&e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(f=>f.classList.remove("active")),r.classList.add("active"),r.getAttribute("data-graph")==="recovery"?(s.setAttribute("d","M 30 160 Q 150 70, 250 80 T 470 20"),i.setAttribute("d","M 30 160 Q 150 70, 250 80 T 470 20 L 470 180 L 30 180 Z")):(s.setAttribute("d","M 30 140 Q 150 110, 250 50 T 470 30"),i.setAttribute("d","M 30 140 Q 150 110, 250 50 T 470 30 L 470 180 L 30 180 Z"))})})}const N=document.getElementById("header");let y=document.getElementById("backToTopBtn");y||(y=document.createElement("button"),y.id="backToTopBtn",y.className="back-to-top-btn",y.setAttribute("aria-label","Back to top"),y.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `,document.body.appendChild(y),y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));let I=!1;window.addEventListener("scroll",()=>{I||(window.requestAnimationFrame(()=>{const t=window.scrollY;t>20?N?.classList.add("scrolled"):N?.classList.remove("scrolled"),t>300?y?.classList.add("is-visible"):y?.classList.remove("is-visible"),document.querySelectorAll("[data-parallax], .hero-doctor-cutout, .editorial-ot-hero").forEach(s=>{const i=parseFloat(s.getAttribute("data-parallax-speed")||"-0.08"),r=t*i,o=parseFloat(s.dataset.lastParallax||"9999");Math.abs(r-o)>.5&&(s.style.transform=`translateY(${r}px)`,s.dataset.lastParallax=r)}),I=!1}),I=!0)},{passive:!0});const F=document.getElementById("mobileToggle"),te=document.getElementById("navLinks");F&&te&&F.addEventListener("click",()=>{te.classList.toggle("mobile-open")});const U=document.getElementById("toast"),se=document.getElementById("toastMessage");function D(t){U&&se&&(se.textContent=t,U.classList.add("show"),setTimeout(()=>{U.classList.remove("show")},3500))}const T=document.getElementById("viewMoreSpecialties");T&&T.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const e=document.querySelectorAll(".specialty-card.hidden-card");if(T.classList.contains("expanded")){e.forEach(o=>{o.classList.remove("show-card"),o.classList.remove("user-expanded")}),T.classList.remove("expanded");const i=T.querySelector("span");i&&(i.textContent="View More Specialties");const r=T.querySelector("[data-lucide]");r&&r.setAttribute("data-lucide","chevron-down")}else{e.forEach(o=>{o.classList.add("show-card"),o.classList.add("user-expanded")}),T.classList.add("expanded");const i=T.querySelector("span");i&&(i.textContent="Show Less Specialties");const r=T.querySelector("[data-lucide]");r&&r.setAttribute("data-lucide","chevron-up")}window.lucide&&window.lucide.createIcons()});const oe=[{id:"doc-0",name:"Dr. G. N. Sanadi",category:"ortho",categoryLabel:"Orthopaedics",specialty:"Founder & Chief Orthopaedic Surgeon",experience:"25+ Years Exp.",imgSrc:"/images/dr-sanadi-founder.webp"},{id:"doc-1",name:"Dr. Shrinivas Odugoudar",category:"neuro",categoryLabel:"Neurosurgery",specialty:"Consultant Neurosurgeon",experience:"15+ Years Exp.",imgSrc:"/images/doctor-2.webp"},{id:"doc-2",name:"Dr. Shekar Malvi",category:"ortho",categoryLabel:"Orthopaedics",specialty:"Trauma & Joint Replacement Surgeon",experience:"14+ Years Exp.",imgSrc:"/images/doctor-3.webp"},{id:"doc-3",name:"Dr. Jayant Kulkarni",category:"anaesthesia",categoryLabel:"Anaesthesiology",specialty:"Consultant Anaesthesiologist",experience:"18+ Years Exp.",imgSrc:"/images/doctor-1.webp"},{id:"doc-4",name:"Dr. Shivakumar H",category:"anaesthesia",categoryLabel:"Anaesthesiology",specialty:"Consultant Anaesthesiologist",experience:"12+ Years Exp.",imgSrc:"/images/doctor-4.webp"},{id:"doc-5",name:"Dr. Santosh Gokak",category:"ortho",categoryLabel:"Orthopaedics",specialty:"In-charge Doctor & Physician",experience:"10+ Years Exp.",imgSrc:"/images/doctor-5.webp"}],W=document.getElementById("doctorGridTrack"),_=document.getElementById("doctorSliderTrack"),re=document.getElementById("docSliderPrev"),ie=document.getElementById("docSliderNext");function le(){_&&(_.innerHTML="",oe.forEach((t,e)=>{const s=document.createElement("div");s.className="specialist-card-item",s.style.animationDelay=`${e*.1}s`;const r=t.id==="doc-0"?`<img src="${t.imgSrc}" alt="${t.name}">`:`<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;s.innerHTML=`
          <div class="specialist-image-container">
            ${r}
            <span class="specialist-dept-badge">${t.categoryLabel}</span>
          </div>
          <div class="specialist-card-body">
            <h3 class="specialist-name">${t.name}</h3>
            <p class="specialist-title">${t.specialty}</p>
            <span class="specialist-exp-badge-body">${t.experience}</span>
          </div>
        `,_.appendChild(s)})),W&&(W.innerHTML="",oe.forEach((t,e)=>{const s=document.createElement("div");s.className="specialist-flip-card",s.style.animationDelay=`${e*.1}s`;const r=t.id==="doc-0"?`<img src="${t.imgSrc}" alt="${t.name}">`:`<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;s.innerHTML=`
          <div class="specialist-flip-inner">
            <!-- FRONT FACE -->
            <div class="specialist-flip-front">
              <div class="specialist-image-container">
                ${r}
                <span class="specialist-dept-badge">${t.categoryLabel}</span>
              </div>
              <div class="specialist-card-body">
                <h3 class="specialist-name">${t.name}</h3>
                <p class="specialist-title">${t.specialty}</p>
                <div class="specialist-front-footer">
                  <span class="specialist-exp-badge-body">${t.experience}</span>
                  <span class="flip-hint-badge">
                    <span>Flip info</span>
                    <i data-lucide="rotate-cw" style="width: 12px; height: 12px;"></i>
                  </span>
                </div>
              </div>
            </div>

            <!-- BACK FACE -->
            <div class="specialist-flip-back">
              <div class="specialist-back-header">
                <span class="specialist-dept-badge-back">${t.categoryLabel}</span>
                <h4 class="specialist-back-name">${t.name}</h4>
                <p class="specialist-back-title">${t.specialty}</p>
              </div>
              <div class="specialist-back-body">
                <div class="specialist-info-row">
                  <span class="info-label"><i data-lucide="building-2" style="width: 13px; height: 13px;"></i> Department</span>
                  <span class="info-val">${t.categoryLabel}</span>
                </div>
                <div class="specialist-info-row" style="margin-top: 8px;">
                  <span class="info-label"><i data-lucide="award" style="width: 13px; height: 13px;"></i> Specialty</span>
                  <span class="info-val">${t.specialty}</span>
                </div>
                <div class="specialist-info-row" style="margin-top: 8px;">
                  <span class="info-label"><i data-lucide="clock" style="width: 13px; height: 13px;"></i> Experience</span>
                  <span class="info-val highlight-exp">${t.experience}</span>
                </div>
              </div>
            </div>
          </div>
        `,s.addEventListener("click",o=>{o.target.closest("a")||s.classList.toggle("is-flipped")}),W.appendChild(s)})),window.lucide&&window.lucide.createIcons(),_&&(_.scrollLeft=0)}function ne(){if(!_)return 340;const t=_.querySelector(".specialist-card-item");if(t){const e=t.offsetWidth,s=window.getComputedStyle(_),i=parseFloat(s.gap)||28;return e+i}return 340}re&&_&&re.addEventListener("click",()=>{_.scrollBy({left:-ne(),behavior:"smooth"})}),ie&&_&&ie.addEventListener("click",()=>{_.scrollBy({left:ne(),behavior:"smooth"})}),le(),document.querySelectorAll(".specialty-card").forEach(t=>{t.addEventListener("mousemove",e=>{const s=t.getBoundingClientRect(),i=e.clientX-s.left-s.width/2,r=e.clientY-s.top-s.height/2,o=Math.atan2(r,i);t.style.setProperty("--rotation",`${o}rad`)}),t.addEventListener("mouseleave",()=>{t.style.setProperty("--rotation","0deg")})});const Q=document.querySelector(".facilities-grid");if(Q){const t=Q.querySelectorAll(".facility-card"),e=120;document.addEventListener("pointermove",s=>{const i=Q.getBoundingClientRect(),r=s.clientX,o=s.clientY,f=r>=i.left-e&&r<=i.right+e&&o>=i.top-e&&o<=i.bottom+e;t.forEach(n=>{if(!f){n.style.setProperty("--spotlight-opacity","0");return}const d=n.getBoundingClientRect();if(r>=d.left-e&&r<=d.right+e&&o>=d.top-e&&o<=d.bottom+e){const h=r-d.left,u=o-d.top;n.style.setProperty("--mouse-x",`${h}px`),n.style.setProperty("--mouse-y",`${u}px`),n.style.setProperty("--spotlight-opacity","1")}else n.style.setProperty("--spotlight-opacity","0")})},{passive:!0})}const ae=document.getElementById("contactForm"),K=document.getElementById("formSuccessMessage");ae&&ae.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("fullName"),s=document.getElementById("phoneNum"),i=document.getElementById("emailAddr"),r=document.getElementById("preferredDate"),o=document.getElementById("specialtySelect"),f=document.getElementById("message"),n=e?.value.trim()||"",d=s?.value.trim()||"",p=i?.value.trim()||"N/A",h=r?.value||"N/A",u=o?.value||"",a=f?.value.trim()||"";if([e,s,o,f].forEach(m=>{m&&(m.style.borderColor="")}),!n){e&&(e.style.borderColor="#EF4444"),D("⚠️ Please enter your Full Name."),e?.focus();return}if(!d||d.length<7){s&&(s.style.borderColor="#EF4444"),D("⚠️ Please enter a valid Mobile Number."),s?.focus();return}if(!u){o&&(o.style.borderColor="#EF4444"),D("⚠️ Please select a Service / Specialty."),o?.focus();return}if(!a){f&&(f.style.borderColor="#EF4444"),D("⚠️ Please describe your Message / Requirements."),f?.focus();return}const l="917892869257";let c=`New Service Request

`;c+=`👤 Name: ${n}
`,c+=`📱 Phone: ${d}
`,c+=`📧 Email: ${p}
`,c+=`🛠️ Service: ${u}
`,c+=`📅 Preferred Date: ${h}

`,c+=`📝 Requirements:
${a}

`,c+="Please contact the customer regarding this request.";const g=encodeURIComponent(c),v=`https://wa.me/${l}?text=${g}`;window.open(v,"_blank"),K&&(K.style.display="block",K.innerHTML=`
          <div class="whatsapp-success-box">
            <div class="whatsapp-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1.025rem; color: #065F46; margin-bottom: 4px;">💬 WhatsApp Opened Successfully!</strong>
              <p style="margin: 0; color: #047857; font-size: 0.88rem; line-height: 1.5;">
                Thank you <strong>${n}</strong>! Your request message has been generated. Please press <strong>Send</strong> in WhatsApp to transmit your details directly to our phone number (7892869257).
              </p>
            </div>
          </div>
        `),D(`💬 WhatsApp opened for ${n}! Press Send to complete.`)}),document.querySelectorAll(".about-building-image-wrap, .about-hero-image-card").forEach(t=>{let e=40,s=42,i=42,r=0;const o=30,f=11;let n=0;t.addEventListener("pointerenter",()=>{i=240}),t.addEventListener("pointerleave",()=>{i=42});let d=null,p=!1;function h(a){n||(n=a);const l=Math.min((a-n)/1e3,.05);n=a;const c=o*(i-s)-f*r;r+=c*l,s+=r*l,e+=s*l,t.style.setProperty("--mk-beam-a",`${((e%360+360)%360).toFixed(2)}deg`),d=requestAnimationFrame(h)}new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&!p?(p=!0,n=0,d=requestAnimationFrame(h)):!l.isIntersecting&&p&&(p=!1,d&&cancelAnimationFrame(d))})},{threshold:.01}).observe(t)});const de=document.querySelectorAll(".services-section, #services, .clean-editorial-facilities-section, #facilities, .why-trust-carousel-section, .specialty-card, .clean-facility-card"),ue=new IntersectionObserver((t,e)=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("section-revealed"),s.target.classList.add("is-revealed"),s.target.querySelectorAll(".specialty-card:not(.hidden-card), .clean-facility-card").forEach((r,o)=>{setTimeout(()=>{r.classList.add("is-revealed")},o*100)}),e.unobserve(s.target))})},{threshold:.05,rootMargin:"0px 0px -20px 0px"});de.forEach(t=>ue.observe(t));const fe=document.querySelectorAll(".wf-hero-stats-banner, .wf-stats-grid, .hero-stats, .trust-strip-section, .building-highlights-grid, .executive-stats-chips, .about-hero-stats"),pe=new IntersectionObserver((t,e)=>{t.forEach(s=>{if(s.isIntersecting){const i=s.target;e.unobserve(i),i.querySelectorAll(".wf-stat-item, .wf-stat-number, .stat-value, .building-stat-chip, .trust-stat-number, .exec-stat-pill").forEach((o,f)=>{setTimeout(()=>{o.classList.add("counter-animated");const n=o.classList.contains("wf-stat-number")?o:o.querySelector(".wf-stat-number, .stat-value, strong, .trust-stat-number");n&&!n.dataset.animating&&(n.dataset.animating="true",me(n))},f*110)})}})},{threshold:.1});fe.forEach(t=>pe.observe(t));function me(t){const e=t.querySelector("span"),s=e?e.outerHTML:"",i=t.cloneNode(!0);i.querySelectorAll("span").forEach(a=>a.remove());const o=i.textContent.trim();if(t.textContent.includes("/")||e&&e.textContent.includes("/7"))return;const n=o.replace(/,/g,"").match(/\d+/);if(!n)return;const d=parseInt(n[0],10),p=d>=1e5?4200:d>=1e4?3800:d>=1e3?3400:2800,h=performance.now();function u(a){const l=a-h,c=Math.min(l/p,1),g=1-Math.pow(1-c,3),v=Math.floor(g*d);let m=v.toString();if((d>=1e5||d>=1e3)&&(m=v.toLocaleString("en-IN")),t.innerHTML=`${m}${s}`,c<1)requestAnimationFrame(u);else{let x=d.toLocaleString("en-IN");t.innerHTML=`${x}${s}`}}requestAnimationFrame(u)}const Z=document.querySelector(".trust-strip-section");if(Z){const t=Z.querySelectorAll(".reveal-item");let e=!1;new IntersectionObserver((i,r)=>{i.forEach(o=>{o.isIntersecting&&!e&&(e=!0,r.unobserve(o.target),t.forEach((f,n)=>{setTimeout(()=>{f.classList.add("trust-revealed");const d=f.querySelector(".trust-stat-number");d&&he(d)},n*100)}))})},{threshold:.15}).observe(Z)}function he(t){const e=parseInt(t.getAttribute("data-target"),10),s=1200,i=performance.now();function r(o){const f=o-i,n=Math.min(f/s,1),d=1-Math.pow(1-n,3),p=Math.floor(d*e);e>=1e3?t.innerText=p.toLocaleString("en-IN"):t.innerText=p,n<1?requestAnimationFrame(r):e>=1e3?t.innerText=e.toLocaleString("en-IN"):t.innerText=e}requestAnimationFrame(r)}const J=document.querySelector(".trust-bento-grid");if(J){const t=J.querySelectorAll(".trust-bento-card");let e=!1;new IntersectionObserver((i,r)=>{i.forEach(o=>{o.isIntersecting&&!e&&(e=!0,r.unobserve(o.target),t.forEach((f,n)=>{setTimeout(()=>{f.classList.add("bento-visible")},n*100)}))})},{threshold:.1}).observe(J)}const Y=document.getElementById("trustCarouselViewport"),ce=document.getElementById("trustCarouselContainer"),G=document.getElementById("trustCarouselPrev"),j=document.getElementById("trustCarouselNext"),ee=document.getElementById("trustCarouselDots");if(Y&&ce){let n=function(){const m=t[0].offsetWidth,C=m*(1+20/m);if(t.forEach((b,L)=>{let S=L-s;S>e/2&&(S-=e),S<-e/2&&(S+=e);const A=Math.abs(S),M=Math.pow(A,o),P=Math.min(i*M,82)*Math.sign(S),w=A>2?.2:r;b.style.transform=`translateX(calc(-50% + ${S*C}px)) translateZ(${-w*m*M}px) rotateY(${-P}deg)`;const E=Math.min(1,Math.max(0,e/2-A)),q=A>2?.5:f,z=Math.pow(1-q*A,2);b.style.opacity=String(Math.max(0,z*E)),b.style.zIndex=String(200-Math.round(A*50)),b.classList.remove("active","prev","next","far-prev","far-next"),A===0?b.classList.add("active"):A===1?b.classList.add(S>0?"next":"prev"):A===2&&b.classList.add(S>0?"far-next":"far-prev")}),ee){ee.innerHTML="";for(let b=0;b<e;b++){const L=document.createElement("button");L.className="trust-carousel-dot"+(b===s?" active":""),L.setAttribute("aria-label",`Go to slide ${b+1}`),L.addEventListener("click",()=>d(b)),ee.appendChild(L)}}},d=function(m){s=m,n()},p=function(){s=(s+1)%e,n()},h=function(){s=(s-1+e)%e,n()},l=function(){u&&clearInterval(u),u=setInterval(()=>{a||p()},5e3)},c=function(){a=!0},g=function(){a=!1};var _e=n,Ce=d,qe=p,Te=h,Me=l,Pe=c,Be=g;const t=ce.querySelectorAll(".trust-carousel-slide"),e=t.length;let s=0;const i=44,r=.6,o=.56,f=.1;let u=null,a=!1;Y.addEventListener("mouseenter",c),Y.addEventListener("mouseleave",g),Y.addEventListener("focusin",c),Y.addEventListener("focusout",g),G&&(G.addEventListener("click",()=>{h()}),G.addEventListener("focusin",c),G.addEventListener("focusout",g)),j&&(j.addEventListener("click",()=>{p()}),j.addEventListener("focusin",c),j.addEventListener("focusout",g)),n(),l();let v=null;window.addEventListener("resize",()=>{clearTimeout(v),v=setTimeout(()=>n(),200)})}const V=document.querySelector(".vision-mission-container");if(V){const t=V.querySelector(".vision-content"),e=V.querySelectorAll(".mission-item");let s=!1;new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&!s&&(s=!0,t&&t.classList.add("visible"),e.forEach((f,n)=>{setTimeout(()=>{f.classList.add("item-visible")},n*80)}))})},{threshold:.15}).observe(V)}const X=document.querySelector(".executive-profile-card.spotlight-card"),R=document.querySelector(".executive-portrait-col.tilt-3d-card"),ge=document.querySelectorAll(".spotlight-subcard");X&&X.addEventListener("pointermove",t=>{const e=X.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top;X.style.setProperty("--mouse-x",`${s}px`),X.style.setProperty("--mouse-y",`${i}px`),ge.forEach(r=>{const o=r.getBoundingClientRect(),f=t.clientX-o.left,n=t.clientY-o.top;r.style.setProperty("--sub-x",`${f}px`),r.style.setProperty("--sub-y",`${n}px`)})}),R&&(R.addEventListener("pointermove",t=>{const e=R.getBoundingClientRect(),s=t.clientX-e.left-e.width/2,r=-(t.clientY-e.top-e.height/2)/e.height*10,o=s/e.width*10;R.style.transform=`perspective(800px) rotateX(${r.toFixed(2)}deg) rotateY(${o.toFixed(2)}deg) scale(1.02)`}),R.addEventListener("pointerleave",()=>{R.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"}));const H=document.querySelector(".about-hero-showcase.hero-spotlight-card"),O=document.querySelector(".about-building-image-wrap.tilt-building-card");H&&H.addEventListener("pointermove",t=>{const e=H.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top;H.style.setProperty("--hero-x",`${s}px`),H.style.setProperty("--hero-y",`${i}px`)}),O&&(O.addEventListener("pointermove",t=>{const e=O.getBoundingClientRect(),s=t.clientX-e.left-e.width/2,r=-(t.clientY-e.top-e.height/2)/e.height*8,o=s/e.width*8;O.style.transform=`perspective(800px) rotateX(${r.toFixed(2)}deg) rotateY(${o.toFixed(2)}deg) scale(1.02)`}),O.addEventListener("pointerleave",()=>{O.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"}));function ve(){const t=document.querySelector(".specialty-editorial-page");if(!t)return;const e=t.querySelector(".editorial-hero-image-wrap");e&&(e.style.transform="none");const s=t.querySelectorAll(".editorial-intro-section, .editorial-problems-section, .editorial-treatments-section, .editorial-journey-section, .editorial-specialist-section, .editorial-facilities-section, .editorial-recovery-section, .editorial-final-cta, .editorial-related-nav"),i=new IntersectionObserver((u,a)=>{u.forEach(l=>{l.isIntersecting&&(l.target.classList.add("is-revealed"),a.unobserve(l.target))})},{threshold:.1});s.forEach(u=>{u.classList.add("specialty-scroll-reveal"),i.observe(u)}),[{container:".treatment-blocks-stack",items:".treatment-block-row"},{container:".journey-timeline-grid",items:".journey-step-item"},{container:".patient-problem-list",items:".patient-problem-item"},{container:".editorial-facilities-grid",items:".facility-editorial-card"}].forEach(u=>{t.querySelectorAll(u.container).forEach(l=>{const c=l.querySelectorAll(u.items);c.forEach(v=>v.classList.add("stagger-item")),new IntersectionObserver((v,m)=>{v.forEach(x=>{x.isIntersecting&&(c.forEach((C,b)=>{setTimeout(()=>{C.classList.add("is-revealed")},b*90)}),m.unobserve(x.target))})},{threshold:.08}).observe(l)})});const o=t.querySelector(".editorial-journey-section"),f=t.querySelector(".journey-timeline-grid"),n=t.querySelectorAll(".journey-step-item");if(o&&f&&n.length>0){let a=function(){const l=o.getBoundingClientRect(),c=window.innerHeight,g=c*.8,v=l.height+c*.4,m=g-l.top;let x=Math.max(0,Math.min(1,m/v));f.style.setProperty("--journey-line-progress",x.toFixed(3))};var h=a;let u=!1;window.addEventListener("scroll",()=>{u||(window.requestAnimationFrame(()=>{a(),u=!1}),u=!0)},{passive:!0}),a()}t.querySelectorAll(".specialist-pill-badge, .specialist-qual-item span, .treatment-num-pill, .stat-value, .stat-number").forEach(u=>{const a=u.innerText.trim(),l=a.match(/([\d,]+)(\+?.*)$/);if(l&&!u.dataset.statAnimated){const c=l[1].replace(/,/g,""),g=parseInt(c,10);if(!isNaN(g)&&g>0){const v=l[2]||"",m=a.indexOf(l[1]),x=m>0?a.substring(0,m):"";new IntersectionObserver((b,L)=>{b.forEach(S=>{if(S.isIntersecting){let w=function(E){const q=E-P,z=Math.min(q/M,1),Le=1-Math.pow(1-z,3),Se=Math.floor(Le*g);u.innerText=x+Se.toLocaleString("en-IN")+v,z<1?requestAnimationFrame(w):u.innerText=x+g.toLocaleString("en-IN")+v};var A=w;u.dataset.statAnimated="true";const M=1200,P=performance.now();requestAnimationFrame(w),L.unobserve(S.target)}})},{threshold:.15}).observe(u)}}});const p=t.querySelector(".editorial-related-nav .related-nav-links");if(p){let u=!1,a,l;p.addEventListener("mousedown",c=>{u=!0,a=c.pageX-p.offsetLeft,l=p.scrollLeft}),p.addEventListener("mouseleave",()=>{u=!1}),p.addEventListener("mouseup",()=>{u=!1}),p.addEventListener("mousemove",c=>{if(!u)return;c.preventDefault();const v=(c.pageX-p.offsetLeft-a)*2;p.scrollLeft=l-v})}}ve();function ye(){if(!document.querySelector(".facilities-editorial-main, .facilities-sections-stack"))return;const e=document.querySelectorAll(".specialty-scroll-reveal, .fac-chapter-section, .fac-editorial-hero, .fac-environment-section, .fac-precision-details-section, .fac-difference-section, .fac-atmospheric-ending"),s=new IntersectionObserver((n,d)=>{n.forEach(p=>{p.isIntersecting&&(p.target.classList.add("is-revealed"),d.unobserve(p.target))})},{threshold:.05});e.forEach(n=>{n.classList.add("specialty-scroll-reveal"),s.observe(n)});const i=document.querySelectorAll(".fac-spec-item, .fac-precision-item, .fac-editorial-spec-block, .fac-diagnostic-detail-item, .fac-recovery-feature, .fac-difference-row"),r=new IntersectionObserver((n,d)=>{n.forEach(p=>{p.isIntersecting&&(p.target.classList.add("is-revealed"),d.unobserve(p.target))})},{threshold:.08});i.forEach((n,d)=>{n.classList.add("stagger-item"),n.style.transitionDelay=`${d%4*80}ms`,r.observe(n)});const o=document.querySelectorAll(".fac-editorial-nav-link"),f=document.querySelectorAll("#surgical-care, #critical-care, #inpatient-care, #diagnostics, #recovery");if(o.length>0&&f.length>0){let n=!1;window.addEventListener("scroll",()=>{n||(window.requestAnimationFrame(()=>{let d="";const p=window.scrollY+250;f.forEach(h=>{p>=h.offsetTop&&(d=h.getAttribute("id"))}),d&&o.forEach(h=>{h.getAttribute("href")===`#${d}`?h.classList.add("active"):h.classList.remove("active")}),n=!1}),n=!0)},{passive:!0})}}ye();function be(){const t=document.querySelector(".editorial-about-page");if(!t)return;const e=t.querySelector(".about-hero-editorial");e&&e.classList.add("is-revealed");const s=t.querySelectorAll(".about-reveal-section, .about-hero-editorial, .aceternity-timeline-section, .doctors-section, .about-principles-editorial, .about-location-editorial"),i=new IntersectionObserver((a,l)=>{a.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-revealed"),l.unobserve(c.target))})},{threshold:.05});s.forEach(a=>{a.classList.add("about-reveal-section"),i.observe(a)}),[{container:".about-hero-editorial-centered",items:".about-eyebrow-wrapper, .about-hero-editorial-title, .about-hero-story-block, .hero-highlight-pill, .about-hero-actions"},{container:".aceternity-timeline-container",items:".timeline-entry"},{container:".doctors-flip-grid",items:".specialist-flip-card"},{container:".location-info-stack",items:".location-info-group"},{container:".location-destination-layout",items:".location-editorial-col, .location-map-stage, .location-actions-row"}].forEach(a=>{t.querySelectorAll(a.container).forEach(c=>{const g=c.querySelectorAll(a.items);g.forEach(m=>m.classList.add("about-stagger-item")),new IntersectionObserver((m,x)=>{m.forEach(C=>{C.isIntersecting&&(g.forEach((b,L)=>{setTimeout(()=>{b.classList.add("is-revealed")},L*80)}),x.unobserve(C.target))})},{threshold:.08}).observe(c)})});const o=t.querySelector(".aceternity-timeline-section")||t.querySelector("#about-timeline"),f=t.querySelector("#timelineBeamFill")||t.querySelector("#timeline-beam-fill");if(o&&f){const a=()=>{const l=o.getBoundingClientRect(),c=window.innerHeight,g=l.height,v=c-l.top-120;if(l.top<c&&l.bottom>0){let m=v/g*100;m=Math.min(Math.max(m,0),100),f.style.height=`${m}%`}};window.addEventListener("scroll",a,{passive:!0}),a()}const n=t.querySelectorAll(".timeline-entry");if(n.length){const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&c.target.classList.add("is-active")})},{threshold:.3});n.forEach(l=>a.observe(l))}const d=t.querySelector(".decades-stats-row");if(d){const a=d.querySelectorAll("[data-count-target]");new IntersectionObserver((c,g)=>{c.forEach(v=>{v.isIntersecting&&(a.forEach(m=>{const x=parseInt(m.getAttribute("data-count-target"),10),C=m.getAttribute("data-count-suffix")||"",b=m.getAttribute("data-count-format")==="comma",L=1200,S=performance.now();function A(M){const P=M-S,w=Math.min(P/L,1),E=1-Math.pow(1-w,3),q=Math.floor(E*x);m.textContent=(b?q.toLocaleString("en-IN"):q)+C,w<1&&requestAnimationFrame(A)}requestAnimationFrame(A)}),g.unobserve(v.target))})},{threshold:.2}).observe(d)}t.querySelectorAll(".about-building-frame, .founder-portrait-stage, .beginning-visual-block, .location-map-stage").forEach(a=>{a.addEventListener("pointermove",l=>{const c=a.getBoundingClientRect(),g=l.clientX-c.left-c.width/2,m=-(l.clientY-c.top-c.height/2)/c.height*4,x=g/c.width*4;a.style.transform=`perspective(900px) rotateX(${m.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg) scale(1.015)`}),a.addEventListener("pointerleave",()=>{a.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"})});const h=t.querySelectorAll(".principles-orbital-item"),u=t.querySelector(".principles-orbit-rotator");h.length&&u&&h.forEach(a=>{a.addEventListener("mouseenter",()=>{u.classList.add("is-paused")}),a.addEventListener("mouseleave",()=>{u.classList.remove("is-paused")})})}be();function we(){const t=document.getElementById("heroShaderCanvas");if(!t)return;const e=t.getContext("webgl",{antialias:!1});if(!e)return;const s=`attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }`,i=`#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    uniform vec3 u_colors[8];
    uniform vec4 u_scene;
    uniform vec4 u_shape;
    uniform vec4 u_surface;
    uniform vec4 u_finish;
    uniform vec4 u_transform;
    uniform vec4 u_space;
    uniform vec4 u_cursor;

    #define u_resolution u_scene.xy
    #define u_time u_scene.z
    #define u_colorCount u_scene.w
    #define u_scale u_shape.x
    #define u_intensity u_shape.y
    #define u_warp u_shape.w
    #define u_detail u_surface.x
    #define u_contrast u_surface.y
    #define u_brightness u_surface.z
    #define u_saturation u_surface.w
    #define u_hue u_finish.x
    #define u_vignette u_finish.y
    #define u_blur u_finish.z
    #define u_grain u_finish.w
    #define u_seed u_transform.x
    #define u_rotate u_transform.y
    #define u_drift u_transform.z
    #define u_oklab u_transform.w
    #define u_offset u_space.xy
    #define u_mouse u_space.zw
    #define u_cursorPresence u_cursor.x
    #define u_cursorEffect u_cursor.y
    #define u_cursorStrength u_cursor.z
    #define u_cursorRadius u_cursor.w

    float hash21(vec2 p) {
      p = fract(p * vec2(234.34, 435.345));
      p += dot(p, p + 34.23);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
        mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
        u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = p * 2.03 + vec2(17.0, 9.2);
        a *= 0.5;
      }
      return v;
    }

    vec3 palette(float x) {
      float n = max(u_colorCount - 1.0, 1.0);
      float f = clamp(x, 0.0, 1.0) * n;
      vec3 col = u_colors[0];
      for (int i = 0; i < 7; i++) {
        if (float(i) < n)
          col = mix(col, u_colors[i + 1], smoothstep(0.0, 1.0, clamp(f - float(i), 0.0, 1.0)));
      }
      return col;
    }

    vec3 shade(vec2 uv, vec2 p, float t) {
      vec2 q = p * 1.6;
      float amp = 0.25 + u_intensity * 0.85;
      for (float i = 1.0; i < 5.0; i += 1.0) {
        q.x += amp / i * cos(i * 2.4 * q.y + t * 0.8 + u_seed);
        q.y += amp / i * cos(i * 1.7 * q.x + t * 0.6);
      }
      return palette(0.5 + 0.5 * sin(q.x + q.y));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      
      if (u_cursorPresence > 0.001) {
        vec2 cursor = (0.5 * u_mouse * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        vec2 cursorDelta = p - cursor;
        float cursorDistance = length(cursorDelta);
        vec2 cursorDirection = cursorDelta / max(cursorDistance, 0.0001);
        float cursorMask = u_cursorPresence * (1.0 - smoothstep(0.0, u_cursorRadius, cursorDistance));
        p -= cursorDirection * cursorMask * u_cursorStrength * 0.24;
      }

      p *= u_scale;
      p += u_offset;
      if (u_drift > 0.0001)
        p += u_drift * vec2(sin(u_time * 0.31), cos(u_time * 0.23));

      vec3 col = shade(uv, p, u_time);
      if (abs(u_contrast - 1.0) > 0.0001) col = (col - 0.5) * u_contrast + 0.5;
      
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,r=(w,E)=>{const q=e.createShader(w);return e.shaderSource(q,E),e.compileShader(q),q},o=e.createProgram(),f=r(e.VERTEX_SHADER,s),n=r(e.FRAGMENT_SHADER,i);e.attachShader(o,f),e.attachShader(o,n),e.linkProgram(o),e.useProgram(o);const d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const p=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const h={colors:e.getUniformLocation(o,"u_colors"),scene:e.getUniformLocation(o,"u_scene"),shape:e.getUniformLocation(o,"u_shape"),surface:e.getUniformLocation(o,"u_surface"),finish:e.getUniformLocation(o,"u_finish"),transform:e.getUniformLocation(o,"u_transform"),space:e.getUniformLocation(o,"u_space"),cursor:e.getUniformLocation(o,"u_cursor")},u=[.145098,.388235,.921569,.023529,.713725,.831372,.117647,.25098,.686275,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1];e.uniform3fv(h.colors,new Float32Array(u)),e.uniform4f(h.shape,1.5,.55,.5,0),e.uniform4f(h.surface,2.4,1.005,.5,.85),e.uniform4f(h.finish,0,.4,.04,0),e.uniform4f(h.transform,1,0,.4,0);let a=0,l=0,c=0,g=0,v=0,m=0;window.addEventListener("pointermove",w=>{const E=t.getBoundingClientRect();w.clientX>=E.left&&w.clientX<=E.right&&w.clientY>=E.top&&w.clientY<=E.bottom?(c=(w.clientX-E.left)/E.width*2-1,g=-((w.clientY-E.top)/E.height*2-1),m=1):m=0},{passive:!0});const x=()=>{const w=t.parentElement?t.parentElement.getBoundingClientRect():t.getBoundingClientRect(),E=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.round(w.width*E)),t.height=Math.max(1,Math.round(w.height*E)),e.viewport(0,0,t.width,t.height)};window.addEventListener("resize",x),x();const C=performance.now();let b=null,L=!1;function S(w){a+=(c-a)*.1,l+=(g-l)*.1,v+=(m-v)*.1,e.uniform4f(h.scene,t.width,t.height,(w-C)/1e3*.176,4),e.uniform4f(h.space,0,0,a,l),e.uniform4f(h.cursor,v,1,1,.8),e.drawArrays(e.TRIANGLES,0,3),b=requestAnimationFrame(S)}function A(){L||(L=!0,b=requestAnimationFrame(S))}function M(){L&&(L=!1,b&&cancelAnimationFrame(b))}const P=new IntersectionObserver(w=>{w.forEach(E=>{E.isIntersecting?A():M()})},{threshold:.01});P.observe(t),document.addEventListener("visibilitychange",()=>{document.hidden?M():P&&A()}),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&A()}we();function Ee(){[".section-header-center",".fac-webflow-header",".fac-webflow-card",".specialty-card",".facility-card",".stat-card-item",".building-stat-chip",".testimonial-card-item",".about-chapter-card",".fac-spec-card",".specialist-card-item",".doctor-card",".fac-editorial-hero"].forEach(r=>{document.querySelectorAll(r).forEach(o=>{!o.classList.contains("reveal-on-scroll")&&!o.classList.contains("reveal-fade-left")&&!o.classList.contains("reveal-fade-right")&&!o.classList.contains("reveal-scale")&&o.classList.add("reveal-on-scroll")})});const e={root:null,rootMargin:"50px 0px -20px 0px",threshold:.05},s=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},e);document.querySelectorAll(".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale").forEach(r=>{r.getBoundingClientRect().top<window.innerHeight+100&&r.classList.add("is-visible"),s.observe(r)})}function xe(){const t=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&i.target.querySelectorAll(".stat-bar-fill").forEach(o=>{const f=o.getAttribute("data-width")||"100%";o.style.width=f})})},{threshold:.2}),e=document.querySelector(".creative-facilities-left");e&&t.observe(e)}Ee(),xe()});
