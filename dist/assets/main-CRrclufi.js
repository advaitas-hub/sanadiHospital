(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))_(E);new MutationObserver(E=>{for(const I of E)if(I.type==="childList")for(const F of I.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&_(F)}).observe(document,{childList:!0,subtree:!0});function H(E){const I={};return E.integrity&&(I.integrity=E.integrity),E.referrerPolicy&&(I.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?I.credentials="include":E.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function _(E){if(E.ep)return;E.ep=!0;const I=H(E);fetch(E.href,I)}})();document.addEventListener("DOMContentLoaded",()=>{const $=document.getElementById("siteIntroPreloader");$?(document.body.style.overflow="hidden",setTimeout(()=>{$.classList.add("fade-out"),document.body.classList.add("intro-complete"),document.body.style.overflow="",setTimeout(()=>{$.parentNode&&$.parentNode.removeChild($)},850)},800)):document.body.classList.add("intro-complete"),window.lucide&&window.lucide.createIcons();const B=document.getElementById("clinicalOutcomeGraphCard");if(B){new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&B.classList.add("is-drawn")})},{threshold:.2}).observe(B);const e=B.querySelectorAll(".chart-tab-btn"),o=document.getElementById("graphLinePath"),n=document.getElementById("graphAreaPath");e&&o&&n&&e.forEach(i=>{i.addEventListener("click",()=>{e.forEach(f=>f.classList.remove("active")),i.classList.add("active"),i.getAttribute("data-graph")==="recovery"?(o.setAttribute("d","M 30 160 Q 150 70, 250 80 T 470 20"),n.setAttribute("d","M 30 160 Q 150 70, 250 80 T 470 20 L 470 180 L 30 180 Z")):(o.setAttribute("d","M 30 140 Q 150 110, 250 50 T 470 30"),n.setAttribute("d","M 30 140 Q 150 110, 250 50 T 470 30 L 470 180 L 30 180 Z"))})})}const H=document.getElementById("header");let _=document.getElementById("backToTopBtn");_||(_=document.createElement("button"),_.id="backToTopBtn",_.className="back-to-top-btn",_.setAttribute("aria-label","Back to top"),_.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `,document.body.appendChild(_),_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));let E=!1;window.addEventListener("scroll",()=>{E||(window.requestAnimationFrame(()=>{const t=window.scrollY;t>20?H?.classList.add("scrolled"):H?.classList.remove("scrolled"),t>300?_?.classList.add("is-visible"):_?.classList.remove("is-visible"),document.querySelectorAll("[data-parallax], .hero-doctor-cutout, .editorial-ot-hero").forEach(o=>{const n=parseFloat(o.getAttribute("data-parallax-speed")||"-0.08"),i=t*n,s=parseFloat(o.dataset.lastParallax||"9999");Math.abs(i-s)>.5&&(o.style.transform=`translateY(${i}px)`,o.dataset.lastParallax=i)}),E=!1}),E=!0)},{passive:!0});const I=document.getElementById("mobileToggle"),F=document.getElementById("navLinks");I&&F&&I.addEventListener("click",()=>{F.classList.toggle("mobile-open")});const U=document.getElementById("toast"),te=document.getElementById("toastMessage");function R(t){U&&te&&(te.textContent=t,U.classList.add("show"),setTimeout(()=>{U.classList.remove("show")},3500))}const T=document.getElementById("viewMoreSpecialties");T&&T.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();const e=document.querySelectorAll(".specialty-card.hidden-card");if(T.classList.contains("expanded")){e.forEach(s=>{s.classList.remove("show-card"),s.classList.remove("user-expanded")}),T.classList.remove("expanded");const n=T.querySelector("span");n&&(n.textContent="View More Specialties");const i=T.querySelector("[data-lucide]");i&&i.setAttribute("data-lucide","chevron-down")}else{e.forEach(s=>{s.classList.add("show-card"),s.classList.add("user-expanded")}),T.classList.add("expanded");const n=T.querySelector("span");n&&(n.textContent="Show Less Specialties");const i=T.querySelector("[data-lucide]");i&&i.setAttribute("data-lucide","chevron-up")}window.lucide&&window.lucide.createIcons()});const se=[{id:"doc-0",name:"Dr. G. N. Sanadi",category:"ortho",categoryLabel:"Orthopaedics",specialty:"Founder & Chief Orthopaedic Surgeon",experience:"25+ Years Exp.",imgSrc:"/images/dr-sanadi-founder.webp"},{id:"doc-1",name:"Dr. Shrinivas Odugoudar",category:"neuro",categoryLabel:"Neurosurgery",specialty:"Consultant Neurosurgeon",experience:"15+ Years Exp.",imgSrc:"/images/doctor-2.webp"},{id:"doc-2",name:"Dr. Shekar Malvi",category:"ortho",categoryLabel:"Orthopaedics",specialty:"Trauma & Joint Replacement Surgeon",experience:"14+ Years Exp.",imgSrc:"/images/doctor-3.webp"},{id:"doc-3",name:"Dr. Jayant Kulkarni",category:"anaesthesia",categoryLabel:"Anaesthesiology",specialty:"Consultant Anaesthesiologist",experience:"18+ Years Exp.",imgSrc:"/images/doctor-1.webp"},{id:"doc-4",name:"Dr. Shivakumar H",category:"anaesthesia",categoryLabel:"Anaesthesiology",specialty:"Consultant Anaesthesiologist",experience:"12+ Years Exp.",imgSrc:"/images/doctor-4.webp"},{id:"doc-5",name:"Dr. Santosh Gokak",category:"ortho",categoryLabel:"Orthopaedics",specialty:"In-charge Doctor & Physician",experience:"10+ Years Exp.",imgSrc:"/images/doctor-5.webp"}],W=document.getElementById("doctorGridTrack"),C=document.getElementById("doctorSliderTrack"),oe=document.getElementById("docSliderPrev"),ie=document.getElementById("docSliderNext");function ce(){C&&(C.innerHTML="",se.forEach((t,e)=>{const o=document.createElement("div");o.className="specialist-card-item",o.style.animationDelay=`${e*.1}s`;const i=t.id==="doc-0"?`<img src="${t.imgSrc}" alt="${t.name}">`:`<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;o.innerHTML=`
          <div class="specialist-image-container">
            ${i}
            <span class="specialist-dept-badge">${t.categoryLabel}</span>
          </div>
          <div class="specialist-card-body">
            <h3 class="specialist-name">${t.name}</h3>
            <p class="specialist-title">${t.specialty}</p>
            <span class="specialist-exp-badge-body">${t.experience}</span>
          </div>
        `,C.appendChild(o)})),W&&(W.innerHTML="",se.forEach((t,e)=>{const o=document.createElement("div");o.className="specialist-flip-card",o.style.animationDelay=`${e*.1}s`;const i=t.id==="doc-0"?`<img src="${t.imgSrc}" alt="${t.name}">`:`<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;o.innerHTML=`
          <div class="specialist-flip-inner">
            <!-- FRONT FACE -->
            <div class="specialist-flip-front">
              <div class="specialist-image-container">
                ${i}
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
        `,o.addEventListener("click",s=>{s.target.closest("a")||o.classList.toggle("is-flipped")}),W.appendChild(o)})),window.lucide&&window.lucide.createIcons(),C&&(C.scrollLeft=0)}function re(){if(!C)return 340;const t=C.querySelector(".specialist-card-item");if(t){const e=t.offsetWidth,o=window.getComputedStyle(C),n=parseFloat(o.gap)||28;return e+n}return 340}oe&&C&&oe.addEventListener("click",()=>{C.scrollBy({left:-re(),behavior:"smooth"})}),ie&&C&&ie.addEventListener("click",()=>{C.scrollBy({left:re(),behavior:"smooth"})}),ce(),document.querySelectorAll(".specialty-card").forEach(t=>{t.addEventListener("mousemove",e=>{const o=t.getBoundingClientRect(),n=e.clientX-o.left-o.width/2,i=e.clientY-o.top-o.height/2,s=Math.atan2(i,n);t.style.setProperty("--rotation",`${s}rad`)}),t.addEventListener("mouseleave",()=>{t.style.setProperty("--rotation","0deg")})});const Q=document.querySelector(".facilities-grid");if(Q){const t=Q.querySelectorAll(".facility-card"),e=120;document.addEventListener("pointermove",o=>{const n=Q.getBoundingClientRect(),i=o.clientX,s=o.clientY,f=i>=n.left-e&&i<=n.right+e&&s>=n.top-e&&s<=n.bottom+e;t.forEach(r=>{if(!f){r.style.setProperty("--spotlight-opacity","0");return}const d=r.getBoundingClientRect();if(i>=d.left-e&&i<=d.right+e&&s>=d.top-e&&s<=d.bottom+e){const g=i-d.left,u=s-d.top;r.style.setProperty("--mouse-x",`${g}px`),r.style.setProperty("--mouse-y",`${u}px`),r.style.setProperty("--spotlight-opacity","1")}else r.style.setProperty("--spotlight-opacity","0")})},{passive:!0})}const ne=document.getElementById("contactForm"),K=document.getElementById("formSuccessMessage");ne&&ne.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("fullName"),o=document.getElementById("phoneNum"),n=document.getElementById("emailAddr"),i=document.getElementById("preferredDate"),s=document.getElementById("specialtySelect"),f=document.getElementById("message"),r=e?.value.trim()||"",d=o?.value.trim()||"",p=n?.value.trim()||"N/A",g=i?.value||"N/A",u=s?.value||"",a=f?.value.trim()||"";if([e,o,s,f].forEach(m=>{m&&(m.style.borderColor="")}),!r){e&&(e.style.borderColor="#EF4444"),R("⚠️ Please enter your Full Name."),e?.focus();return}if(!d||d.length<7){o&&(o.style.borderColor="#EF4444"),R("⚠️ Please enter a valid Mobile Number."),o?.focus();return}if(!u){s&&(s.style.borderColor="#EF4444"),R("⚠️ Please select a Service / Specialty."),s?.focus();return}if(!a){f&&(f.style.borderColor="#EF4444"),R("⚠️ Please describe your Message / Requirements."),f?.focus();return}const l="917892869257";let c=`New Service Request

`;c+=`👤 Name: ${r}
`,c+=`📱 Phone: ${d}
`,c+=`📧 Email: ${p}
`,c+=`🛠️ Service: ${u}
`,c+=`📅 Preferred Date: ${g}

`,c+=`📝 Requirements:
${a}

`,c+="Please contact the customer regarding this request.";const h=encodeURIComponent(c),v=`https://wa.me/${l}?text=${h}`;window.open(v,"_blank"),K&&(K.style.display="block",K.innerHTML=`
          <div class="whatsapp-success-box">
            <div class="whatsapp-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1.025rem; color: #065F46; margin-bottom: 4px;">💬 WhatsApp Opened Successfully!</strong>
              <p style="margin: 0; color: #047857; font-size: 0.88rem; line-height: 1.5;">
                Thank you <strong>${r}</strong>! Your request message has been generated. Please press <strong>Send</strong> in WhatsApp to transmit your details directly to our phone number (7892869257).
              </p>
            </div>
          </div>
        `),R(`💬 WhatsApp opened for ${r}! Press Send to complete.`)}),document.querySelectorAll(".about-building-image-wrap, .about-hero-image-card").forEach(t=>{let e=40,o=42,n=42,i=0;const s=30,f=11;let r=0;t.addEventListener("pointerenter",()=>{n=240}),t.addEventListener("pointerleave",()=>{n=42});let d=null,p=!1;function g(a){r||(r=a);const l=Math.min((a-r)/1e3,.05);r=a;const c=s*(n-o)-f*i;i+=c*l,o+=i*l,e+=o*l,t.style.setProperty("--mk-beam-a",`${((e%360+360)%360).toFixed(2)}deg`),d=requestAnimationFrame(g)}new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&!p?(p=!0,r=0,d=requestAnimationFrame(g)):!l.isIntersecting&&p&&(p=!1,d&&cancelAnimationFrame(d))})},{threshold:.01}).observe(t)});const le=document.querySelectorAll(".services-section, #services, .clean-editorial-facilities-section, #facilities, .why-trust-carousel-section, .specialty-card, .clean-facility-card"),de=new IntersectionObserver((t,e)=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("section-revealed"),o.target.classList.add("is-revealed"),o.target.querySelectorAll(".specialty-card:not(.hidden-card), .clean-facility-card").forEach((i,s)=>{setTimeout(()=>{i.classList.add("is-revealed")},s*100)}),e.unobserve(o.target))})},{threshold:.05,rootMargin:"0px 0px -20px 0px"});le.forEach(t=>de.observe(t));const ue=document.querySelectorAll(".wf-hero-stats-banner, .wf-stats-grid, .hero-stats, .trust-strip-section, .building-highlights-grid, .executive-stats-chips, .about-hero-stats"),fe=new IntersectionObserver((t,e)=>{t.forEach(o=>{if(o.isIntersecting){const n=o.target;e.unobserve(n),n.querySelectorAll(".wf-stat-item, .wf-stat-number, .stat-value, .building-stat-chip, .trust-stat-number, .exec-stat-pill").forEach((s,f)=>{setTimeout(()=>{s.classList.add("counter-animated");const r=s.classList.contains("wf-stat-number")?s:s.querySelector(".wf-stat-number, .stat-value, strong, .trust-stat-number");r&&!r.dataset.animating&&(r.dataset.animating="true",pe(r))},f*110)})}})},{threshold:.1});ue.forEach(t=>fe.observe(t));function pe(t){const e=t.querySelector("span"),o=e?e.outerHTML:"",n=t.cloneNode(!0);n.querySelectorAll("span").forEach(a=>a.remove());const s=n.textContent.trim();if(t.textContent.includes("/")||e&&e.textContent.includes("/7"))return;const r=s.replace(/,/g,"").match(/\d+/);if(!r)return;const d=parseInt(r[0],10),p=d>=1e5?4200:d>=1e4?3800:d>=1e3?3400:2800,g=performance.now();function u(a){const l=a-g,c=Math.min(l/p,1),h=1-Math.pow(1-c,3),v=Math.floor(h*d);let m=v.toString();if((d>=1e5||d>=1e3)&&(m=v.toLocaleString("en-IN")),t.innerHTML=`${m}${o}`,c<1)requestAnimationFrame(u);else{let x=d.toLocaleString("en-IN");t.innerHTML=`${x}${o}`}}requestAnimationFrame(u)}const Z=document.querySelector(".trust-strip-section");if(Z){const t=Z.querySelectorAll(".reveal-item");let e=!1;new IntersectionObserver((n,i)=>{n.forEach(s=>{s.isIntersecting&&!e&&(e=!0,i.unobserve(s.target),t.forEach((f,r)=>{setTimeout(()=>{f.classList.add("trust-revealed");const d=f.querySelector(".trust-stat-number");d&&me(d)},r*100)}))})},{threshold:.15}).observe(Z)}function me(t){const e=parseInt(t.getAttribute("data-target"),10),o=1200,n=performance.now();function i(s){const f=s-n,r=Math.min(f/o,1),d=1-Math.pow(1-r,3),p=Math.floor(d*e);e>=1e3?t.innerText=p.toLocaleString("en-IN"):t.innerText=p,r<1?requestAnimationFrame(i):e>=1e3?t.innerText=e.toLocaleString("en-IN"):t.innerText=e}requestAnimationFrame(i)}const J=document.querySelector(".trust-bento-grid");if(J){const t=J.querySelectorAll(".trust-bento-card");let e=!1;new IntersectionObserver((n,i)=>{n.forEach(s=>{s.isIntersecting&&!e&&(e=!0,i.unobserve(s.target),t.forEach((f,r)=>{setTimeout(()=>{f.classList.add("bento-visible")},r*100)}))})},{threshold:.1}).observe(J)}const D=document.getElementById("trustCarouselViewport"),ae=document.getElementById("trustCarouselContainer"),G=document.getElementById("trustCarouselPrev"),j=document.getElementById("trustCarouselNext"),ee=document.getElementById("trustCarouselDots");if(D&&ae){let r=function(){const m=t[0].offsetWidth,q=m*(1+20/m);if(t.forEach((y,L)=>{let S=L-o;S>e/2&&(S-=e),S<-e/2&&(S+=e);const A=Math.abs(S),P=Math.pow(A,s),k=Math.min(n*P,82)*Math.sign(S),b=A>2?.2:i;y.style.transform=`translateX(calc(-50% + ${S*q}px)) translateZ(${-b*m*P}px) rotateY(${-k}deg)`;const w=Math.min(1,Math.max(0,e/2-A)),M=A>2?.5:f,z=Math.pow(1-M*A,2);y.style.opacity=String(Math.max(0,z*w)),y.style.zIndex=String(200-Math.round(A*50)),y.classList.remove("active","prev","next","far-prev","far-next"),A===0?y.classList.add("active"):A===1?y.classList.add(S>0?"next":"prev"):A===2&&y.classList.add(S>0?"far-next":"far-prev")}),ee){ee.innerHTML="";for(let y=0;y<e;y++){const L=document.createElement("button");L.className="trust-carousel-dot"+(y===o?" active":""),L.setAttribute("aria-label",`Go to slide ${y+1}`),L.addEventListener("click",()=>d(y)),ee.appendChild(L)}}},d=function(m){o=m,r()},p=function(){o=(o+1)%e,r()},g=function(){o=(o-1+e)%e,r()},l=function(){u&&clearInterval(u),u=setInterval(()=>{a||p()},5e3)},c=function(){a=!0},h=function(){a=!1};var Ie=r,_e=d,Ce=p,qe=g,Me=l,Te=c,Pe=h;const t=ae.querySelectorAll(".trust-carousel-slide"),e=t.length;let o=0;const n=44,i=.6,s=.56,f=.1;let u=null,a=!1;D.addEventListener("mouseenter",c),D.addEventListener("mouseleave",h),D.addEventListener("focusin",c),D.addEventListener("focusout",h),G&&(G.addEventListener("click",()=>{g()}),G.addEventListener("focusin",c),G.addEventListener("focusout",h)),j&&(j.addEventListener("click",()=>{p()}),j.addEventListener("focusin",c),j.addEventListener("focusout",h)),r(),l();let v=null;window.addEventListener("resize",()=>{clearTimeout(v),v=setTimeout(()=>r(),200)})}const V=document.querySelector(".vision-mission-container");if(V){const t=V.querySelector(".vision-content"),e=V.querySelectorAll(".mission-item");let o=!1;new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&!o&&(o=!0,t&&t.classList.add("visible"),e.forEach((f,r)=>{setTimeout(()=>{f.classList.add("item-visible")},r*80)}))})},{threshold:.15}).observe(V)}const Y=document.querySelector(".executive-profile-card.spotlight-card"),N=document.querySelector(".executive-portrait-col.tilt-3d-card"),ge=document.querySelectorAll(".spotlight-subcard");Y&&Y.addEventListener("pointermove",t=>{const e=Y.getBoundingClientRect(),o=t.clientX-e.left,n=t.clientY-e.top;Y.style.setProperty("--mouse-x",`${o}px`),Y.style.setProperty("--mouse-y",`${n}px`),ge.forEach(i=>{const s=i.getBoundingClientRect(),f=t.clientX-s.left,r=t.clientY-s.top;i.style.setProperty("--sub-x",`${f}px`),i.style.setProperty("--sub-y",`${r}px`)})}),N&&(N.addEventListener("pointermove",t=>{const e=N.getBoundingClientRect(),o=t.clientX-e.left-e.width/2,i=-(t.clientY-e.top-e.height/2)/e.height*10,s=o/e.width*10;N.style.transform=`perspective(800px) rotateX(${i.toFixed(2)}deg) rotateY(${s.toFixed(2)}deg) scale(1.02)`}),N.addEventListener("pointerleave",()=>{N.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"}));const X=document.querySelector(".about-hero-showcase.hero-spotlight-card"),O=document.querySelector(".about-building-image-wrap.tilt-building-card");X&&X.addEventListener("pointermove",t=>{const e=X.getBoundingClientRect(),o=t.clientX-e.left,n=t.clientY-e.top;X.style.setProperty("--hero-x",`${o}px`),X.style.setProperty("--hero-y",`${n}px`)}),O&&(O.addEventListener("pointermove",t=>{const e=O.getBoundingClientRect(),o=t.clientX-e.left-e.width/2,i=-(t.clientY-e.top-e.height/2)/e.height*8,s=o/e.width*8;O.style.transform=`perspective(800px) rotateX(${i.toFixed(2)}deg) rotateY(${s.toFixed(2)}deg) scale(1.02)`}),O.addEventListener("pointerleave",()=>{O.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"}));function he(){const t=document.querySelector(".specialty-editorial-page");if(!t)return;const e=t.querySelector(".editorial-hero-image-wrap");if(e){let u=!1;window.addEventListener("scroll",()=>{u||(window.requestAnimationFrame(()=>{const a=window.scrollY;a<900&&(e.style.transform=`translateY(${a*.12}px)`),u=!1}),u=!0)},{passive:!0})}const o=t.querySelectorAll(".editorial-intro-section, .editorial-problems-section, .editorial-treatments-section, .editorial-journey-section, .editorial-specialist-section, .editorial-facilities-section, .editorial-recovery-section, .editorial-final-cta, .editorial-related-nav"),n=new IntersectionObserver((u,a)=>{u.forEach(l=>{l.isIntersecting&&(l.target.classList.add("is-revealed"),a.unobserve(l.target))})},{threshold:.1});o.forEach(u=>{u.classList.add("specialty-scroll-reveal"),n.observe(u)}),[{container:".treatment-blocks-stack",items:".treatment-block-row"},{container:".journey-timeline-grid",items:".journey-step-item"},{container:".patient-problem-list",items:".patient-problem-item"},{container:".editorial-facilities-grid",items:".facility-editorial-card"}].forEach(u=>{t.querySelectorAll(u.container).forEach(l=>{const c=l.querySelectorAll(u.items);c.forEach(v=>v.classList.add("stagger-item")),new IntersectionObserver((v,m)=>{v.forEach(x=>{x.isIntersecting&&(c.forEach((q,y)=>{setTimeout(()=>{q.classList.add("is-revealed")},y*90)}),m.unobserve(x.target))})},{threshold:.08}).observe(l)})});const s=t.querySelector(".editorial-journey-section"),f=t.querySelector(".journey-timeline-grid"),r=t.querySelectorAll(".journey-step-item");if(s&&f&&r.length>0){let a=function(){const l=s.getBoundingClientRect(),c=window.innerHeight,h=c*.8,v=l.height+c*.4,m=h-l.top;let x=Math.max(0,Math.min(1,m/v));f.style.setProperty("--journey-line-progress",x.toFixed(3))};var g=a;let u=!1;window.addEventListener("scroll",()=>{u||(window.requestAnimationFrame(()=>{a(),u=!1}),u=!0)},{passive:!0}),a()}t.querySelectorAll(".specialist-pill-badge, .specialist-qual-item span, .treatment-num-pill, .stat-value, .stat-number").forEach(u=>{const a=u.innerText.trim(),l=a.match(/([\d,]+)(\+?.*)$/);if(l&&!u.dataset.statAnimated){const c=l[1].replace(/,/g,""),h=parseInt(c,10);if(!isNaN(h)&&h>0){const v=l[2]||"",m=a.indexOf(l[1]),x=m>0?a.substring(0,m):"";new IntersectionObserver((y,L)=>{y.forEach(S=>{if(S.isIntersecting){let b=function(w){const M=w-k,z=Math.min(M/P,1),xe=1-Math.pow(1-z,3),Le=Math.floor(xe*h);u.innerText=x+Le.toLocaleString("en-IN")+v,z<1?requestAnimationFrame(b):u.innerText=x+h.toLocaleString("en-IN")+v};var A=b;u.dataset.statAnimated="true";const P=1200,k=performance.now();requestAnimationFrame(b),L.unobserve(S.target)}})},{threshold:.15}).observe(u)}}});const p=t.querySelector(".editorial-related-nav .related-nav-links");if(p){let u=!1,a,l;p.addEventListener("mousedown",c=>{u=!0,a=c.pageX-p.offsetLeft,l=p.scrollLeft}),p.addEventListener("mouseleave",()=>{u=!1}),p.addEventListener("mouseup",()=>{u=!1}),p.addEventListener("mousemove",c=>{if(!u)return;c.preventDefault();const v=(c.pageX-p.offsetLeft-a)*2;p.scrollLeft=l-v})}}he();function ve(){if(!document.querySelector(".facilities-editorial-main, .facilities-sections-stack"))return;const e=document.querySelectorAll(".specialty-scroll-reveal, .fac-chapter-section, .fac-editorial-hero, .fac-environment-section, .fac-precision-details-section, .fac-difference-section, .fac-atmospheric-ending"),o=new IntersectionObserver((r,d)=>{r.forEach(p=>{p.isIntersecting&&(p.target.classList.add("is-revealed"),d.unobserve(p.target))})},{threshold:.05});e.forEach(r=>{r.classList.add("specialty-scroll-reveal"),o.observe(r)});const n=document.querySelectorAll(".fac-spec-item, .fac-precision-item, .fac-editorial-spec-block, .fac-diagnostic-detail-item, .fac-recovery-feature, .fac-difference-row"),i=new IntersectionObserver((r,d)=>{r.forEach(p=>{p.isIntersecting&&(p.target.classList.add("is-revealed"),d.unobserve(p.target))})},{threshold:.08});n.forEach((r,d)=>{r.classList.add("stagger-item"),r.style.transitionDelay=`${d%4*80}ms`,i.observe(r)});const s=document.querySelectorAll(".fac-editorial-nav-link"),f=document.querySelectorAll("#surgical-care, #critical-care, #inpatient-care, #diagnostics, #recovery");if(s.length>0&&f.length>0){let r=!1;window.addEventListener("scroll",()=>{r||(window.requestAnimationFrame(()=>{let d="";const p=window.scrollY+250;f.forEach(g=>{p>=g.offsetTop&&(d=g.getAttribute("id"))}),d&&s.forEach(g=>{g.getAttribute("href")===`#${d}`?g.classList.add("active"):g.classList.remove("active")}),r=!1}),r=!0)},{passive:!0})}}ve();function ye(){const t=document.querySelector(".editorial-about-page");if(!t)return;const e=t.querySelector(".about-hero-editorial");e&&e.classList.add("is-revealed");const o=t.querySelectorAll(".about-reveal-section, .about-hero-editorial, .aceternity-timeline-section, .doctors-section, .about-principles-editorial, .about-location-editorial"),n=new IntersectionObserver((a,l)=>{a.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-revealed"),l.unobserve(c.target))})},{threshold:.05});o.forEach(a=>{a.classList.add("about-reveal-section"),n.observe(a)}),[{container:".about-hero-editorial-centered",items:".about-eyebrow-wrapper, .about-hero-editorial-title, .about-hero-story-block, .hero-highlight-pill, .about-hero-actions"},{container:".aceternity-timeline-container",items:".timeline-entry"},{container:".doctors-flip-grid",items:".specialist-flip-card"},{container:".location-info-stack",items:".location-info-group"},{container:".location-destination-layout",items:".location-editorial-col, .location-map-stage, .location-actions-row"}].forEach(a=>{t.querySelectorAll(a.container).forEach(c=>{const h=c.querySelectorAll(a.items);h.forEach(m=>m.classList.add("about-stagger-item")),new IntersectionObserver((m,x)=>{m.forEach(q=>{q.isIntersecting&&(h.forEach((y,L)=>{setTimeout(()=>{y.classList.add("is-revealed")},L*80)}),x.unobserve(q.target))})},{threshold:.08}).observe(c)})});const s=t.querySelector(".aceternity-timeline-section")||t.querySelector("#about-timeline"),f=t.querySelector("#timelineBeamFill")||t.querySelector("#timeline-beam-fill");if(s&&f){const a=()=>{const l=s.getBoundingClientRect(),c=window.innerHeight,h=l.height,v=c-l.top-120;if(l.top<c&&l.bottom>0){let m=v/h*100;m=Math.min(Math.max(m,0),100),f.style.height=`${m}%`}};window.addEventListener("scroll",a,{passive:!0}),a()}const r=t.querySelectorAll(".timeline-entry");if(r.length){const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&c.target.classList.add("is-active")})},{threshold:.3});r.forEach(l=>a.observe(l))}const d=t.querySelector(".decades-stats-row");if(d){const a=d.querySelectorAll("[data-count-target]");new IntersectionObserver((c,h)=>{c.forEach(v=>{v.isIntersecting&&(a.forEach(m=>{const x=parseInt(m.getAttribute("data-count-target"),10),q=m.getAttribute("data-count-suffix")||"",y=m.getAttribute("data-count-format")==="comma",L=1200,S=performance.now();function A(P){const k=P-S,b=Math.min(k/L,1),w=1-Math.pow(1-b,3),M=Math.floor(w*x);m.textContent=(y?M.toLocaleString("en-IN"):M)+q,b<1&&requestAnimationFrame(A)}requestAnimationFrame(A)}),h.unobserve(v.target))})},{threshold:.2}).observe(d)}t.querySelectorAll(".about-building-frame, .founder-portrait-stage, .beginning-visual-block, .location-map-stage").forEach(a=>{a.addEventListener("pointermove",l=>{const c=a.getBoundingClientRect(),h=l.clientX-c.left-c.width/2,m=-(l.clientY-c.top-c.height/2)/c.height*4,x=h/c.width*4;a.style.transform=`perspective(900px) rotateX(${m.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg) scale(1.015)`}),a.addEventListener("pointerleave",()=>{a.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"})});const g=t.querySelectorAll(".principles-orbital-item"),u=t.querySelector(".principles-orbit-rotator");g.length&&u&&g.forEach(a=>{a.addEventListener("mouseenter",()=>{u.classList.add("is-paused")}),a.addEventListener("mouseleave",()=>{u.classList.remove("is-paused")})})}ye();function be(){const t=document.getElementById("heroShaderCanvas");if(!t)return;const e=t.getContext("webgl",{antialias:!1});if(!e)return;const o=`attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }`,n=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
    }`,i=(b,w)=>{const M=e.createShader(b);return e.shaderSource(M,w),e.compileShader(M),M},s=e.createProgram(),f=i(e.VERTEX_SHADER,o),r=i(e.FRAGMENT_SHADER,n);e.attachShader(s,f),e.attachShader(s,r),e.linkProgram(s),e.useProgram(s);const d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const p=e.getAttribLocation(s,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const g={colors:e.getUniformLocation(s,"u_colors"),scene:e.getUniformLocation(s,"u_scene"),shape:e.getUniformLocation(s,"u_shape"),surface:e.getUniformLocation(s,"u_surface"),finish:e.getUniformLocation(s,"u_finish"),transform:e.getUniformLocation(s,"u_transform"),space:e.getUniformLocation(s,"u_space"),cursor:e.getUniformLocation(s,"u_cursor")},u=[.145098,.388235,.921569,.023529,.713725,.831372,.117647,.25098,.686275,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1,.937255,.964706,1];e.uniform3fv(g.colors,new Float32Array(u)),e.uniform4f(g.shape,1.5,.55,.5,0),e.uniform4f(g.surface,2.4,1.005,.5,.85),e.uniform4f(g.finish,0,.4,.04,0),e.uniform4f(g.transform,1,0,.4,0);let a=0,l=0,c=0,h=0,v=0,m=0;window.addEventListener("pointermove",b=>{const w=t.getBoundingClientRect();b.clientX>=w.left&&b.clientX<=w.right&&b.clientY>=w.top&&b.clientY<=w.bottom?(c=(b.clientX-w.left)/w.width*2-1,h=-((b.clientY-w.top)/w.height*2-1),m=1):m=0},{passive:!0});const x=()=>{const b=t.parentElement?t.parentElement.getBoundingClientRect():t.getBoundingClientRect(),w=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.round(b.width*w)),t.height=Math.max(1,Math.round(b.height*w)),e.viewport(0,0,t.width,t.height)};window.addEventListener("resize",x),x();const q=performance.now();let y=null,L=!1;function S(b){a+=(c-a)*.1,l+=(h-l)*.1,v+=(m-v)*.1,e.uniform4f(g.scene,t.width,t.height,(b-q)/1e3*.176,4),e.uniform4f(g.space,0,0,a,l),e.uniform4f(g.cursor,v,1,1,.8),e.drawArrays(e.TRIANGLES,0,3),y=requestAnimationFrame(S)}function A(){L||(L=!0,y=requestAnimationFrame(S))}function P(){L&&(L=!1,y&&cancelAnimationFrame(y))}const k=new IntersectionObserver(b=>{b.forEach(w=>{w.isIntersecting?A():P()})},{threshold:.01});k.observe(t),document.addEventListener("visibilitychange",()=>{document.hidden?P():k&&A()}),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&A()}be();function we(){[".section-header-center",".fac-webflow-header",".fac-webflow-card",".specialty-card",".facility-card",".stat-card-item",".building-stat-chip",".testimonial-card-item",".about-chapter-card",".fac-spec-card",".specialist-card-item",".doctor-card",".fac-editorial-hero"].forEach(i=>{document.querySelectorAll(i).forEach(s=>{!s.classList.contains("reveal-on-scroll")&&!s.classList.contains("reveal-fade-left")&&!s.classList.contains("reveal-fade-right")&&!s.classList.contains("reveal-scale")&&s.classList.add("reveal-on-scroll")})});const e={root:null,rootMargin:"50px 0px -20px 0px",threshold:.05},o=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&s.target.classList.add("is-visible")})},e);document.querySelectorAll(".reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale").forEach(i=>{i.getBoundingClientRect().top<window.innerHeight+100&&i.classList.add("is-visible"),o.observe(i)})}function Ee(){const t=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&n.target.querySelectorAll(".stat-bar-fill").forEach(s=>{const f=s.getAttribute("data-width")||"100%";s.style.width=f})})},{threshold:.2}),e=document.querySelector(".creative-facilities-left");e&&t.observe(e)}we(),Ee()});
