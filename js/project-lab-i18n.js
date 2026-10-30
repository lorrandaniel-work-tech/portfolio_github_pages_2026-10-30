(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const language = params.get("lang") === "en" ? "en" : "pt";
  const translations = {
    "Ir para o conteúdo": "Skip to content",
    "Voltar ao portfólio": "Back to portfolio",
    "Laboratórios locais | Lorran Daniel": "Local labs | Lorran Daniel",
    "Laboratório local": "Local lab",
    "Carregando projeto...": "Loading project...",
    "Voltar aos projetos": "Back to projects",
    "Abrir demonstração": "Open demo",
    "Modo de demonstração": "Demo mode",
    "Modo local": "Local mode",
    "Funciona sem servidor": "Works without a server",
    "Os dados abaixo são exemplos sintéticos. Nada é enviado para a internet e nenhum serviço precisa estar ligado para testar a interface.":
      "The data below is synthetic. Nothing is sent to the internet and no service needs to be running to test the interface.",
    "Navegação entre projetos": "Project navigation",
    "Projeto em demonstração": "Project in demo",
    "Navegação da página": "Page navigation",
    "Visão geral": "Overview",
    "Demonstração": "Demo",
    "Projeto": "Project",
    "Como a solução foi pensada": "How the solution was designed",
    "Problema": "Problem",
    "Contexto operacional": "Operational context",
    "Solução": "Solution",
    "Abordagem proposta": "Proposed approach",
    "Fluxo da aplicação": "Application flow",
    "Da informação à decisão": "From information to decision",
    "Tecnologias e conceitos": "Technologies and concepts",
    "Demonstração prática": "Practical demonstration",
    "Exemplo local": "Local example",
    "Portfólio técnico de Lorran Daniel": "Lorran Daniel technical portfolio",
    "Contato": "Contact",
    "Segurança defensiva | Projeto principal": "Defensive security | Featured project",
    "Uma demonstração defensiva de inventário, ingestão de eventos, regras de detecção, findings e relatórios para um fluxo de SOC enxuto.":
      "A defensive demonstration of inventory, event ingestion, detection rules, findings, and reports for a lean SOC workflow.",
    "Transformar sinais operacionais em evidências priorizadas para apoiar a análise de um time de Blue Team.":
      "Turn operational signals into prioritized evidence to support a Blue Team's analysis.",
    "Ambientes cloud geram telemetria em volume e com formatos diferentes. Sem um fluxo de normalização e priorização, eventos importantes competem com ruído e a investigação se torna lenta.":
      "Cloud environments generate high-volume telemetry in different formats. Without normalization and prioritization, important events compete with noise and investigations slow down.",
    "O projeto organiza ativos e eventos, aplica regras defensivas, deduplica findings e produz relatórios em formatos simples para compartilhamento. Esta tela reproduz o fluxo com dados sintéticos, diretamente no navegador.":
      "The project organizes assets and events, applies defensive rules, deduplicates findings, and produces simple reports for sharing. This screen reproduces the workflow with synthetic data directly in the browser.",
    "Inventário": "Inventory",
    "Ingestão": "Ingestion",
    "Normalização": "Normalization",
    "Regras": "Rules",
    "Findings": "Findings",
    "ativos no cenário": "assets in scenario",
    "eventos sintéticos": "synthetic events",
    "findings ativos": "active findings",
    "prioridade máxima": "highest priority",
    "serviços mapeados": "mapped services",
    "validações concluídas": "completed validations",
    "domínios de teste": "test domains",
    "ambiente isolado": "isolated environment",
    "hosts observados": "observed hosts",
    "disponibilidade exemplo": "sample availability",
    "alertas ativos": "active alerts",
    "janela de análise": "analysis window",
    "eventos na fila": "events in queue",
    "alertas gerados": "generated alerts",
    "fontes simuladas": "simulated sources",
    "ambiente de teste": "test environment",
    "hosts consultados": "queried hosts",
    "modo de execução": "execution mode",
    "saída disponível": "available output",
    "estado da rotina": "routine status",
    "verificações concluídas": "completed checks",
    "alterações aplicadas": "changes applied",
    "evidência exportável": "exportable evidence",
    "estado do relatório": "report status",
    "Triagem defensiva local": "Local defensive triage",
    "Carregue o cenário sintético, execute as regras e gere um relatório Markdown. A experiência é local; não há envio de logs ou dados para serviços externos.":
      "Load the synthetic scenario, run the rules, and generate a Markdown report. The experience is local; no logs or data are sent to external services.",
    "Infraestrutura | Ambiente de laboratório": "Infrastructure | Lab environment",
    "Um ambiente corporativo simulado para praticar identidade, serviços, virtualização, backup e observabilidade em uma topologia segura.":
      "A simulated corporate environment for practicing identity, services, virtualization, backup, and observability in a secure topology.",
    "Reproduzir dependências comuns de infraestrutura para validar procedimentos de administração, hardening e continuidade operacional.":
      "Reproduce common infrastructure dependencies to validate administration, hardening, and operational-continuity procedures.",
    "Testar mudanças diretamente em ambientes de produção aumenta risco e limita a experimentação. É preciso um espaço isolado que represente serviços corporativos reais.":
      "Testing changes directly in production increases risk and limits experimentation. An isolated space that represents real corporate services is needed.",
    "O laboratório organiza os serviços por camadas, documenta dependências e permite validar a saúde básica de cada componente antes de uma alteração controlada.":
      "The lab organizes services by layer, documents dependencies, and makes it possible to validate each component's basic health before a controlled change.",
    "Identidade": "Identity",
    "Serviços": "Services",
    "Observabilidade": "Observability",
    "Mapa de saúde do laboratório": "Lab health map",
    "Confira uma fotografia local dos serviços e simule uma validação de pré-alteração para visualizar a sequência de checagens.":
      "Review a local snapshot of services and simulate a pre-change validation to see the sequence of checks.",
    "Observabilidade | Métricas de infraestrutura": "Observability | Infrastructure metrics",
    "Monitoramento com Zabbix + Grafana": "Zabbix + Grafana Monitoring",
    "Uma visão operacional de disponibilidade e capacidade, com métricas sintéticas de hosts, gatilhos e um painel temporal inspirado em dashboards Grafana.":
      "An operational view of availability and capacity, with synthetic host metrics, triggers, and a time panel inspired by Grafana dashboards.",
    "Acompanhar sinais essenciais da infraestrutura para que desvios sejam vistos antes de impactarem a disponibilidade de serviços críticos.":
      "Track essential infrastructure signals so deviations can be seen before they affect critical-service availability.",
    "Sem visibilidade contínua de CPU, memória, latência e disponibilidade, a equipe reage tarde e perde contexto histórico durante incidentes.":
      "Without continuous visibility into CPU, memory, latency, and availability, teams react late and lose historical context during incidents.",
    "A combinação Zabbix e Grafana separa coleta, alertas e leitura visual. A simulação abaixo mostra uma série temporal local com troca de métricas e geração de alertas.":
      "The Zabbix and Grafana combination separates collection, alerting, and visual analysis. The simulation below shows a local time series with metric switching and alert generation.",
    "Hosts": "Hosts",
    "Coleta": "Collection",
    "Gatilhos": "Triggers",
    "Métricas": "Metrics",
    "Dashboard de infraestrutura": "Infrastructure dashboard",
    "Alterne as métricas, acrescente novas amostras e force um alerta de CPU. O gráfico é desenhado localmente em canvas, sem dependências externas.":
      "Switch metrics, add samples, and trigger a CPU alert. The chart is drawn locally on canvas, with no external dependencies.",
    "Segurança defensiva | SIEM": "Defensive security | SIEM",
    "SIEM com Wazuh": "SIEM with Wazuh",
    "Uma base de centralização e análise de eventos de segurança para demonstrar ingestão de logs, regras e priorização de alertas.":
      "A foundation for centralizing and analyzing security events that demonstrates log ingestion, rules, and alert prioritization.",
    "Concentrar sinais relevantes de endpoints e servidores em um fluxo que facilite investigação, resposta e melhoria contínua de controles.":
      "Concentrate relevant endpoint and server signals in a workflow that supports investigation, response, and continuous control improvement.",
    "Logs distribuídos por hosts diferentes dificultam correlação e atrasam a identificação de comportamentos que merecem atenção de segurança.":
      "Logs distributed across different hosts make correlation harder and delay the identification of behaviors that deserve security attention.",
    "O projeto utiliza uma trilha de eventos normalizados e regras de alto nível para evidenciar mudanças de privilégios, acessos fora do padrão e integridade de arquivos.":
      "The project uses a normalized event trail and high-level rules to highlight privilege changes, unusual access, and file integrity.",
    "Agentes": "Agents",
    "Eventos": "Events",
    "Decodificação": "Decoding",
    "Alertas": "Alerts",
    "Fila de eventos de segurança": "Security event queue",
    "Ingere eventos sintéticos e aplique regras locais para observar a criação de alertas priorizados.":
      "Ingest synthetic events and apply local rules to observe prioritized alerts being created.",
    "Automação | Administração Windows": "Automation | Windows administration",
    "Automação PowerShell": "PowerShell Automation",
    "Rotinas administrativas reproduzíveis para inventário, checagem de serviços, organização de evidências e relatórios operacionais.":
      "Repeatable administrative routines for inventory, service checks, evidence organization, and operational reporting.",
    "Reduzir tarefas manuais repetitivas e oferecer resultados padronizados para a operação de infraestrutura.":
      "Reduce repetitive manual tasks and provide standardized results for infrastructure operations.",
    "Atividades administrativas feitas manualmente variam entre operadores, tomam tempo e tornam difícil comparar o estado de máquinas em diferentes momentos.":
      "Manually performed administrative activities vary between operators, take time, and make it difficult to compare machine state over time.",
    "Scripts focados em leitura, validação e relatórios criam uma trilha consistente. A demonstração imita uma execução segura com resultados sintéticos, sem alterar o computador.":
      "Scripts focused on reading, validation, and reports create a consistent trail. The demo imitates safe execution with synthetic results and does not change the computer.",
    "Escopo": "Scope",
    "Validação": "Validation",
    "Relatório": "Report",
    "Evidências": "Evidence",
    "Execução administrativa simulada": "Simulated administrative run",
    "Execute um inventário sintético e exporte uma amostra CSV. Nenhum comando é executado no sistema operacional.":
      "Run a synthetic inventory and export a CSV sample. No command is run on the operating system.",
    "Infraestrutura | Diagnóstico seguro": "Infrastructure | Safe diagnostics",
    "Diagnóstico Corporativo Windows": "Windows Corporate Diagnostics",
    "Uma base somente leitura para reunir evidências de sistema, serviços e gerenciamento corporativo sem aplicar reparos automáticos.":
      "A read-only foundation for gathering system, service, and corporate-management evidence without applying automatic repairs.",
    "Apoiar o troubleshooting com informações organizadas, reduzindo o tempo gasto para localizar o contexto de uma máquina corporativa.":
      "Support troubleshooting with organized information, reducing the time required to establish the context of a corporate machine.",
    "Incidentes em endpoints frequentemente exigem dados de fontes diferentes. Coletas manuais são demoradas e podem omitir detalhes relevantes para o diagnóstico.":
      "Endpoint incidents often require data from different sources. Manual collection is time-consuming and can omit details relevant to diagnosis.",
    "O projeto organiza verificações de saúde, serviços e gestão corporativa em um relatório reproduzível. A tela demonstra apenas dados fictícios e ações de leitura.":
      "The project organizes health, service, and corporate-management checks into a repeatable report. The screen shows fictional data and read-only actions only.",
    "Sistema": "System",
    "Gestão": "Management",
    "Relatório de diagnóstico local": "Local diagnostics report",
    "Gere uma visão segura do endpoint fictício e baixe um relatório em texto para usar como exemplo de evidência operacional.":
      "Generate a safe view of the fictional endpoint and download a text report as an operational-evidence example.",
    "Pipeline local de inventário, eventos, regras e relatório.": "Local pipeline for inventory, events, rules, and reporting.",
    "Carregar cenário": "Load scenario",
    "Executar regras": "Run rules",
    "Baixar relatório": "Download report",
    "Eventos ingeridos": "Ingested events",
    "Fila de telemetria": "Telemetry queue",
    "Hora": "Time",
    "Origem": "Source",
    "Evento": "Event",
    "Estado": "Status",
    "Aguardando cenário de logs": "Awaiting log scenario",
    "Alteração de política IAM": "IAM policy change",
    "Múltiplas falhas de autenticação": "Multiple authentication failures",
    "Login administrativo autorizado": "Authorized administrative login",
    "Acesso a bucket sensível": "Sensitive bucket access",
    "Normal": "Normal",
    "Revisar": "Review",
    "Alerta": "Alert",
    "Detecção": "Detection",
    "Findings deduplicados": "Deduplicated findings",
    "Sem findings ainda": "No findings yet",
    "Execute as regras para correlacionar o cenário.": "Run the rules to correlate the scenario.",
    "Possível ataque de senha em VPN": "Possible VPN password attack",
    "6 falhas seguidas do IP 198.51.100.42": "6 consecutive failures from IP 198.51.100.42",
    "Mudança de política IAM": "IAM policy change",
    "Permissão sensível revisada no ambiente cloud": "Sensitive permission reviewed in the cloud environment",
    "Acesso a bucket monitorado": "Access to monitored bucket",
    "Atividade registrada e correlacionada": "Activity recorded and correlated",
    "Severidade Alta": "Severity High",
    "Severidade Média": "Severity Medium",
    "Severidade Baixa": "Severity Low",
    "Cenário carregado: 4 ativos e 12 eventos sintéticos prontos para análise.":
      "Scenario loaded: 4 assets and 12 synthetic events are ready for analysis.",
    "3 findings foram gerados; eventos semelhantes foram agrupados no mesmo resultado.":
      "3 findings were generated; similar events were grouped into the same result.",
    "Relatório Markdown criado localmente e enviado para download.":
      "Markdown report created locally and sent to download.",
    "Topologia local de serviços corporativos para testes controlados.": "Local corporate-service topology for controlled testing.",
    "Validar pré-alteração": "Validate pre-change",
    "Topologia": "Topology",
    "Serviços do ambiente": "Environment services",
    "Nó": "Node",
    "Função": "Role",
    "Online": "Online",
    "Pendente": "Pending",
    "Validado": "Validated",
    "Aguardando": "Pending",
    "Checklist": "Checklist",
    "Janela de manutenção": "Maintenance window",
    "Resolução DNS": "DNS resolution",
    "Consulta entre os serviços de teste.": "Query between test services.",
    "Espaço de backup": "Backup space",
    "Retenção local disponível para o cenário.": "Local retention available for the scenario.",
    "Plano de reversão": "Rollback plan",
    "Registrado para a alteração simulada.": "Recorded for the simulated change.",
    "Status: pendente.": "Status: pending.",
    "Exemplo local de painel Grafana alimentado por dados sintéticos de monitoramento.":
      "Local Grafana-panel example fed by synthetic monitoring data.",
    "Adicionar amostra": "Add sample",
    "Simular alerta de CPU": "Simulate CPU alert",
    "Grafana | série temporal": "Grafana | time series",
    "Métrica exibida": "Displayed metric",
    "Gráfico temporal de CPU": "CPU time-series chart",
    "Legenda do gráfico": "Chart legend",
    "limiar de alerta": "alert threshold",
    "janela: 15 min": "window: 15 min",
    "Resumo de monitoramento": "Monitoring summary",
    "Zabbix | itens": "Zabbix | items",
    "Resumo do host": "Host summary",
    "Última leitura": "Latest reading",
    "Gatilho": "Trigger",
    "Nenhum alerta crítico": "No critical alert",
    "Alta CPU em app-lab-01": "High CPU on app-lab-01",
    "Fluxo de ingestão e correlação de eventos em uma fila SIEM fictícia.": "Event ingestion and correlation flow in a fictional SIEM queue.",
    "Ingerir eventos": "Ingest events",
    "Aplicar regras": "Apply rules",
    "Fila de agentes": "Agent queue",
    "Alertas correlacionados": "Correlated alerts",
    "Nenhuma regra aplicada": "No rule applied",
    "Ingere eventos e aplique as regras de detecção.": "Ingest events and apply the detection rules.",
    "Simulação de uma rotina PowerShell administrativa e segura.": "Simulation of a safe administrative PowerShell routine.",
    "Executar inventário": "Run inventory",
    "Baixar CSV": "Download CSV",
    "Saída simulada": "Simulated output",
    "Console da rotina": "Routine console",
    "Controles da automação": "Automation controls",
    "Somente leitura": "Read-only",
    "Não cria usuários, não altera serviços e não remove arquivos.": "It creates no users, changes no services, and removes no files.",
    "Resultado estruturado": "Structured result",
    "Os dados podem ser exportados em CSV para análise.": "Data can be exported to CSV for analysis.",
    "Uso demonstrativo": "Demonstration use",
    "Todos os hosts exibidos nesta página são fictícios.": "All hosts shown on this page are fictional.",
    "Leitura demonstrativa de sinais de saúde de um endpoint corporativo fictício.": "Demonstrative reading of health signals from a fictional corporate endpoint.",
    "Gerar diagnóstico": "Generate diagnostics",
    "Baixar relatório TXT": "Download TXT report",
    "Resumo do endpoint": "Endpoint summary",
    "Verificação": "Check",
    "Resultado": "Result",
    "Segurança": "Security",
    "Limites da rotina": "Routine boundaries",
    "Sem remediação automática": "No automatic remediation",
    "A rotina apenas organiza evidências para avaliação técnica.": "The routine only organizes evidence for technical assessment.",
    "Dados sintéticos": "Synthetic data",
    "Esta demonstração não lê informações do computador aberto.": "This demonstration does not read information from the open computer.",
    "Relatório local": "Local report",
    "O arquivo TXT é gerado pelo próprio navegador.": "The TXT file is generated by the browser itself.",
  };

  const projectTitles = {
    "Cloud SOC Guardian": "Cloud SOC Guardian",
    "Enterprise Home Lab": "Enterprise Home Lab",
    "Monitoramento com Zabbix + Grafana": "Zabbix + Grafana Monitoring",
    "SIEM com Wazuh": "SIEM with Wazuh",
    "Automação PowerShell": "PowerShell Automation",
    "Diagnóstico Corporativo Windows": "Windows Corporate Diagnostics",
  };

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translateTree(root) {
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
      const sourceWithTranslatedFragments = source
        .replace("6 falhas seguidas do IP 198.51.100.42", "6 consecutive failures from IP 198.51.100.42")
        .replace("Permissão sensível revisada no ambiente cloud", "Sensitive permission reviewed in the cloud environment")
        .replace("Atividade registrada e correlacionada", "Activity recorded and correlated")
        .replace("Severidade Alta", "Severity High")
        .replace("Severidade Média", "Severity Medium")
        .replace("Severidade Baixa", "Severity Low");
      const key = normalize(sourceWithTranslatedFragments);
      const translated = translations[key];
      if (!translated && sourceWithTranslatedFragments === source) {
        return;
      }

      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = translated ? `${leading}${translated}${trailing}` : sourceWithTranslatedFragments;
    });
  }

  function translateAttributes() {
    ["aria-label", "alt", "title"].forEach((attribute) => {
      document.querySelectorAll(`[${attribute}]`).forEach((element) => {
        const source = element.getAttribute(attribute);
        if (source && translations[source]) {
          element.setAttribute(attribute, translations[source]);
        }
      });
    });
  }

  function localizeTitle() {
    const title = document.title;
    Object.entries(projectTitles).forEach(([source, translated]) => {
      if (title === `${source} | Lorran Daniel`) {
        document.title = `${translated} | Lorran Daniel`;
      }
    });
  }

  function switchLanguage(nextLanguage) {
    const target = new URL(window.location.href);
    target.searchParams.set("lang", nextLanguage);
    window.location.href = target.href;
  }

  function setupLanguageSelect() {
    const select = document.getElementById("languageSelect");
    if (!select) {
      return;
    }

    select.value = language;
    select.addEventListener("change", () => switchLanguage(select.value));
  }

  function localizePortfolioLinks() {
    document.querySelectorAll('a[href*="index.html"]').forEach((link) => {
      const target = new URL(link.href, window.location.href);
      target.searchParams.set("lang", language);
      link.href = target.href;
    });
  }

  setupLanguageSelect();
  localizePortfolioLinks();

  if (language !== "en") {
    return;
  }

  document.documentElement.lang = "en";
  translateTree(document.body);
  translateAttributes();
  localizeTitle();

  function refreshAfterInteraction() {
    window.setTimeout(() => {
      translateTree(document.body);
      translateAttributes();
      localizeTitle();
    }, 0);
  }

  document.addEventListener("click", refreshAfterInteraction);
  document.getElementById("projectSelect")?.addEventListener("change", refreshAfterInteraction);
})();
