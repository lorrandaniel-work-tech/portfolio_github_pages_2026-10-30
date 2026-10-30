(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const language = params.get("lang") === "en" ? "en" : "pt";
  const hasExplicitLanguage = params.has("lang");

  const translations = {
    "Navegação principal": "Primary navigation",
    "Sobre": "About",
    "Experiência": "Experience",
    "Currículo": "Resume",
    "Projetos": "Projects",
    "Certificações": "Certifications",
    "Certificados": "Certificates",
    "Contato": "Contact",
    "PORTFÓLIO / PORTFOLIO": "PORTFOLIO / PORTFOLIO",
    "Escolha seu idioma": "Choose your language",
    "Infraestrutura | Cloud | Cybersecurity": "Infrastructure | Cloud | Cybersecurity",
    "Portfólio técnico em infraestrutura, cloud e segurança.": "Infrastructure, cloud, and security portfolio.",
    "Profissional de Infraestrutura e Suporte de TI com 4 anos de experiência. Atualmente, presto suporte VIP de TI diretamente a diretores e à liderança executiva da Localiza&Co.":
      "IT Infrastructure and Support professional with 4 years of experience. I currently provide VIP IT support directly to directors and executive leadership at Localiza&Co.",
    "Ver projetos": "View projects",
    "Abrir Cloud SOC Guardian": "Open Cloud SOC Guardian",
    "Entrar em contato": "Get in touch",
    "Projetos práticos": "Hands-on projects",
    "Certificados": "Certificates",
    "Carga horária confirmada": "Confirmed course hours",
    "Resumo do portfólio": "Portfolio summary",
    "Foto profissional de Lorran Daniel": "Professional photo of Lorran Daniel",
    "Foto e stack principal": "Photo and core stack",
    "Disponível": "Available",
    "Stack principal": "Core stack",
    "Como trabalho": "How I work",
    "Diagnóstico, organização e continuidade.": "Diagnosis, organization, and service continuity.",
    "Atuo com suporte técnico N1/N2 e atendimento VIP a diretores e à liderança executiva, combinando administração de infraestrutura, monitoramento proativo e documentação técnica.":
      "I provide Level 1 and Level 2 technical support and VIP support to directors and executive leadership, combining infrastructure administration, proactive monitoring, and technical documentation.",
    "Diagnóstico e implantação": "Diagnosis and deployment",
    "Investigo incidentes e preparo ambientes, de hardware e servidores à personalização e implantação em massa de imagens Windows com WDS/MDT.":
      "I investigate incidents and prepare environments, from hardware and servers to Windows image customization and bulk deployment using WDS/MDT.",
    "Gestão e monitoramento": "Service management and monitoring",
    "Trabalho com incidentes, solicitações e mudanças no ServiceNow e monitoramento da infraestrutura com Zabbix para identificar problemas de forma proativa.":
      "I work with incidents, requests, and changes in ServiceNow and infrastructure monitoring using Zabbix to identify issues proactively.",
    "Documentação e conhecimento": "Documentation and knowledge sharing",
    "Produzo documentação técnica, manuais de suporte e guias de usuário para padronizar processos e compartilhar conhecimento.":
      "I create technical documentation, support manuals, and user guides to standardize processes and share knowledge.",
    "Inglês C1 Advanced": "English C1 Advanced",
    "Virtualização": "Virtualization",
    "Objetivo: transitar para cybersecurity e cloud computing, apoiado na minha experiência em infraestrutura de TI, redes e gestão de acessos.":
      "Goal: transition into cybersecurity and cloud computing, building on my background in IT infrastructure, networking, and access management.",
    "Perfil profissional": "Professional profile",
    "Com cerca de quatro anos de experiência em infraestrutura e suporte de TI, atuo na sustentação de ambientes corporativos, administração de sistemas, troubleshooting, virtualização, redes e práticas de segurança.":
      "With around four years of experience in infrastructure and IT support, I support corporate environments through systems administration, troubleshooting, virtualization, networking, and security practices.",
    "Meu foco profissional está em Cloud Computing, Cybersecurity, automação e observabilidade. Desenvolvo laboratórios com Docker, Linux, Zabbix, Grafana, Wazuh e soluções voltadas para monitoramento e segurança.":
      "My professional focus is on Cloud Computing, Cybersecurity, automation, and observability. I build labs with Docker, Linux, Zabbix, Grafana, Wazuh, and solutions for monitoring and security.",
    "Atuação profissional": "Professional experience",
    "Analista de Serviços de Infraestrutura II": "Infrastructure Services Analyst II",
    "Atual": "Present",
    "Julho de 2025 - atual | Belo Horizonte, MG": "July 2025 - Present | Belo Horizonte, Brazil",
    "Administração de contas e licenças Microsoft 365, análise de causa raiz e suporte a infraestrutura corporativa com foco em continuidade operacional e controle de acesso.":
      "Administration of Microsoft 365 accounts and licenses, root-cause analysis, and corporate infrastructure support focused on operational continuity and access control.",
    "RCA e troubleshooting de incidentes, solicitações e backlog.":
      "Root-cause analysis and troubleshooting for incidents, requests, and backlog.",
    "Suporte a serviços de infraestrutura, rede, Microsoft Azure e endpoints macOS.":
      "Support for infrastructure services, networking, Microsoft Azure, and macOS endpoints.",
    "Analista de Suporte": "Support Analyst",
    "Outubro de 2024 - Agosto de 2025": "October 2024 - August 2025",
    "Atendimento remoto, diagnóstico de falhas em sistemas, softwares e hardware, com gestão de tickets orientada a SLA.":
      "Remote support and diagnosis of system, software, and hardware issues with SLA-oriented ticket management.",
    "Documentação de processos e apoio a testes e atualizações de software.":
      "Process documentation and support for software testing and updates.",
    "Técnico de Suporte Júnior": "Junior Support Technician",
    "Agosto de 2022 - Outubro de 2024": "August 2022 - October 2024",
    "Suporte técnico remoto, instalação e configuração de sistemas e documentação de soluções para manter a continuidade dos serviços.":
      "Remote technical support, system installation and configuration, and solution documentation to maintain service continuity.",
    "Gestão de tickets e administração de contas de usuário via Netadmin.":
      "Ticket management and user-account administration through Netadmin.",
    "Versões profissionais": "Professional versions",
    "Currículo atualizado": "Updated resume",
    "Experiência, competências técnicas, projetos, credenciais e idiomas em um PDF de uma página. Visualize ou baixe a versão no idioma selecionado.":
      "Experience, technical skills, projects, credentials, and languages in a one-page PDF. Preview or download the version in the selected language.",
    "Visualizar currículo": "View resume",
    "Baixar currículo": "Download resume",
    "Versões objetivas com experiência, competências técnicas, projetos, certificações e idiomas. Os arquivos não incluem dados pessoais desnecessários para compartilhamento.":
      "Concise versions with experience, technical skills, projects, certifications, and languages. The files exclude unnecessary personal data for sharing.",
    "Baixar em português": "Download in Portuguese",
    "Baixar em inglês": "Download in English",
    "Português": "Portuguese",
    "Abrir PDF": "Open PDF",
    "Abrir currículo em português em nova aba": "Open Portuguese resume in a new tab",
    "Abrir currículo em inglês em nova aba": "Open English resume in a new tab",
    "Pré-visualização do currículo de Lorran Daniel em português": "Preview of Lorran Daniel's resume in Portuguese",
    "Pré-visualização do currículo de Lorran Daniel em inglês": "Preview of Lorran Daniel's resume in English",
    "Portfólio técnico": "Technical portfolio",
    "Cada projeto deve ter repositório, prints, objetivo, arquitetura, tecnologias e aprendizados.":
      "Each project includes a repository, screenshots, goals, architecture, technologies, and key learnings.",
    "Filtrar projetos": "Filter projects",
    "Todos": "All",
    "Infraestrutura": "Infrastructure",
    "Observabilidade": "Observability",
    "Automação": "Automation",
    "Projeto principal | FastAPI + SQLite": "Featured project | FastAPI + SQLite",
    "Aplicação defensiva para demonstrar um fluxo de SOC e Blue Team: inventário de ativos, ingestão de logs, regras de detecção, findings deduplicados e relatórios em Markdown/JSON.":
      "Defensive application that demonstrates a SOC and Blue Team workflow: asset inventory, log ingestion, detection rules, deduplicated findings, and Markdown/JSON reports.",
    "Impacto:": "Impact:",
    "transforma o portfólio em uma demonstração navegável de Python, FastAPI, SQLite, automação, arquitetura de software e segurança defensiva.":
      "turns the portfolio into a navigable demonstration of Python, FastAPI, SQLite, automation, software architecture, and defensive security.",
    "Relatórios": "Reports",
    "Ver case": "View case study",
    "Abrir aplicação": "Open application",
    "Em evolução": "In progress",
    "Ambiente corporativo simulado com Active Directory, Docker, Linux Server, backup, monitoramento e políticas de segurança.":
      "Simulated corporate environment with Active Directory, Docker, Linux Server, backup, monitoring, and security policies.",
    "Infra completa para testes de administração, hardening e continuidade.":
      "Complete infrastructure for administration, hardening, and continuity testing.",
    "Ver base": "View foundation",
    "Abrir demo": "Open demo",
    "Documentado": "Documented",
    "Monitoramento com Zabbix + Grafana": "Zabbix + Grafana Monitoring",
    "Observabilidade de infraestrutura com dashboards, alertas, métricas de disponibilidade e acompanhamento de serviços críticos.":
      "Infrastructure observability with dashboards, alerts, availability metrics, and critical-service monitoring.",
    "Visão operacional clara para reduzir tempo de resposta a incidentes.":
      "Clear operational visibility to reduce incident response time.",
    "Dashboards": "Dashboards",
    "Lab ativo": "Active lab",
    "SIEM com Wazuh": "SIEM with Wazuh",
    "Centralização de logs, detecção de ameaças, inventário de agentes e monitoramento de eventos de segurança.":
      "Log centralization, threat detection, agent inventory, and security event monitoring.",
    "Base prática para investigação, resposta e melhoria contínua de segurança.":
      "Practical foundation for investigation, response, and continuous security improvement.",
    "Scripts próprios": "Custom scripts",
    "Automação PowerShell": "PowerShell Automation",
    "Scripts para inventário, criação de usuários, rotinas de backup, coleta de informações e automações administrativas.":
      "Scripts for inventory, user creation, backup routines, information collection, and administrative automation.",
    "Menos tarefas repetitivas e mais padronização no suporte corporativo.":
      "Fewer repetitive tasks and more standardization in corporate support.",
    "Diagnostico seguro": "Safe diagnostics",
    "Diagnostico Corporativo Windows": "Windows Corporate Diagnostics",
    "Base administrativa somente leitura para coletar evidencias de sistema, servicos e gestao corporativa, com relatorios TXT/CSV e sem reparos automaticos.":
      "Read-only administrative foundation to collect system, service, and corporate-management evidence with TXT/CSV reports and no automatic repairs.",
    "Roadmap": "Roadmap",
    "Evolução técnica": "Technical roadmap",
    "Arquitetura, redes, IAM, storage e boas práticas em Azure e AWS.":
      "Architecture, networking, IAM, storage, and best practices in Azure and AWS.",
    "Logs, detecção, hardening, resposta a incidentes e Wazuh.":
      "Logs, detection, hardening, incident response, and Wazuh.",
    "Automação, conteineres, pipelines e segurança integrada ao ciclo técnico.":
      "Automation, containers, pipelines, and security integrated into the technical lifecycle.",
    "Monitoramento, métricas, alertas e dashboards orientados a operação.":
      "Monitoring, metrics, alerts, and operations-focused dashboards.",
    "Credenciais em destaque": "Featured credentials",
    "Certificações, credenciais e reconhecimentos com validação explícita no certificado, priorizando cybersecurity, cloud, plataforma Falcon e comunicação profissional.":
      "Certifications, credentials, and recognitions with explicit certificate validation, focused on cybersecurity, cloud, the Falcon platform, and professional communication.",
    "Inglês": "English",
    "Cloud & IA": "Cloud & AI",
    "Fundamentos de inteligência artificial aplicada ao ecossistema AWS.":
      "Fundamentals of artificial intelligence applied to the AWS ecosystem.",
    "Data": "Date",
    "Carga horária": "Course hours",
    "Credencial": "Credential",
    "Ver detalhes": "View details",
    "Reconhecimento em prevenção de phishing e conscientização defensiva.":
      "Recognition in phishing prevention and defensive awareness.",
    "Não informada no certificado": "Not stated on the certificate",
    "Fundamentos essenciais da plataforma Falcon para operação de segurança.":
      "Essential Falcon platform foundations for security operations.",
    "Certificado": "Certificate",
    "Reconhecimento de conclusão em fundamentos de carreira em cybersecurity.":
      "Recognition of completion in cybersecurity career fundamentals.",
    "Visão geral de arquitetura da plataforma Falcon para segurança e proteção de endpoints.":
      "Overview of Falcon platform architecture for endpoint security and protection.",
    "Certificado de proficiência em inglês com resultado C1 Advanced.":
      "English proficiency certificate with a C1 Advanced result.",
    "Resultado": "Score",
    "Detalhe": "Detail",
    "Validação": "Verification",
    "Certificados de Cursos": "Course certificates",
    "Formação complementar": "Additional training",
    "Certificados de conclusão com carga horária, data, instrutor e código quando esses dados aparecem no próprio documento.":
      "Completion certificates with course hours, date, instructor, and code when those details appear in the original document.",
    "Governança": "Governance",
    "Treinamento introdutório para serviços, fundamentos e modelos de uso da AWS.":
      "Introductory training on AWS services, foundations, and usage models.",
    "Emissor": "Issuer",
    "Introdução à Infraestrutura de Nuvem (AZ-900)": "Introduction to Cloud Infrastructure (AZ-900)",
    "Fundamentos de infraestrutura, serviços e conceitos de nuvem no Microsoft Azure.":
      "Infrastructure, services, and cloud-concept foundations in Microsoft Azure.",
    "Código": "Code",
    "Introdução ao Microsoft Azure Data (DP-900)": "Introduction to Microsoft Azure Data (DP-900)",
    "Fundamentos de dados, serviços analíticos e conceitos de banco de dados no Azure.":
      "Data foundations, analytics services, and database concepts in Azure.",
    "Gestão de identidade, acessos, permissões e governança de credenciais.":
      "Identity, access, permissions, and credential-governance management.",
    "Instrutor": "Instructor",
    "Duração": "Duration",
    "Controle e proteção de contas privilegiadas em ambientes corporativos.":
      "Control and protection of privileged accounts in corporate environments.",
    "Fundamentos de gestão de risco, controles internos e governança corporativa.":
      "Foundations of risk management, internal controls, and corporate governance.",
    "Gestão e Governança na Prática: Cobit, ITIL, Scrum e PMBOK": "Practical Management and Governance: Cobit, ITIL, Scrum, and PMBOK",
    "Boas práticas para gestão de serviços, suporte, operação e melhoria contínua.":
      "Best practices for service management, support, operations, and continuous improvement.",
    "Uso de Copilot e IA aplicada à produtividade no Microsoft Office.":
      "Use of Copilot and AI applied to productivity in Microsoft Office.",
    "Possibilidades, tendências e aplicações de inteligência artificial generativa.":
      "Possibilities, trends, and applications of generative artificial intelligence.",
    "Conceitos de agentes de IA, automação inteligente e fluxos agentivos.":
      "Concepts of AI agents, intelligent automation, and agentic workflows.",
    "Desenvolvimento assistido por IA, prototipação e aceleração de fluxo técnico.":
      "AI-assisted development, prototyping, and technical workflow acceleration.",
    "Instrutores": "Instructors",
    "Boas práticas de prompts para produtividade, documentação e tarefas profissionais.":
      "Prompt best practices for productivity, documentation, and professional tasks.",
    "Aberto para oportunidades em infraestrutura, cloud e segurança.":
      "Open to opportunities in infrastructure, cloud, and security.",
    "Entre em contato para oportunidades em infraestrutura, cloud, observabilidade, automação e segurança da informação.":
      "Get in touch about opportunities in infrastructure, cloud, observability, automation, and information security.",
    "Voltar ao topo": "Back to top",
    "↑ Topo": "↑ Top",
    "Selecionar idioma": "Select language",
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
      const parentTag = node.parentElement?.tagName;
      if (["SCRIPT", "STYLE", "CODE", "PRE"].includes(parentTag)) {
        return;
      }

      const source = node.nodeValue || "";
      const key = normalized(source);
      const translated = translations[key];
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
        const value = element.getAttribute(attribute);
        if (value && translations[value]) {
          element.setAttribute(attribute, translations[value]);
        }
      });
    });
  }

  function localizeLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|https?:)/i.test(rawHref)) {
        return;
      }

      const url = new URL(rawHref, window.location.href);
      const pathname = url.pathname.replace(/\\/g, "/");
      const isPortfolioPage = /index\.html$/i.test(pathname);
      const isCertificatePage = /certificado\.html$/i.test(pathname);
      const isResumePage = /curriculo\.html$/i.test(pathname);
      const isLabPage = /projetos\/lab(?:-en)?\.html$/i.test(pathname);

      if (!isPortfolioPage && !isCertificatePage && !isResumePage && !isLabPage) {
        return;
      }

      if (isLabPage && /lab-en\.html$/i.test(pathname)) {
        url.pathname = pathname.replace(/lab-en\.html$/i, "lab.html");
      }

      url.searchParams.set("lang", language);
      link.href = url.href;
    });
  }

  function navigateToLanguage(nextLanguage) {
    const target = new URL(window.location.href);
    target.searchParams.set("lang", nextLanguage);
    window.location.href = target.href;
  }

  function setupLanguageControls() {
    const select = document.getElementById("languageSelect");
    if (select) {
      select.value = language;
      select.addEventListener("change", () => navigateToLanguage(select.value));
    }

    const modal = document.getElementById("languageModal");
    if (!modal || hasExplicitLanguage) {
      return;
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelectorAll("[data-language-choice]").forEach((button) => {
      button.addEventListener("click", () => navigateToLanguage(button.dataset.languageChoice));
    });
  }

  function localizeMetadata() {
    document.documentElement.lang = "en";
    document.title = "Lorran Daniel | Infrastructure, Cloud, and Cybersecurity";

    const descriptions = {
      description:
        "Technical portfolio of Lorran Daniel, an Infrastructure Analyst focused on cloud, cybersecurity, automation, and observability.",
      "og:description":
        "Technical portfolio of Lorran Daniel, an Infrastructure Analyst focused on cloud, security, automation, and observability.",
      "og:title": "Lorran Daniel | Infrastructure, Cloud, and Cybersecurity",
    };

    document.querySelectorAll("meta[name], meta[property]").forEach((meta) => {
      const key = meta.getAttribute("name") || meta.getAttribute("property");
      if (descriptions[key]) {
        meta.setAttribute("content", descriptions[key]);
      }
    });
  }

  if (language === "en") {
    localizeMetadata();
    translateTextNodes(document.body);
    translateAttributes();
  }

  localizeLinks();
  const resumeDownload = document.querySelector("[data-resume-download]");
  if (resumeDownload) {
    const filename = language === "en" ? "Lorran_Daniel_Resume_EN.pdf" : "Lorran_Daniel_Curriculo_PT.pdf";
    resumeDownload.href = `curriculos/${filename}`;
    resumeDownload.download = filename;
  }
  setupLanguageControls();
})();
