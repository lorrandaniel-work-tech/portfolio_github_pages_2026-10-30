(() => {
  "use strict";

  const language = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "pt";
  const copy = {
    pt: {
      title: "Currículo em português | Lorran Daniel",
      nav: "Navegação principal",
      selectLanguage: "Selecionar idioma",
      viewerLabel: "Visualização do currículo",
      frameTitle: "PDF - Currículo de Lorran Daniel em português",
      previewAlt: "Prévia do currículo de Lorran Daniel em português",
      languageName: "Português",
      eyebrow: "Currículo profissional",
      description: "Experiência, competências técnicas, projetos, credenciais e idiomas reunidos em um currículo de uma página.",
      languageLabel: "Idioma",
      formatLabel: "Formato",
      format: "PDF · A4 · 1 página",
      focusLabel: "Foco profissional",
      focus: "Infraestrutura, Cloud e Cybersecurity",
      download: "Baixar currículo",
      openOriginal: "Abrir PDF original",
      back: "Voltar para o portfólio",
      backSection: "Voltar aos currículos",
      contentsKicker: "Conteúdo",
      contentsTitle: "O que você encontra",
      experience: "Experiência profissional em infraestrutura e suporte de TI.",
      skills: "Competências técnicas em cloud, automação, observabilidade e segurança.",
      projects: "Projetos técnicos, credenciais e idiomas.",
      resumeLabel: "Currículo",
      previewTitle: "Visualização do PDF",
      openTab: "Abrir em nova aba",
      mobileNote: 'A visualização direta do PDF pode não funcionar bem em telas menores. Use o botão "Abrir em nova aba" acima para visualizar o currículo com mais conforto.',
    },
    en: {
      title: "English resume | Lorran Daniel",
      nav: "Primary navigation",
      selectLanguage: "Select language",
      viewerLabel: "Resume preview",
      frameTitle: "PDF - Lorran Daniel's resume in English",
      previewAlt: "Preview of Lorran Daniel's resume in English",
      languageName: "English",
      eyebrow: "Professional resume",
      description: "Experience, technical skills, projects, credentials, and languages brought together in a one-page resume.",
      languageLabel: "Language",
      formatLabel: "Format",
      format: "PDF · A4 · 1 page",
      focusLabel: "Professional focus",
      focus: "Infrastructure, Cloud, and Cybersecurity",
      download: "Download resume",
      openOriginal: "Open original PDF",
      back: "Back to portfolio",
      backSection: "Back to resumes",
      contentsKicker: "Contents",
      contentsTitle: "What you will find",
      experience: "Professional experience in infrastructure and IT support.",
      skills: "Technical skills in cloud, automation, observability, and security.",
      projects: "Technical projects, credentials, and languages.",
      resumeLabel: "Resume",
      previewTitle: "PDF preview",
      openTab: "Open in new tab",
      mobileNote: 'Direct PDF preview may not work well on smaller screens. Use the "Open in new tab" button above for a more comfortable resume view.',
    },
  }[language];

  const filename = language === "en" ? "Lorran_Daniel_Resume_EN.pdf" : "Lorran_Daniel_Curriculo_PT.pdf";
  const pdf = `curriculos/${filename}`;
  document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector("nav").setAttribute("aria-label", copy.nav);
  document.querySelector(".pdf-panel").setAttribute("aria-label", copy.viewerLabel);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.getElementById("resumeLanguage").textContent = copy.languageName;
  document.querySelectorAll("[data-pdf-link]").forEach((link) => {
    link.href = pdf;
  });
  const download = document.querySelector("[data-download]");
  download.href = pdf;
  download.download = filename;

  const frame = document.getElementById("resumePdf");
  if (frame.getAttribute("data") !== pdf) {
    frame.setAttribute("data", pdf);
  }
  frame.title = copy.frameTitle;
  const preview = document.getElementById("resumePreview");
  preview.src = pdf.replace(/\.pdf$/, ".png");
  preview.alt = copy.previewAlt;

  const backUrl = `index.html?lang=${language}#curriculo`;
  document.querySelectorAll("[data-portfolio-link]").forEach((link) => {
    link.href = backUrl;
  });

  const select = document.getElementById("languageSelect");
  select.value = language;
  select.setAttribute("aria-label", copy.selectLanguage);
  select.addEventListener("change", () => {
    const target = new URL(window.location.href);
    target.searchParams.set("lang", select.value === "en" ? "en" : "pt");
    window.location.href = target.href;
  });
})();
