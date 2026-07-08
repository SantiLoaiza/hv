/*=============== DATA (bilingual ES / EN) ===============*/
const DATA = {
  skills: [
    {
      icon: "ri-code-s-slash-line",
      title: { es: "Lenguajes", en: "Languages" },
      items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "NoSQL"],
    },
    {
      icon: "ri-stack-line",
      title: { es: "Frameworks y plataformas", en: "Frameworks & platforms" },
      items: ["React", "Node.js", "Odoo", "Automation Anywhere (RPA)", "Docker", "Docker Compose", "Google Cloud", "AWS"],
    },
    {
      icon: "ri-git-branch-line",
      title: { es: "Herramientas", en: "Tools" },
      items: ["Git", "REST APIs", "Web Services", "PostgreSQL", "MongoDB", "SQL Server", "Apache JMeter"],
    },
    {
      icon: "ri-flow-chart",
      title: { es: "Metodologías", en: "Methodologies" },
      items: ["Scrum", "Análisis funcional / Functional analysis", "Arquitectura de software", "Automatización de pruebas", "MVC", "Diseño responsive"],
    },
  ],

  experience: [
    {
      role: { es: "Desarrollador FullStack", en: "FullStack Developer" },
      company: "IdeasCol · Ingeniero de Software",
      date: { es: "Ene 2025 — Actual", en: "Jan 2025 — Present" },
      bullets: {
        es: [
          "Desarrollo de aplicaciones web con Python, Node.js, TypeScript, React, JavaScript y MongoDB.",
          "Creación y consumo de APIs, optimización de procesos y automatización de tareas.",
          "Integración de funcionalidades basadas en IA para mejorar productos y experiencias de usuario.",
        ],
        en: [
          "Web application development with Python, Node.js, TypeScript, React, JavaScript and MongoDB.",
          "Building and consuming APIs, process optimization and task automation.",
          "Integration of AI-powered features to improve products and user experiences.",
        ],
      },
    },
    {
      role: { es: "Desarrollador Odoo", en: "Odoo Developer" },
      company: "Vz Tech",
      date: { es: "Ago 2024 — Dic 2024", en: "Aug 2024 — Dec 2024" },
      bullets: {
        es: [
          "Desarrollo y diseño de soluciones con Python y XML en Odoo (MVC), incluyendo migraciones entre versiones.",
          "Configuración y montaje de contenedores con Docker en entornos Linux.",
          "Consumo de servicios web / APIs (OpenAI) y AWS.",
          "Administración y manejo de datos en bases de datos PostgreSQL.",
        ],
        en: [
          "Development and design of solutions with Python and XML in Odoo (MVC), including cross-version migrations.",
          "Setup and deployment of Docker containers in Linux environments.",
          "Consumption of web services / APIs (OpenAI) and AWS.",
          "Administration and data handling in PostgreSQL databases.",
        ],
      },
    },
    {
      role: { es: "Desarrollador RPA", en: "RPA Developer" },
      company: "KPMG",
      date: { es: "Sep 2022 — Sep 2023", en: "Sep 2022 — Sep 2023" },
      bullets: {
        es: [
          "Creación de proyectos de RPA enfocados en automatizar tareas manuales del área funcional del cliente.",
          "Automatización de procesos manuales, reduciendo tiempos de ejecución.",
          "Arquitectura de documentación técnica y apoyo funcional al cliente.",
          "Gestión de proyectos con metodologías ágiles (Scrum).",
        ],
        en: [
          "Creation of RPA projects focused on automating manual tasks from the client's functional area.",
          "Automation of manual processes, reducing execution times.",
          "Technical documentation architecture and functional client support.",
          "Project management with agile methodologies (Scrum).",
        ],
      },
    },
    {
      role: { es: "Analista Funcional", en: "Functional Analyst" },
      company: "Transfiriendo",
      date: { es: "Mar 2020 — Jun 2022", en: "Mar 2020 — Jun 2022" },
      bullets: {
        es: [
          "Administración y optimización de bases de datos SQL Server, generando reportes para toma de decisiones.",
          "Soporte técnico de segundo nivel, ejecución de consultas y análisis de capacidades.",
          "Generación de documentación técnica para proyectos.",
          "Pruebas de carga y rendimiento con Apache JMeter para validar procesos automáticos.",
        ],
        en: [
          "Administration and optimization of SQL Server databases, generating reports for decision-making.",
          "Second-level technical support, query execution and capacity analysis.",
          "Technical documentation for projects.",
          "Load and performance testing with Apache JMeter to validate automated processes.",
        ],
      },
    },
    {
      role: { es: "Desarrollador Junior", en: "Junior Developer" },
      company: "YAXA",
      date: { es: "Nov 2018 — May 2019", en: "Nov 2018 — May 2019" },
      bullets: {
        es: [
          "Desarrollo de aplicaciones con Python, JavaScript y entornos Linux.",
          "Scraping con Python para extracción y análisis de datos de e-commerce, con reportes y automatización de pruebas.",
          "Administración de bases de datos SQL Server y mantenimiento del sitio web corporativo.",
        ],
        en: [
          "Application development with Python, JavaScript and Linux environments.",
          "Python scraping for e-commerce data extraction and analysis, with reporting and test automation.",
          "SQL Server database administration and maintenance of the corporate website.",
        ],
      },
    },
  ],

  education: [
    {
      title: { es: "Tecnólogo en Análisis y Desarrollo de Sistemas", en: "Technologist in Systems Analysis & Development" },
      meta: "SENA · 2020 — 2024",
    },
    {
      title: { es: "Técnico en Programación de Software", en: "Technician in Software Programming" },
      meta: "SENA · 2018 — 2020",
    },
  ],
};

/*=============== I18N (static labels) ===============*/
const I18N = {
  es: {
    nav_home: "Inicio", nav_about: "Sobre mí", nav_skills: "Skills", nav_experience: "Experiencia", nav_education: "Educación", nav_contact: "Contacto",
    home_greeting: "Hola, soy",
    home_profession: "Desarrollador de Software FullStack",
    home_description: "Construyo soluciones web y automatizaciones end-to-end. Mi background como analista funcional me permite entender el negocio y traducirlo en software que resuelve problemas reales.",
    home_cta_contact: "Contáctame", home_cta_work: "Ver experiencia",
    home_available: "Disponible para proyectos",
    about_subtitle: "Quién soy", about_title: "Sobre mí",
    about_p1: "Soy desarrollador de software con experiencia previa como analista funcional, lo que me permite comprender en profundidad las necesidades del usuario y traducirlas en soluciones técnicas efectivas.",
    about_p2: "Manejo tecnologías como Python, JavaScript, TypeScript, React, Node.js, Odoo (MVC), Docker, AWS y SQL. Soy apasionado por aprender y aportar en proyectos innovadores, con capacidad para trabajar en equipo bajo metodologías ágiles.",
    about_stat_years: "Experiencia en tech", about_stat_roles: "Años en desarrollo", about_stat_lang: "Idiomas",
    skills_subtitle: "Lo que uso", skills_title: "Habilidades técnicas",
    exp_subtitle: "Mi trayectoria", exp_title: "Experiencia profesional",
    edu_subtitle: "Formación", edu_title: "Educación e idiomas",
    edu_studies: "Estudios", edu_languages: "Idiomas",
    edu_degree_doc: "Título profesional", edu_cert_doc: "Certificado",
    lang_es: "Español", lang_es_level: "Nativo", lang_en: "Inglés", lang_en_level: "Intermedio (B1)",
    contact_subtitle: "Hablemos", contact_title: "Contacto",
    contact_lead: "¿Tienes un proyecto o una oportunidad? Escríbeme, estaré encantado de conversar.",
    contact_phone: "Teléfono",
    contact_on_request: "Disponible bajo solicitud",
    footer_text: "Hecho con código y matcha.",
  },
  en: {
    nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_experience: "Experience", nav_education: "Education", nav_contact: "Contact",
    home_greeting: "Hi, I'm",
    home_profession: "FullStack Software Developer",
    home_description: "I build end-to-end web solutions and automations. My background as a functional analyst lets me understand the business and turn it into software that solves real problems.",
    home_cta_contact: "Contact me", home_cta_work: "View experience",
    home_available: "Available for projects",
    about_subtitle: "Who I am", about_title: "About me",
    about_p1: "I'm a software developer with prior experience as a functional analyst, which lets me deeply understand user needs and translate them into effective technical solutions.",
    about_p2: "I work with technologies like Python, JavaScript, TypeScript, React, Node.js, Odoo (MVC), Docker, AWS and SQL. I'm passionate about learning and contributing to innovative projects, and comfortable working in teams under agile methodologies.",
    about_stat_years: "Experience in tech", about_stat_roles: "Years in development", about_stat_lang: "Languages",
    skills_subtitle: "What I use", skills_title: "Technical skills",
    exp_subtitle: "My journey", exp_title: "Professional experience",
    edu_subtitle: "Background", edu_title: "Education & languages",
    edu_studies: "Studies", edu_languages: "Languages",
    edu_degree_doc: "Professional degree", edu_cert_doc: "Certificate",
    lang_es: "Spanish", lang_es_level: "Native", lang_en: "English", lang_en_level: "Intermediate (B1)",
    contact_subtitle: "Let's talk", contact_title: "Contact",
    contact_lead: "Got a project or an opportunity? Drop me a line — I'd be happy to chat.",
    contact_phone: "Phone",
    contact_on_request: "Available on request",
    footer_text: "Built with code and matcha.",
  },
};

/*=============== STATE ===============*/
let currentLang = localStorage.getItem("lang") || (navigator.language || "es").slice(0, 2);
if (currentLang !== "en") currentLang = "es";

/*=============== RENDER ===============*/
function renderSkills(lang) {
  const el = document.getElementById("skills-container");
  el.innerHTML = DATA.skills.map((g) => `
    <div class="skills__group reveal">
      <h3 class="skills__group-title"><i class="${g.icon}"></i> ${g.title[lang]}</h3>
      <div class="skills__chips">
        ${g.items.map((i) => `<span class="chip">${i}</span>`).join("")}
      </div>
    </div>`).join("");
}

function renderExperience(lang) {
  const el = document.getElementById("timeline");
  el.innerHTML = DATA.experience.map((e) => `
    <div class="tl__item reveal">
      <span class="tl__dot"></span>
      <div class="tl__card">
        <div class="tl__top">
          <h3 class="tl__role">${e.role[lang]}</h3>
          <span class="tl__date">${e.date[lang]}</span>
        </div>
        <span class="tl__company"><i class="ri-building-line"></i> ${e.company}</span>
        <ul class="tl__list">
          ${e.bullets[lang].map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>`).join("");
}

function renderEducation(lang) {
  const el = document.getElementById("education-list");
  el.innerHTML = DATA.education.map((e) => `
    <div class="edu__item">
      <p class="edu__title">${e.title[lang]}</p>
      <span class="edu__meta">${e.meta}</span>
    </div>`).join("");
}

function applyI18n(lang) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (I18N[lang][key] !== undefined) node.textContent = I18N[lang][key];
  });
  document.documentElement.lang = lang;
  document.getElementById("lang-label").textContent = lang.toUpperCase();
}

function render(lang) {
  applyI18n(lang);
  renderSkills(lang);
  renderExperience(lang);
  renderEducation(lang);
  observeReveals();
}

/*=============== LANGUAGE TOGGLE ===============*/
document.getElementById("lang-button").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  render(currentLang);
});

/*=============== THEME TOGGLE ===============*/
const themeButton = document.getElementById("theme-button");
const themeIcon = themeButton.querySelector("i");
const savedTheme = localStorage.getItem("theme")
  || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.className = theme === "dark" ? "ri-sun-line" : "ri-moon-line";
}
applyTheme(savedTheme);

themeButton.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

/*=============== MOBILE NAV ===============*/
const navMenu = document.getElementById("nav-menu");
document.getElementById("nav-toggle").addEventListener("click", () => navMenu.classList.add("show-menu"));
document.getElementById("nav-close").addEventListener("click", () => navMenu.classList.remove("show-menu"));
document.querySelectorAll(".nav__link").forEach((l) =>
  l.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);

/*=============== SCROLL: active link + scroll up ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if (!link) return;
    if (y >= top && y < top + height) link.classList.add("active-link");
    else link.classList.remove("active-link");
  });

  scrollUp.classList.toggle("show-scroll", y >= 350);
});

/*=============== SCROLL REVEAL ===============*/
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/*=============== INIT ===============*/
document.getElementById("year").textContent = new Date().getFullYear();
// mark static sections for reveal
document.querySelectorAll(".about__container, .about__stat, .contact__card, .education__block, .section__title, .section__subtitle")
  .forEach((el) => el.classList.add("reveal"));
render(currentLang);
