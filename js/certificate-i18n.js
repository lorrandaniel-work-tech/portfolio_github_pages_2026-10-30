(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const language = params.get("lang") === "en" ? "en" : "pt";
  const certificateId = params.get("id");
  const labels = {
    "Navegação principal": "Primary navigation",
    "Selecionar idioma": "Select language",
    "Voltar para o portfólio": "Back to portfolio",
    "Voltar para a página anterior": "Back to previous page",
    "Abrir PDF original": "Open original PDF",
    "O que foi aprendido": "What was learned",
    "Resumo do aprendizado": "Learning summary",
    "Visualização do certificado": "Certificate preview",
    "Certificado": "Certificate",
    "Visualização do PDF": "PDF preview",
    "Abrir em nova aba": "Open in new tab",
    "A visualização direta do PDF pode não funcionar bem em telas menores. Use o botão \"Abrir em nova aba\" acima para visualizar o certificado com mais conforto.":
      "Direct PDF preview may not work well on smaller screens. Use the \"Open in new tab\" button above for a more comfortable certificate view.",
    "Emissor": "Issuer",
    "Data": "Date",
    "Carga horária": "Course hours",
    "Número do certificado": "Certificate number",
    "ID do certificado": "Certificate ID",
    "Instrutor": "Instructor",
    "Instrutores": "Instructors",
    "Duração": "Duration",
    "Credencial": "Credential",
    "Código": "Code",
    "Validação": "Verification",
    "Resultado": "Score",
    "Não informada no certificado": "Not stated on the certificate",
    "Não informado no certificado": "Not stated on the certificate",
    "Certificado não encontrado": "Certificate not found",
    "Não encontrei esse certificado.": "This certificate could not be found.",
    "O link pode estar incompleto ou o identificador do certificado não existe nesta página.":
      "The link may be incomplete or the certificate identifier does not exist on this page.",
    "Voltar ao topo": "Back to top",
    "↑ Topo": "↑ Top",
  };

  const certificateTranslations = {
    "aws-ai-practitioner": {
      category: "Cloud & AI",
      description: "Credential covering artificial intelligence fundamentals applied to the AWS ecosystem.",
      learned: [
        "Artificial intelligence fundamentals and key application possibilities in cloud environments.",
        "An introductory view of generative AI, machine learning, and responsible use of AI solutions.",
        "The connection between AWS services, automation, and technical-environment modernization.",
      ],
    },
    "hack-fix-cpps": {
      category: "Cybersecurity",
      description: "Recognition in phishing prevention and defensive practices against social-engineering attacks.",
      learned: [
        "How to identify common phishing signals in suspicious messages, links, and communications.",
        "Prevention and awareness practices that reduce human risk in security operations.",
        "The importance of validation, reporting, and fast response to fraud attempts.",
      ],
    },
    "crowdstrike-falcon-101": {
      category: "EDR & SecOps",
      description: "Essential course on the Falcon platform, focused on operations and endpoint-protection concepts.",
      learned: [
        "Falcon platform foundations and its role in a security operation.",
        "Visibility, endpoint-protection, and event-monitoring concepts.",
        "A basis for using EDR tools in investigation, monitoring, and response workflows.",
      ],
    },
    "hack-fix-ccsc": {
      category: "Cybersecurity",
      description: "Entry-level cybersecurity certification focused on fundamentals and career preparation.",
      learned: [
        "Information security fundamentals and the initial mindset for cybersecurity work.",
        "Threat, risk, best-practice, and digital-environment protection concepts.",
        "Study organization for growth through technical security learning paths.",
      ],
    },
    "crowdstrike-falcon-100": {
      category: "EDR & SecOps",
      description: "Overview of Falcon platform architecture and its security components.",
      learned: [
        "An understanding of the Falcon platform architecture and protection model.",
        "The relationship between telemetry collection, endpoint visibility, and threat response.",
        "A conceptual basis for deeper learning in EDR, XDR, and security operations.",
      ],
    },
    "ef-set-c1": {
      category: "English",
      description: "English proficiency certificate with a C1 Advanced result under the CEFR standard.",
      learned: [
        "Evidence of advanced technical reading ability in English for documentation, logs, and official materials.",
        "A solid listening-comprehension foundation for training, technical videos, and English meetings.",
        "Support for work in cloud, cybersecurity, and infrastructure, where most documentation is in English.",
      ],
    },
    "aws-skill-builder": {
      category: "AWS",
      description: "Certificate of completion for introductory training in AWS Skill Builder.",
      learned: [
        "Initial AWS ecosystem foundations and ways to learn through the Skill Builder platform.",
        "Cloud-service concepts, usage models, and preparation for AWS learning paths.",
        "A foundation for continued learning in cloud architecture, security, and operations.",
      ],
    },
    "az-900-intro": {
      title: "Introduction to Cloud Infrastructure (AZ-900)",
      category: "Microsoft Azure",
      description: "Introductory course on cloud infrastructure and Microsoft Azure fundamentals.",
      learned: [
        "Cloud-computing foundations and the core concepts associated with AZ-900.",
        "Infrastructure, services, cloud models, and Microsoft Azure resource concepts.",
        "A basis for technical discussions on migration, cloud operations, and architecture.",
      ],
    },
    "dp-900-intro": {
      title: "Introduction to Microsoft Azure Data (DP-900)",
      category: "Microsoft Azure Data",
      description: "Introductory course on data concepts and services related to Microsoft Azure.",
      learned: [
        "Data, relational database, non-relational data, and analytics-workload fundamentals.",
        "An overview of Azure data services and corporate-environment use cases.",
        "A basis for understanding integrations between infrastructure, cloud, and data.",
      ],
    },
    iam: {
      category: "IAM",
      description: "Course on identity and access management focused on governance, security, and control.",
      learned: [
        "Digital-identity foundations, user lifecycle, and access-control practices.",
        "The importance of authorization, authentication, and permission-segregation policies.",
        "The relationship between IAM, corporate security, audit, and governance.",
      ],
    },
    pam: {
      category: "PAM",
      description: "Course on privileged-account management and risk reduction in administrative access.",
      learned: [
        "Privileged-account concepts, administrative-access risks, and the need for stronger control.",
        "PAM best practices, access approval, auditing, and exposure reduction.",
        "The relationship between privileges, hardening, compliance, and incident response.",
      ],
    },
    coso: {
      title: "COSO | Corporate Risk Management and Internal Controls",
      category: "GRC",
      description: "Course on COSO, risk management, internal controls, and corporate governance.",
      learned: [
        "COSO framework fundamentals and its relationship with internal controls.",
        "Corporate risk-management, governance, and process-improvement concepts.",
        "A basis for connecting technology, controls, audit, and information security.",
      ],
    },
    "itil-cobit-scrum-pmbok": {
      title: "Practical Management and Governance: Cobit, ITIL, Scrum, and PMBOK",
      category: "ITSM & Governance",
      description: "Management and governance course with practical concepts from Cobit, ITIL, Scrum, and PMBOK.",
      learned: [
        "Governance, service-management, and IT-process organization concepts.",
        "Practical Cobit, ITIL, Scrum, and PMBOK concepts applied to corporate environments.",
        "A foundation for more structured operations, business communication, and continuous improvement.",
      ],
    },
    "copilot-office": {
      category: "AI & Productivity",
      description: "Course on using Copilot in Microsoft Office for productivity and task automation.",
      learned: [
        "Use of Copilot features in Microsoft Office to accelerate productivity tasks.",
        "Applying AI to documents, presentations, analysis, and administrative workflows.",
        "A basis for incorporating AI assistants into technical and operational work.",
      ],
    },
    "generative-ai": {
      category: "Generative AI",
      description: "Course on possibilities, trends, and applications of generative artificial intelligence.",
      learned: [
        "Essential generative-AI concepts and their application scenarios.",
        "A view of future trends and their impact on productivity, technology, and business.",
        "A basis for evaluating automation possibilities with generative models.",
      ],
    },
    "ai-agents": {
      category: "AI Agents",
      description: "Introductory course on AI agents and agentic workflows.",
      learned: [
        "AI-agent foundations and the difference between simple automation and agentic workflows.",
        "Planning, task execution, and tool-use concepts for agents.",
        "Ideas for applying agents to technical support, documentation, and operational automation.",
      ],
    },
    "vibe-coding": {
      category: "AI & Development",
      description: "Course on AI-assisted software development and practical prototyping.",
      learned: [
        "Practical use of AI to accelerate prototyping and solution development.",
        "How to turn ideas into interfaces, scripts, and workflows with intelligent tools.",
        "Best practices for reviewing, testing, and improving AI-generated results.",
      ],
    },
    "prompt-engineering": {
      category: "AI & Productivity",
      description: "Course on prompt engineering for productivity and professional tasks.",
      learned: [
        "How to structure clearer prompts for useful and consistent responses.",
        "Applying AI to writing, analysis, documentation, and task organization.",
        "Care when reviewing AI output and adapting responses to professional context.",
      ],
    },
  };

  function normalized(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      const parent = node.parentElement?.tagName;
      if (["SCRIPT", "STYLE", "CODE", "PRE"].includes(parent)) {
        return;
      }

      const source = node.nodeValue || "";
      const translated = labels[normalized(source)];
      if (!translated) {
        return;
      }

      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    });
  }

  function translateAttributes() {
    ["aria-label", "alt", "title"].forEach((attribute) => {
      document.querySelectorAll(`[${attribute}]`).forEach((element) => {
        const source = element.getAttribute(attribute);
        if (source && labels[source]) {
          element.setAttribute(attribute, labels[source]);
        }
      });
    });
  }

  function applyCertificateTranslation() {
    const translation = certificateTranslations[certificateId];
    if (!translation) {
      return;
    }

    const app = document.getElementById("app");
    const summary = app.querySelector(".summary");
    const learned = app.querySelector(".learned");
    if (!summary || !learned) {
      return;
    }

    summary.querySelector(".eyebrow").textContent = translation.category;
    if (translation.title) {
      summary.querySelector("h1").textContent = translation.title;
    }
    summary.querySelector(".description").textContent = translation.description;
    learned.querySelectorAll("li").forEach((item, index) => {
      if (translation.learned[index]) {
        item.textContent = translation.learned[index];
      }
    });

    const title = summary.querySelector("h1").textContent;
    document.title = `${title} | Lorran Daniel`;
    const frame = app.querySelector(".pdf-frame");
    if (frame) {
      frame.title = `PDF - ${title}`;
    }
  }

  function setupLanguageSelect() {
    const select = document.getElementById("languageSelect");
    if (!select) {
      return;
    }

    select.value = language;
    select.addEventListener("change", () => {
      const target = new URL(window.location.href);
      target.searchParams.set("lang", select.value);
      window.location.href = target.href;
    });
  }

  const portfolioLink = document.querySelector('.brand[href*="index.html"]');
  if (portfolioLink) {
    portfolioLink.href = `index.html?lang=${language}`;
  }

  setupLanguageSelect();

  if (language !== "en") {
    return;
  }

  document.documentElement.lang = "en";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Certificate detail in Lorran Daniel's technical portfolio.",
  );
  document.querySelector('meta[property="og:description"]')?.setAttribute(
    "content",
    "Detailed view of Lorran Daniel's certifications, course certificates, and technical skills.",
  );
  translateTextNodes(document.body);
  translateAttributes();
  applyCertificateTranslation();
})();
