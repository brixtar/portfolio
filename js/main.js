/* ==========================================================================
   PORTFOLIO SCRIPTS — LEONARDO MIGUEL BRIZUELA
   Lógica interactiva: Filtros, Modal, Efecto Máquina de Escribir, Copiado, i18n
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Elementos del DOM
  const navbar = document.querySelector(".site-header");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const langSwitchBtn = document.getElementById("lang-switch");
  const typingRoleEl = document.getElementById("typing-role");
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  // Modal de detalles
  const modalOverlay = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBannerImg = document.getElementById("modal-banner-img");
  const modalTitle = document.getElementById("modal-title");
  const modalTags = document.getElementById("modal-tags");
  const modalActions = document.getElementById("modal-actions");
  const modalBodyContent = document.getElementById("modal-body-content");

  // Toast
  const toastMsg = document.getElementById("toast-msg");
  const toastText = document.getElementById("toast-text");

  // Estado
  let currentLang = "es";
  let currentCategory = "all";
  let currentOpenProjectId = null;

  // ==========================================================================
  // NAVBAR SCROLL & MENU MOBILE
  // ==========================================================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });

  // ==========================================================================
  // EFECTO MÁQUINA DE ESCRIBIR EN EL HERO
  // ==========================================================================
  const rolesES = [
    "Analista Universitario de Sistemas (UNLaR)",
    "Desarrollador de Software & Java",
    "Producción de Streaming & OBS Studio",
    "Perito Informático Forense Certificado",
    "Diseño con Inkscape & Balance de Audio",
    "Soporte de Campo, Hardware & Redes"
  ];

  const rolesEN = [
    "University Systems Analyst (UNLaR)",
    "Software Engineer & Java Specialist",
    "Live Broadcast & OBS Studio Specialist",
    "Certified Digital Forensic Analyst",
    "Vector Design (Inkscape) & Audio",
    "IT Field Support, Hardware & Networks"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 70;

  function typeEffect() {
    const list = currentLang === "es" ? rolesES : rolesEN;
    const currentText = list[roleIndex % list.length];

    if (isDeleting) {
      typingRoleEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 35;
    } else {
      typingRoleEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 65;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingDelay = 2200; // Pausa al completar la frase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % list.length;
      typingDelay = 400; // Pausa antes de empezar la siguiente frase
    }

    setTimeout(typeEffect, typingDelay);
  }

  typeEffect();

  // ==========================================================================
  // RENDERIZADO DE PROYECTOS Y FILTRADO
  // ==========================================================================
  function renderProjects(category = "all") {
    projectsGrid.innerHTML = "";
    const filtered = category === "all" 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === category);

    const dict = I18N[currentLang] || I18N.es;

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.dataset.id = project.id;

      const title = typeof project.title === "object" ? project.title[currentLang] : project.title;
      const shortDesc = typeof project.shortDesc === "object" ? project.shortDesc[currentLang] : project.shortDesc;

      card.innerHTML = `
        <div class="project-thumb-wrapper">
          <img src="${project.image}" alt="${title}" class="project-thumb" loading="lazy">
          <span class="project-badge-cat">${project.category.toUpperCase()}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${shortDesc}</p>
          <div class="project-tags">
            ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <div class="project-card-footer">
            <button class="btn-project-details" data-id="${project.id}">
              <span>${dict.btnViewDetails}</span>
              <span>→</span>
            </button>
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-icon" title="${dict.btnGithubRepo}" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            ` : ''}
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Vincular clicks para abrir el modal
    document.querySelectorAll(".btn-project-details").forEach(btn => {
      btn.addEventListener("click", () => {
        openProjectModal(btn.dataset.id);
      });
    });
  }

  // Filtrado al hacer clic en pestañas
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.filter;
      renderProjects(currentCategory);
    });
  });

  renderProjects("all");

  // ==========================================================================
  // MODAL DE DETALLES
  // ==========================================================================
  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    currentOpenProjectId = projectId;
    const dict = I18N[currentLang] || I18N.es;
    const title = typeof project.title === "object" ? project.title[currentLang] : project.title;
    const fullDesc = typeof project.fullDesc === "object" ? project.fullDesc[currentLang] : project.fullDesc;

    modalBannerImg.src = project.image;
    modalBannerImg.alt = title;
    modalTitle.textContent = title;
    modalTags.innerHTML = project.tags.map(t => `<span class="tech-tag-mini">${t}</span>`).join("");
    
    // Generar botones de acción en el modal
    if (modalActions) {
      let actionsHtml = "";
      if (project.githubUrl) {
        actionsHtml += `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-modal-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>${dict.btnGithubRepo}</span>
          </a>
        `;
      }
      if (project.demoUrl) {
        actionsHtml += `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-modal-demo">
            <span>🚀 ${dict.btnLiveDemo}</span>
          </a>
        `;
      }
      const rawWaMsg = typeof project.whatsappMsg === "object" ? project.whatsappMsg[currentLang] : (project.whatsappMsg || `Hola Leonardo, te contacto por el proyecto ${title}`);
      const waMsg = encodeURIComponent(rawWaMsg);
      actionsHtml += `
        <a href="https://wa.me/5493826449578?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-modal-wa">
          <span>💬 ${dict.btnConsultWa}</span>
        </a>
      `;
      modalActions.innerHTML = actionsHtml;
    }

    modalBodyContent.innerHTML = fullDesc;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    currentOpenProjectId = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // ==========================================================================
  // TOAST NOTIFICATIONS & COPIADO RÁPIDO
  // ==========================================================================
  function showToast(message) {
    toastText.textContent = message;
    toastMsg.classList.add("show");
    setTimeout(() => {
      toastMsg.classList.remove("show");
    }, 3200);
  }

  document.querySelectorAll(".btn-copy").forEach(btn => {
    btn.addEventListener("click", () => {
      const copyVal = btn.dataset.copy;
      if (!copyVal) return;
      navigator.clipboard.writeText(copyVal).then(() => {
        const msg = currentLang === "es" 
          ? `¡Copiado al portapapeles: ${copyVal}!`
          : `Copied to clipboard: ${copyVal}!`;
        showToast(msg);
      }).catch(() => {
        showToast(copyVal);
      });
    });
  });

  // ==========================================================================
  // CAMBIO DE IDIOMA (ES / EN) — 100% DE LA PÁGINA
  // ==========================================================================
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      langSwitchBtn.textContent = currentLang === "es" ? "EN" : "ES";
      updateLanguage(currentLang);
    });
  }

  function updateLanguage(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    // Actualizar elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Actualizar placeholders en formularios
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Re-renderizar proyectos con el nuevo idioma
    renderProjects(currentCategory);

    // Si el modal está abierto, refrescar con el nuevo idioma en tiempo real
    if (currentOpenProjectId) {
      openProjectModal(currentOpenProjectId);
    }
  }

  // ==========================================================================
  // FORMULARIO DE CONTACTO (INTERACTIVO)
  // ==========================================================================
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const message = document.getElementById("form-message").value;

      const subject = encodeURIComponent(
        currentLang === "es" 
          ? `Contacto desde Portfolio - ${name}` 
          : `Portfolio Inquiry - ${name}`
      );
      const body = encodeURIComponent(
        currentLang === "es"
          ? `Hola Leonardo,\n\nMi nombre es ${name} (${email}).\n\nMensaje:\n${message}\n\nEnviado desde tu portfolio web.`
          : `Hi Leonardo,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}\n\nSent from your web portfolio.`
      );
      
      const mailtoLink = `mailto:brixtar37@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      showToast(currentLang === "es" ? "Abriendo cliente de correo..." : "Opening email client...");
      contactForm.reset();
    });
  }
});
