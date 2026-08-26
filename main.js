/* ==========================================================================
   Sanadi Orthopedic Hospital - Main JavaScript Entry
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Cinematic Brand Intro Preloader Screen Dismissal
  const preloader = document.getElementById('siteIntroPreloader');
  if (preloader) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      preloader.classList.add('fade-out');
      document.body.classList.add('intro-complete');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 850);
    }, 1400);
  } else {
    document.body.classList.add('intro-complete');
  }

  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Dynamic Scroll Engine (Header Glassmorphic Blur, Back-to-Top, Parallax)
  const header = document.getElementById('header');

  // Create Floating Back-to-Top Button
  let backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Event Listener (Optimized via requestAnimationFrame)
  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;

        // Header scrolled class
        if (scrolled > 20) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }

        // Toggle Back-to-Top Button visibility
        if (scrolled > 300) {
          backToTopBtn?.classList.add('is-visible');
        } else {
          backToTopBtn?.classList.remove('is-visible');
        }

        // Subtle Parallax Scroll Effect for Hero and Floating Graphics
        const parallaxEls = document.querySelectorAll('[data-parallax], .hero-doctor-cutout, .editorial-ot-hero');
        parallaxEls.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed') || '-0.08');
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });

        isTicking = false;
      });
      isTicking = true;
    }
  });

  // 3. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // 4. Interactive Toast Notification
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message) {
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  }

  // View More Specialties Button Toggle
  const viewMoreBtn = document.getElementById('viewMoreSpecialties');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const hiddenCards = document.querySelectorAll('.specialty-card.hidden-card');
      const isExpanded = viewMoreBtn.classList.contains('expanded');

      if (!isExpanded) {
        hiddenCards.forEach(card => {
          card.classList.add('is-revealed');
        });
        viewMoreBtn.classList.add('expanded');
        const span = viewMoreBtn.querySelector('span');
        if (span) span.textContent = 'Show Less Specialties';
        const icon = viewMoreBtn.querySelector('[data-lucide]');
        if (icon) icon.setAttribute('data-lucide', 'chevron-up');
      } else {
        hiddenCards.forEach(card => {
          card.classList.remove('is-revealed');
        });
        viewMoreBtn.classList.remove('expanded');
        const span = viewMoreBtn.querySelector('span');
        if (span) span.textContent = 'View More Specialties';
        const icon = viewMoreBtn.querySelector('[data-lucide]');
        if (icon) icon.setAttribute('data-lucide', 'chevron-down');
      }

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  // ==========================================================================
  // 5. Specialist Fluid Slider with Department Filter Tabs
  // ==========================================================================
  const rawDoctors = [
    {
      id: "doc-0",
      name: "Dr. G. N. Sanadi",
      category: "ortho",
      categoryLabel: "Orthopaedics",
      specialty: "Founder & Chief Orthopaedic Surgeon",
      experience: "25+ Years Exp.",
      imgSrc: "/images/dr-sanadi-founder.png"
    },
    {
      id: "doc-1",
      name: "Dr. Shrinivas Odugoudar",
      category: "neuro",
      categoryLabel: "Neurosurgery",
      specialty: "Consultant Neurosurgeon",
      experience: "15+ Years Exp.",
      imgSrc: "/images/doctor-2.jpg"
    },
    {
      id: "doc-2",
      name: "Dr. Shekar Malvi",
      category: "ortho",
      categoryLabel: "Orthopaedics",
      specialty: "Trauma & Joint Replacement Surgeon",
      experience: "14+ Years Exp.",
      imgSrc: "/images/doctor-3.jpg"
    },
    {
      id: "doc-3",
      name: "Dr. Jayant Kulkarni",
      category: "anaesthesia",
      categoryLabel: "Anaesthesiology",
      specialty: "Consultant Anaesthesiologist",
      experience: "18+ Years Exp.",
      imgSrc: "/images/doctor-1.jpg"
    },
    {
      id: "doc-4",
      name: "Dr. Shivakumar H",
      category: "anaesthesia",
      categoryLabel: "Anaesthesiology",
      specialty: "Consultant Anaesthesiologist",
      experience: "12+ Years Exp.",
      imgSrc: "/images/doctor-4.jpg"
    },
    {
      id: "doc-5",
      name: "Dr. Santosh Gokak",
      category: "ortho",
      categoryLabel: "Orthopaedics",
      specialty: "In-charge Doctor & Physician",
      experience: "10+ Years Exp.",
      imgSrc: "/images/doctor-5.jpg"
    }
  ];

  const gridTrack = document.getElementById('doctorGridTrack');
  const sliderTrack = document.getElementById('doctorSliderTrack');
  const docSliderPrev = document.getElementById('docSliderPrev');
  const docSliderNext = document.getElementById('docSliderNext');

  function renderSpecialists() {
    if (sliderTrack) {
      sliderTrack.innerHTML = '';
      rawDoctors.forEach((doctor, index) => {
        const card = document.createElement('div');
        card.className = 'specialist-card-item';
        card.style.animationDelay = `${index * 0.1}s`;

        const isDrSanadi = doctor.id === "doc-0";
        const imageContent = isDrSanadi 
          ? `<img src="${doctor.imgSrc}" alt="${doctor.name}">`
          : `<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;

        card.innerHTML = `
          <div class="specialist-image-container">
            ${imageContent}
            <span class="specialist-dept-badge">${doctor.categoryLabel}</span>
          </div>
          <div class="specialist-card-body">
            <h3 class="specialist-name">${doctor.name}</h3>
            <p class="specialist-title">${doctor.specialty}</p>
            <span class="specialist-exp-badge-body">${doctor.experience}</span>
          </div>
        `;
        sliderTrack.appendChild(card);
      });
    }

    if (gridTrack) {
      gridTrack.innerHTML = '';
      rawDoctors.forEach((doctor, index) => {
        const card = document.createElement('div');
        card.className = 'specialist-flip-card';
        card.style.animationDelay = `${index * 0.1}s`;

        const isDrSanadi = doctor.id === "doc-0";
        const imageContent = isDrSanadi 
          ? `<img src="${doctor.imgSrc}" alt="${doctor.name}">`
          : `<div class="specialist-placeholder-bg">
              <div class="specialist-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
             </div>`;

        card.innerHTML = `
          <div class="specialist-flip-inner">
            <!-- FRONT FACE -->
            <div class="specialist-flip-front">
              <div class="specialist-image-container">
                ${imageContent}
                <span class="specialist-dept-badge">${doctor.categoryLabel}</span>
              </div>
              <div class="specialist-card-body">
                <h3 class="specialist-name">${doctor.name}</h3>
                <p class="specialist-title">${doctor.specialty}</p>
                <div class="specialist-front-footer">
                  <span class="specialist-exp-badge-body">${doctor.experience}</span>
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
                <span class="specialist-dept-badge-back">${doctor.categoryLabel}</span>
                <h4 class="specialist-back-name">${doctor.name}</h4>
                <p class="specialist-back-title">${doctor.specialty}</p>
              </div>
              <div class="specialist-back-body">
                <div class="specialist-info-row">
                  <span class="info-label"><i data-lucide="building-2" style="width: 13px; height: 13px;"></i> Department</span>
                  <span class="info-val">${doctor.categoryLabel}</span>
                </div>
                <div class="specialist-info-row" style="margin-top: 8px;">
                  <span class="info-label"><i data-lucide="award" style="width: 13px; height: 13px;"></i> Specialty</span>
                  <span class="info-val">${doctor.specialty}</span>
                </div>
                <div class="specialist-info-row" style="margin-top: 8px;">
                  <span class="info-label"><i data-lucide="clock" style="width: 13px; height: 13px;"></i> Experience</span>
                  <span class="info-val highlight-exp">${doctor.experience}</span>
                </div>
              </div>
            </div>
          </div>
        `;

        // Mobile tap flip toggle
        card.addEventListener('click', (e) => {
          if (!e.target.closest('a')) {
            card.classList.toggle('is-flipped');
          }
        });

        gridTrack.appendChild(card);
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    if (sliderTrack) sliderTrack.scrollLeft = 0;
  }

  // Slider Navigation Arrows (Manual step navigation if slider is active)
  if (docSliderPrev && sliderTrack) {
    docSliderPrev.addEventListener('click', () => {
      sliderTrack.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }

  if (docSliderNext && sliderTrack) {
    docSliderNext.addEventListener('click', () => {
      sliderTrack.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  renderSpecialists();

  // 6. InfoCard Mouse Movement Rotating Border for Specialty Cards
  const specialtyCards = document.querySelectorAll('.specialty-card');
  specialtyCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(y, x);
      card.style.setProperty('--rotation', `${angle}rad`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotation', '0deg');
    });
  });

  // 7. Cursor Cards Spotlight Interaction for Facilities Section
  const facilitiesGrid = document.querySelector('.facilities-grid');
  if (facilitiesGrid) {
    const facilityCards = facilitiesGrid.querySelectorAll('.facility-card');
    const extendedProximity = 120;

    document.addEventListener('pointermove', (e) => {
      const gridRect = facilitiesGrid.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      const isNearContainer =
        clientX >= gridRect.left - extendedProximity &&
        clientX <= gridRect.right + extendedProximity &&
        clientY >= gridRect.top - extendedProximity &&
        clientY <= gridRect.bottom + extendedProximity;

      facilityCards.forEach((card) => {
        if (!isNearContainer) {
          card.style.setProperty('--spotlight-opacity', '0');
          return;
        }

        const rect = card.getBoundingClientRect();
        const isNearCard =
          clientX >= rect.left - extendedProximity &&
          clientX <= rect.right + extendedProximity &&
          clientY >= rect.top - extendedProximity &&
          clientY <= rect.bottom + extendedProximity;

        if (isNearCard) {
          const localX = clientX - rect.left;
          const localY = clientY - rect.top;
          card.style.setProperty('--mouse-x', `${localX}px`);
          card.style.setProperty('--mouse-y', `${localY}px`);
          card.style.setProperty('--spotlight-opacity', '1');
        } else {
          card.style.setProperty('--spotlight-opacity', '0');
        }
      });
    });
  }

  // 8. WhatsApp Direct Integration Service Request Form Handler
  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const fullNameInput = document.getElementById('fullName');
      const phoneNumInput = document.getElementById('phoneNum');
      const emailAddrInput = document.getElementById('emailAddr');
      const preferredDateInput = document.getElementById('preferredDate');
      const specialtyInput = document.getElementById('specialtySelect');
      const messageInput = document.getElementById('message');

      const fullName = fullNameInput?.value.trim() || '';
      const phoneNum = phoneNumInput?.value.trim() || '';
      const emailAddr = emailAddrInput?.value.trim() || 'N/A';
      const preferredDate = preferredDateInput?.value || 'N/A';
      const specialty = specialtyInput?.value || '';
      const message = messageInput?.value.trim() || '';

      // Clear existing field highlights
      [fullNameInput, phoneNumInput, specialtyInput, messageInput].forEach(el => {
        if (el) el.style.borderColor = '';
      });

      // Form Validation
      if (!fullName) {
        if (fullNameInput) fullNameInput.style.borderColor = '#EF4444';
        showToast('⚠️ Please enter your Full Name.');
        fullNameInput?.focus();
        return;
      }

      if (!phoneNum || phoneNum.length < 7) {
        if (phoneNumInput) phoneNumInput.style.borderColor = '#EF4444';
        showToast('⚠️ Please enter a valid Mobile Number.');
        phoneNumInput?.focus();
        return;
      }

      if (!specialty) {
        if (specialtyInput) specialtyInput.style.borderColor = '#EF4444';
        showToast('⚠️ Please select a Service / Specialty.');
        specialtyInput?.focus();
        return;
      }

      if (!message) {
        if (messageInput) messageInput.style.borderColor = '#EF4444';
        showToast('⚠️ Please describe your Message / Requirements.');
        messageInput?.focus();
        return;
      }

      // Format WhatsApp Message exactly as requested
      const whatsappNumber = "917892869257"; // Business Number: 7892869257 with India code +91
      
      let rawMessage = `New Service Request\n\n`;
      rawMessage += `👤 Name: ${fullName}\n`;
      rawMessage += `📱 Phone: ${phoneNum}\n`;
      rawMessage += `📧 Email: ${emailAddr}\n`;
      rawMessage += `🛠️ Service: ${specialty}\n`;
      rawMessage += `📅 Preferred Date: ${preferredDate}\n\n`;
      rawMessage += `📝 Requirements:\n${message}\n\n`;
      rawMessage += `Please contact the customer regarding this request.`;

      const encodedMessage = encodeURIComponent(rawMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Display Success Message below form
      if (formSuccessMessage) {
        formSuccessMessage.style.display = 'block';
        formSuccessMessage.innerHTML = `
          <div class="whatsapp-success-box">
            <div class="whatsapp-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            </div>
            <div>
              <strong style="display: block; font-size: 1.025rem; color: #065F46; margin-bottom: 4px;">💬 WhatsApp Opened Successfully!</strong>
              <p style="margin: 0; color: #047857; font-size: 0.88rem; line-height: 1.5;">
                Thank you <strong>${fullName}</strong>! Your request message has been generated. Please press <strong>Send</strong> in WhatsApp to transmit your details directly to our phone number (7892869257).
              </p>
            </div>
          </div>
        `;
      }

      showToast(`💬 WhatsApp opened for ${fullName}! Press Send to complete.`);
    });
  }

  // 9. Motiq Border Beam Panel Delta-Time Spring Physics Loop
  const beamPanels = document.querySelectorAll('.about-building-image-wrap, .about-hero-image-card');
  beamPanels.forEach((panel) => {
    let angle = 40;
    let speed = 42;
    let targetSpeed = 42;
    let velocity = 0;
    const k = 30; // stiffness
    const d = 11; // damping
    let lastTime = 0;

    panel.addEventListener('pointerenter', () => { targetSpeed = 240; });
    panel.addEventListener('pointerleave', () => { targetSpeed = 42; });

    function animateBeam(now) {
      if (!lastTime) lastTime = now;
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Delta-time spring physics step
      const accel = k * (targetSpeed - speed) - d * velocity;
      velocity += accel * dt;
      speed += velocity * dt;

      angle += speed * dt;
      panel.style.setProperty('--mk-beam-a', `${(((angle % 360) + 360) % 360).toFixed(2)}deg`);

      requestAnimationFrame(animateBeam);
    }

    requestAnimationFrame(animateBeam);
  });

  // Section & Card Staggered Scroll Entrance Observer
  const sectionContainers = document.querySelectorAll(
    '.services-section, #services, .clean-editorial-facilities-section, #facilities, .why-trust-carousel-section, .specialty-card, .clean-facility-card'
  );
  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-revealed');
        entry.target.classList.add('is-revealed');

        // Trigger stagger on child cards if parent container intersected
        const innerCards = entry.target.querySelectorAll('.specialty-card, .clean-facility-card');
        innerCards.forEach((c, idx) => {
          setTimeout(() => {
            c.classList.add('is-revealed');
          }, idx * 100);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  sectionContainers.forEach(sec => sectionObserver.observe(sec));

  // 11. Universal Smooth Animated Stat Counter Engine
  const counterContainers = document.querySelectorAll(
    '.wf-hero-stats-banner, .wf-stats-grid, .hero-stats, .trust-strip-section, .building-highlights-grid, .executive-stats-chips, .about-hero-stats'
  );

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        obs.unobserve(container);

        const statItems = container.querySelectorAll('.wf-stat-item, .wf-stat-number, .stat-value, .building-stat-chip, .trust-stat-number, .exec-stat-pill');
        
        statItems.forEach((item, idx) => {
          setTimeout(() => {
            item.classList.add('counter-animated');
            
            const numEl = item.classList.contains('wf-stat-number') ? item : item.querySelector('.wf-stat-number, .stat-value, strong, .trust-stat-number');
            if (numEl && !numEl.dataset.animating) {
              numEl.dataset.animating = 'true';
              runCounterAnimation(numEl);
            }
          }, idx * 110);
        });
      }
    });
  }, { threshold: 0.1 });

  counterContainers.forEach(c => counterObserver.observe(c));

  function runCounterAnimation(el) {
    const spanEl = el.querySelector('span');
    const suffixHTML = spanEl ? spanEl.outerHTML : '';
    
    const clone = el.cloneNode(true);
    const spansInClone = clone.querySelectorAll('span');
    spansInClone.forEach(s => s.remove());
    const rawText = clone.textContent.trim();

    // Skip counting animation for constant values like 24/7
    if (el.textContent.includes('/') || (spanEl && spanEl.textContent.includes('/7'))) {
      return;
    }

    const cleanedText = rawText.replace(/,/g, '');
    const numMatch = cleanedText.match(/\d+/);
    if (!numMatch) return;

    const targetVal = parseInt(numMatch[0], 10);
    // Extended duration (2.8s to 4.2s) for a dramatic, highly visible counting effect
    const duration = targetVal >= 100000 ? 4200 : (targetVal >= 10000 ? 3800 : (targetVal >= 1000 ? 3400 : 2800));
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * targetVal);

      let formattedNum = currentVal.toString();
      if (targetVal >= 100000) {
        formattedNum = currentVal.toLocaleString('en-IN');
      } else if (targetVal >= 1000) {
        formattedNum = currentVal.toLocaleString('en-IN');
      }

      el.innerHTML = `${formattedNum}${suffixHTML}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        let finalFormatted = targetVal.toLocaleString('en-IN');
        el.innerHTML = `${finalFormatted}${suffixHTML}`;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // 11.5 Trust Strip Scroll-Triggered Stagger & Count-Up Animation (Triggers ONCE)
  const trustSection = document.querySelector('.trust-strip-section');
  if (trustSection) {
    const stats = trustSection.querySelectorAll('.reveal-item');
    let trustAnimated = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !trustAnimated) {
          trustAnimated = true;
          obs.unobserve(entry.target);
          
          stats.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('trust-revealed');
              const numEl = el.querySelector('.trust-stat-number');
              if (numEl) {
                animateSingleCounter(numEl);
              }
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.15 });

    observer.observe(trustSection);
  }

  function animateSingleCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1200;
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * target);

      if (target >= 1000) {
        el.innerText = currentValue.toLocaleString('en-IN');
      } else {
        el.innerText = currentValue;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        if (target >= 1000) {
          el.innerText = target.toLocaleString('en-IN');
        } else {
          el.innerText = target;
        }
      }
    }

    requestAnimationFrame(updateCount);
  }

  // 11.6 Bento Grid Scroll-Triggered Stagger Animation (Triggers ONCE)
  const bentoGrid = document.querySelector('.trust-bento-grid');
  if (bentoGrid) {
    const cards = bentoGrid.querySelectorAll('.trust-bento-card');
    let bentoAnimated = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !bentoAnimated) {
          bentoAnimated = true;
          obs.unobserve(entry.target);
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('bento-visible');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    observer.observe(bentoGrid);
  }



  // 11.8 Why Patients Trust Us - Coverflow Carousel
  const trustCarouselViewport = document.getElementById('trustCarouselViewport');
  const trustCarouselContainer = document.getElementById('trustCarouselContainer');
  const trustCarouselPrev = document.getElementById('trustCarouselPrev');
  const trustCarouselNext = document.getElementById('trustCarouselNext');
  const trustCarouselDots = document.getElementById('trustCarouselDots');

  if (trustCarouselViewport && trustCarouselContainer) {
    const slides = trustCarouselContainer.querySelectorAll('.trust-carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentPos = 0;
    
    // Coverflow configuration
    const rotate = 44;
    const depth = 0.6;
    const falloff = 0.56;
    const fade = 0.1;

    function updateCoverflow() {
      const cardWidth = slides[0].offsetWidth;
      const gap = 20;
      const pitch = cardWidth * (1 + gap / cardWidth);

      slides.forEach((slide, index) => {
        let offset = index - currentIndex;
        
        // Loop the offset
        if (offset > slideCount / 2) offset -= slideCount;
        if (offset < -slideCount / 2) offset += slideCount;

        const distance = Math.abs(offset);
        const ramp = Math.pow(distance, falloff);
        const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
        
        // Apply 3D transforms - reduce depth for far cards to minimize circular movement shadow
        const depthMultiplier = distance > 2 ? 0.2 : depth;
        slide.style.transform = 
          `translateX(calc(-50% + ${offset * pitch}px)) ` +
          `translateZ(${-depthMultiplier * cardWidth * ramp}px) rotateY(${-tilt}deg)`;
        
        // Apply opacity based on distance - tighten fade-out curve to prevent ghosting
        // Cards fade to 0 much faster near the wrap boundary to prevent overlap
        const edge = Math.min(1, Math.max(0, slideCount / 2 - distance));
        const fadeMultiplier = distance > 2 ? 0.5 : fade;
        // Use exponential fade for sharper cutoff near edges
        const opacityFade = Math.pow(1 - fadeMultiplier * distance, 2);
        slide.style.opacity = String(Math.max(0, opacityFade * edge));
        
        // Update z-index - ensure fading cards are always behind active cards
        // Use a wider z-index spread to prevent overlap issues
        slide.style.zIndex = String(200 - Math.round(distance * 50));
        
        // Update classes for styling
        slide.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');
        if (distance === 0) {
          slide.classList.add('active');
        } else if (distance === 1) {
          slide.classList.add(offset > 0 ? 'next' : 'prev');
        } else if (distance === 2) {
          slide.classList.add(offset > 0 ? 'far-next' : 'far-prev');
        }
      });

      // Update dots
      if (trustCarouselDots) {
        trustCarouselDots.innerHTML = '';
        for (let i = 0; i < slideCount; i++) {
          const dot = document.createElement('button');
          dot.className = 'trust-carousel-dot' + (i === currentIndex ? ' active' : '');
          dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
          dot.addEventListener('click', () => goToSlide(i));
          trustCarouselDots.appendChild(dot);
        }
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCoverflow();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCoverflow();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCoverflow();
    }

    // Auto-slide autoplay with Pause-on-Hover and Pause-on-Focus support
    let autoplayTimer = null;
    let isPaused = false;

    function startAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 5000);
    }

    function pauseAutoplay() {
      isPaused = true;
    }

    function resumeAutoplay() {
      isPaused = false;
    }

    trustCarouselViewport.addEventListener('mouseenter', pauseAutoplay);
    trustCarouselViewport.addEventListener('mouseleave', resumeAutoplay);
    trustCarouselViewport.addEventListener('focusin', pauseAutoplay);
    trustCarouselViewport.addEventListener('focusout', resumeAutoplay);

    // Navigation
    if (trustCarouselPrev) {
      trustCarouselPrev.addEventListener('click', () => {
        prevSlide();
      });
      trustCarouselPrev.addEventListener('focusin', pauseAutoplay);
      trustCarouselPrev.addEventListener('focusout', resumeAutoplay);
    }

    if (trustCarouselNext) {
      trustCarouselNext.addEventListener('click', () => {
        nextSlide();
      });
      trustCarouselNext.addEventListener('focusin', pauseAutoplay);
      trustCarouselNext.addEventListener('focusout', resumeAutoplay);
    }

    // Initialize
    updateCoverflow();
    startAutoplay();

    // Recalculate on resize
    window.addEventListener('resize', () => {
      updateCoverflow();
    });
  }

  // 11.7 Vision & Mission Scroll-Triggered Stagger Animation
  const vmContainer = document.querySelector('.vision-mission-container');
  if (vmContainer) {
    const visionContent = vmContainer.querySelector('.vision-content');
    const missionItems = vmContainer.querySelectorAll('.mission-item');
    let vmAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !vmAnimated) {
          vmAnimated = true;
          
          // Animate Vision content (fade in from left)
          if (visionContent) {
            visionContent.classList.add('visible');
          }
          
          // Stagger Mission items (fade in & slide up, ~80ms apart)
          missionItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('item-visible');
            }, index * 80);
          });
        }
      });
    }, { threshold: 0.15 });

    observer.observe(vmContainer);
  }

  // 12. Interactive Cursor Spotlight Tracking & 3D Tilt for Executive Profile Card
  const spotlightMasterCard = document.querySelector('.executive-profile-card.spotlight-card');
  const tiltPortraitCard = document.querySelector('.executive-portrait-col.tilt-3d-card');
  const spotlightSubcards = document.querySelectorAll('.spotlight-subcard');

  if (spotlightMasterCard) {
    spotlightMasterCard.addEventListener('pointermove', (e) => {
      const rect = spotlightMasterCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightMasterCard.style.setProperty('--mouse-x', `${x}px`);
      spotlightMasterCard.style.setProperty('--mouse-y', `${y}px`);

      spotlightSubcards.forEach((sub) => {
        const subRect = sub.getBoundingClientRect();
        const subX = e.clientX - subRect.left;
        const subY = e.clientY - subRect.top;
        sub.style.setProperty('--sub-x', `${subX}px`);
        sub.style.setProperty('--sub-y', `${subY}px`);
      });
    });
  }

  if (tiltPortraitCard) {
    tiltPortraitCard.addEventListener('pointermove', (e) => {
      const rect = tiltPortraitCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      tiltPortraitCard.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    tiltPortraitCard.addEventListener('pointerleave', () => {
      tiltPortraitCard.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  }

  // 13. Interactive Cursor Spotlight Tracking & 3D Tilt for About Hero Showcase
  const aboutHeroCard = document.querySelector('.about-hero-showcase.hero-spotlight-card');
  const tiltBuildingCard = document.querySelector('.about-building-image-wrap.tilt-building-card');

  if (aboutHeroCard) {
    aboutHeroCard.addEventListener('pointermove', (e) => {
      const rect = aboutHeroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      aboutHeroCard.style.setProperty('--hero-x', `${x}px`);
      aboutHeroCard.style.setProperty('--hero-y', `${y}px`);
    });
  }

  if (tiltBuildingCard) {
    tiltBuildingCard.addEventListener('pointermove', (e) => {
      const rect = tiltBuildingCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      tiltBuildingCard.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    tiltBuildingCard.addEventListener('pointerleave', () => {
      tiltBuildingCard.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  }

  // ==========================================================================
  // 14. Specialty Page Motion & Interactive Animations System
  // ==========================================================================
  function initSpecialtyPageAnimations() {
    const specialtyPage = document.querySelector('.specialty-editorial-page');
    if (!specialtyPage) return;

    // 14.1 Hero Graphic Scroll Parallax Effect
    const heroImageWrap = specialtyPage.querySelector('.editorial-hero-image-wrap');
    if (heroImageWrap) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < 900) {
              heroImageWrap.style.transform = `translateY(${scrollY * 0.12}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    // 14.2 Scroll Reveal Animations for Major Sections
    const majorSections = specialtyPage.querySelectorAll(
      '.editorial-intro-section, .editorial-problems-section, .editorial-treatments-section, .editorial-journey-section, .editorial-specialist-section, .editorial-facilities-section, .editorial-recovery-section, .editorial-final-cta, .editorial-related-nav'
    );

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    majorSections.forEach(section => {
      section.classList.add('specialty-scroll-reveal');
      sectionObserver.observe(section);
    });

    // 14.3 Staggered Grid Reveals (Treatment Blocks, Care Journey Steps, Symptom List)
    const staggerGroups = [
      { container: '.treatment-blocks-stack', items: '.treatment-block-row' },
      { container: '.journey-timeline-grid', items: '.journey-step-item' },
      { container: '.patient-problem-list', items: '.patient-problem-item' },
      { container: '.editorial-facilities-grid', items: '.facility-editorial-card' }
    ];

    staggerGroups.forEach(group => {
      const containers = specialtyPage.querySelectorAll(group.container);
      containers.forEach(container => {
        const items = container.querySelectorAll(group.items);
        items.forEach(item => item.classList.add('stagger-item'));

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('is-revealed');
                }, index * 90); // 90ms stagger delay
              });
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });

        observer.observe(container);
      });
    });

    // 14.4 "Your Care Journey" Scroll-Linked Progress Tracker
    const journeySection = specialtyPage.querySelector('.editorial-journey-section');
    const journeyGrid = specialtyPage.querySelector('.journey-timeline-grid');
    const stepItems = specialtyPage.querySelectorAll('.journey-step-item');

    if (journeySection && journeyGrid && stepItems.length > 0) {
      let journeyTicking = false;

      function updateJourneyProgress() {
        const rect = journeySection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress ratio (0 to 1) as section scrolls through viewport
        const startPoint = windowHeight * 0.8;
        const totalDist = rect.height + windowHeight * 0.4;
        const currentPos = startPoint - rect.top;

        let progress = Math.max(0, Math.min(1, currentPos / totalDist));
        journeyGrid.style.setProperty('--journey-line-progress', progress.toFixed(3));
      }

      window.addEventListener('scroll', () => {
        if (!journeyTicking) {
          window.requestAnimationFrame(() => {
            updateJourneyProgress();
            journeyTicking = false;
          });
          journeyTicking = true;
        }
      }, { passive: true });

      updateJourneyProgress();
    }

    // 14.5 Stat Counter Count-Up Animations on Specialty Pages
    const statElements = specialtyPage.querySelectorAll(
      '.specialist-pill-badge, .specialist-qual-item span, .treatment-num-pill, .stat-value, .stat-number'
    );

    statElements.forEach(el => {
      const text = el.innerText.trim();
      const match = text.match(/([\d,]+)(\+?.*)$/);
      if (match && !el.dataset.statAnimated) {
        const rawNum = match[1].replace(/,/g, '');
        const targetVal = parseInt(rawNum, 10);

        if (!isNaN(targetVal) && targetVal > 0) {
          const suffix = match[2] || '';
          const prefixIndex = text.indexOf(match[1]);
          const prefix = prefixIndex > 0 ? text.substring(0, prefixIndex) : '';

          const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                el.dataset.statAnimated = 'true';
                const duration = 1200; // 1.2s count up
                const startTime = performance.now();

                function countStep(now) {
                  const elapsed = now - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  // Ease-out cubic curve
                  const ease = 1 - Math.pow(1 - progress, 3);
                  const currentVal = Math.floor(ease * targetVal);

                  el.innerText = prefix + currentVal.toLocaleString('en-IN') + suffix;

                  if (progress < 1) {
                    requestAnimationFrame(countStep);
                  } else {
                    el.innerText = prefix + targetVal.toLocaleString('en-IN') + suffix;
                  }
                }

                requestAnimationFrame(countStep);
                obs.unobserve(entry.target);
              }
            });
          }, { threshold: 0.15 });

          observer.observe(el);
        }
      }
    });

    // 14.6 Bottom Specialty Pills Touch / Drag Scroll Support
    const pillsNavContainer = specialtyPage.querySelector('.editorial-related-nav .related-nav-links');
    if (pillsNavContainer) {
      let isDraggingPills = false;
      let startXPos;
      let initialScrollLeft;

      pillsNavContainer.addEventListener('mousedown', (e) => {
        isDraggingPills = true;
        startXPos = e.pageX - pillsNavContainer.offsetLeft;
        initialScrollLeft = pillsNavContainer.scrollLeft;
      });

      pillsNavContainer.addEventListener('mouseleave', () => { isDraggingPills = false; });
      pillsNavContainer.addEventListener('mouseup', () => { isDraggingPills = false; });

      pillsNavContainer.addEventListener('mousemove', (e) => {
        if (!isDraggingPills) return;
        e.preventDefault();
        const x = e.pageX - pillsNavContainer.offsetLeft;
        const scrollDistance = (x - startXPos) * 2;
        pillsNavContainer.scrollLeft = initialScrollLeft - scrollDistance;
      });
    }
  }

  initSpecialtyPageAnimations();

  // ==========================================================================
  // 15. Facilities Page Motion, Scroll Reveal & In-Page Sticky Nav System
  // ==========================================================================
  function initFacilitiesPage() {
    const facilitiesMain = document.querySelector('.facilities-editorial-main, .facilities-sections-stack');
    if (!facilitiesMain) return;

    // Scroll Reveal for Facilities Hero and Editorial Chapters
    const revealElements = document.querySelectorAll('.specialty-scroll-reveal, .fac-chapter-section, .fac-editorial-hero, .fac-environment-section, .fac-precision-details-section, .fac-difference-section, .fac-atmospheric-ending');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    revealElements.forEach(el => {
      el.classList.add('specialty-scroll-reveal');
      revealObserver.observe(el);
    });

    // Staggered reveals for Specs and Feature Items
    const staggerItems = document.querySelectorAll('.fac-spec-item, .fac-precision-item, .fac-editorial-spec-block, .fac-diagnostic-detail-item, .fac-recovery-feature, .fac-difference-row');
    const staggerObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    staggerItems.forEach((card, index) => {
      card.classList.add('stagger-item');
      card.style.transitionDelay = `${(index % 4) * 80}ms`;
      staggerObserver.observe(card);
    });

    // Sticky Navigation Active Link Highlight on Scroll
    const editorialNavLinks = document.querySelectorAll('.fac-editorial-nav-link');
    const chapterSections = document.querySelectorAll('#surgical-care, #critical-care, #inpatient-care, #diagnostics, #recovery');

    if (editorialNavLinks.length > 0 && chapterSections.length > 0) {
      window.addEventListener('scroll', () => {
        let currentId = '';
        const scrollPos = window.scrollY + 250;

        chapterSections.forEach(section => {
          if (scrollPos >= section.offsetTop) {
            currentId = section.getAttribute('id');
          }
        });

        if (currentId) {
          editorialNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }, { passive: true });
    }
  }

  initFacilitiesPage();

  // ==========================================================================
  // 16. About Us Page Motion, Scroll Reveal & 3D Tilt System
  // ==========================================================================
  // ==========================================================================
  // 16. About Us Page Motion, Scroll Reveal & Interactive Animation System
  // ==========================================================================
  function initAboutPageAnimations() {
    const aboutPage = document.querySelector('.editorial-about-page');
    if (!aboutPage) return;

    // 16.1 Scroll Entrance Reveal Observer for About Sections
    const heroSection = aboutPage.querySelector('.about-hero-editorial');
    if (heroSection) {
      heroSection.classList.add('is-revealed');
    }

    const aboutSections = aboutPage.querySelectorAll(
      '.about-reveal-section, .about-hero-editorial, .aceternity-timeline-section, .doctors-section, .about-principles-editorial, .about-location-editorial'
    );
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    aboutSections.forEach(sec => {
      sec.classList.add('about-reveal-section');
      sectionObserver.observe(sec);
    });

    // 16.2 Staggered Cascade Entrance for Elements inside Sections
    const staggerGroups = [
      { container: '.about-hero-editorial-centered', items: '.about-eyebrow-wrapper, .about-hero-editorial-title, .about-hero-story-block, .hero-highlight-pill, .about-hero-actions' },
      { container: '.aceternity-timeline-container', items: '.timeline-entry' },
      { container: '.doctors-flip-grid', items: '.specialist-flip-card' },
      { container: '.location-info-stack', items: '.location-info-group' },
      { container: '.location-destination-layout', items: '.location-editorial-col, .location-map-stage, .location-actions-row' }
    ];

    staggerGroups.forEach(group => {
      const containers = aboutPage.querySelectorAll(group.container);
      containers.forEach(container => {
        const items = container.querySelectorAll(group.items);
        items.forEach(item => item.classList.add('about-stagger-item'));

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('is-revealed');
                }, index * 80);
              });
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });

        observer.observe(container);
      });
    });

    // 16.3 Aceternity Timeline Beam Fill & Year Marker Pulse Animation
    const timelineSection = aboutPage.querySelector('.aceternity-timeline-section') || aboutPage.querySelector('#about-timeline');
    const timelineBeamFill = aboutPage.querySelector('#timelineBeamFill') || aboutPage.querySelector('#timeline-beam-fill');
    
    if (timelineSection && timelineBeamFill) {
      const updateBeam = () => {
        const rect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        const currentScroll = windowHeight - rect.top - 120;
        if (rect.top < windowHeight && rect.bottom > 0) {
          let percentage = (currentScroll / totalHeight) * 100;
          percentage = Math.min(Math.max(percentage, 0), 100);
          timelineBeamFill.style.height = `${percentage}%`;
        }
      };
      window.addEventListener('scroll', updateBeam, { passive: true });
      updateBeam();
    }

    // Timeline Entry Year Marker Active Pulse Observer
    const timelineEntries = aboutPage.querySelectorAll('.timeline-entry');
    if (timelineEntries.length) {
      const entryActiveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
          }
        });
      }, { threshold: 0.3 });

      timelineEntries.forEach(entry => entryActiveObserver.observe(entry));
    }

    // 16.4 Animated Stat Numbers Count-Up Functionality
    const statContainer = aboutPage.querySelector('.decades-stats-row');
    if (statContainer) {
      const statNumbers = statContainer.querySelectorAll('[data-count-target]');
      const statObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
              const target = parseInt(stat.getAttribute('data-count-target'), 10);
              const suffix = stat.getAttribute('data-count-suffix') || '';
              const isComma = stat.getAttribute('data-count-format') === 'comma';
              
              const duration = 1200; // 1.2s duration
              const startTime = performance.now();

              function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Smooth cubic ease out
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeProgress * target);

                stat.textContent = (isComma ? currentVal.toLocaleString('en-US') : currentVal) + suffix;

                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                }
              }

              requestAnimationFrame(updateCounter);
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      statObserver.observe(statContainer);
    }

    // 16.5 Interactive 3D Parallax Tilt for Image Frame & Card Stage
    const tiltCards = aboutPage.querySelectorAll('.about-building-frame, .founder-portrait-stage, .beginning-visual-block, .location-map-stage');
    
    tiltCards.forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 4;
        const rotateY = (x / rect.width) * 4;
        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`;
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
      });
    });

    // 16.6 Orbital Principles Hover Rotation Pause Handler
    const orbitalItems = aboutPage.querySelectorAll('.principles-orbital-item');
    const orbitRotator = aboutPage.querySelector('.principles-orbit-rotator');
    if (orbitalItems.length && orbitRotator) {
      orbitalItems.forEach(nodeItem => {
        nodeItem.addEventListener('mouseenter', () => {
          orbitRotator.classList.add('is-paused');
        });
        nodeItem.addEventListener('mouseleave', () => {
          orbitRotator.classList.remove('is-paused');
        });
      });
    }
  }

  initAboutPageAnimations();

  // 17. WebGL Silk Shader Background Initializer for Hero Section
  function initHeroShaderBackground() {
    const canvas = document.getElementById('heroShaderCanvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) return;

    const VERT = `attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }`;

    const FRAG = `#ifdef GL_FRAGMENT_PRECISION_HIGH
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
    }`;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram();
    const vertexShader = compile(gl.VERTEX_SHADER, VERT);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, FRAG);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    
    const loc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uni = {
      colors: gl.getUniformLocation(program, 'u_colors'),
      scene: gl.getUniformLocation(program, 'u_scene'),
      shape: gl.getUniformLocation(program, 'u_shape'),
      surface: gl.getUniformLocation(program, 'u_surface'),
      finish: gl.getUniformLocation(program, 'u_finish'),
      transform: gl.getUniformLocation(program, 'u_transform'),
      space: gl.getUniformLocation(program, 'u_space'),
      cursor: gl.getUniformLocation(program, 'u_cursor'),
    };

    // Exact Hospital Brand Colors: #2563EB (Medical Blue), #06B6D4 (Cyan), #1E40AF (Royal Blue), #EFF6FF (Light Blue)
    const colors = [
      0.145098, 0.388235, 0.921569, // #2563EB Primary Medical Blue
      0.023529, 0.713725, 0.831372, // #06B6D4 Cyan Accent
      0.117647, 0.250980, 0.686275, // #1E40AF Dark Royal Blue
      0.937255, 0.964706, 1.000000, // #EFF6FF Light Blue Tint
      0.937255, 0.964706, 1.000000,
      0.937255, 0.964706, 1.000000,
      0.937255, 0.964706, 1.000000,
      0.937255, 0.964706, 1.000000
    ];

    gl.uniform3fv(uni.colors, new Float32Array(colors));
    gl.uniform4f(uni.shape, 1.5, 0.55, 0.5, 0.0);
    gl.uniform4f(uni.surface, 2.4, 1.005, 0.5, 0.85);
    gl.uniform4f(uni.finish, 0.0, 0.4, 0.04, 0.0); // Hue set to 0.0 to prevent color rotation
    gl.uniform4f(uni.transform, 1.0, 0.0, 0.4, 0.0);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let cursorPresence = 0, targetPresence = 0;

    window.addEventListener('pointermove', (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetPresence = 1;
      } else {
        targetPresence = 0;
      }
    }, { passive: true });

    const resize = () => {
      const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    const start = performance.now();
    function render(now) {
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;
      cursorPresence += (targetPresence - cursorPresence) * 0.1;

      gl.uniform4f(uni.scene, canvas.width, canvas.height, ((now - start) / 1000) * 0.176, 4.0);
      gl.uniform4f(uni.space, 0.0, 0.0, mouseX, mouseY);
      gl.uniform4f(uni.cursor, cursorPresence, 1.0, 1.0, 0.8);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  initHeroShaderBackground();

  // ==========================================================================
  // Global IntersectionObserver Scroll Reveal Animations
  // ==========================================================================
  function initScrollRevealObserver() {
    const autoRevealSelectors = [
      '.section-header-center',
      '.fac-webflow-header',
      '.fac-webflow-card',
      '.specialty-card',
      '.facility-card',
      '.stat-card-item',
      '.building-stat-chip',
      '.testimonial-card-item',
      '.about-chapter-card',
      '.fac-spec-card',
      '.specialist-card-item',
      '.doctor-card',
      '.fac-editorial-hero'
    ];

    autoRevealSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('reveal-on-scroll') && 
            !el.classList.contains('reveal-fade-left') && 
            !el.classList.contains('reveal-fade-right') &&
            !el.classList.contains('reveal-scale')) {
          el.classList.add('reveal-on-scroll');
        }
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale');
    elementsToReveal.forEach(el => revealObserver.observe(el));
  }

  function initStatProgressBars() {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fillBars = entry.target.querySelectorAll('.stat-bar-fill');
          fillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || '100%';
            bar.style.width = targetWidth;
          });
        }
      });
    }, { threshold: 0.2 });

    const progressContainer = document.querySelector('.creative-facilities-left');
    if (progressContainer) barObserver.observe(progressContainer);
  }

  initScrollRevealObserver();
  initStatProgressBars();
});





