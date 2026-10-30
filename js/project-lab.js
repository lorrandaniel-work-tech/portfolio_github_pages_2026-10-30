(() => {
  "use strict";

  const catalog = {
    "cloud-soc-guardian": {
      category: "Segurança defensiva | Projeto principal",
      title: "Cloud SOC Guardian",
      summary:
        "Uma demonstração defensiva de inventário, ingestão de eventos, regras de detecção, findings e relatórios para um fluxo de SOC enxuto.",
      objective:
        "Transformar sinais operacionais em evidências priorizadas para apoiar a análise de um time de Blue Team.",
      problem:
        "Ambientes cloud geram telemetria em volume e com formatos diferentes. Sem um fluxo de normalização e priorização, eventos importantes competem com ruído e a investigação se torna lenta.",
      solution:
        "O projeto organiza ativos e eventos, aplica regras defensivas, deduplica findings e produz relatórios em formatos simples para compartilhamento. Esta tela reproduz o fluxo com dados sintéticos, diretamente no navegador.",
      flow: ["Inventário", "Ingestão", "Normalização", "Regras", "Findings"],
      technologies: ["Python", "FastAPI", "SQLite", "Regras", "Markdown", "JSON", "Blue Team"],
      demoTitle: "Triagem defensiva local",
      demoDescription:
        "Carregue o cenário sintético, execute as regras e gere um relatório Markdown. A experiência é local; não há envio de logs ou dados para serviços externos.",
      demo: "guardian",
    },
    "enterprise-home-lab": {
      category: "Infraestrutura | Ambiente de laboratório",
      title: "Enterprise Home Lab",
      summary:
        "Um ambiente corporativo simulado para praticar identidade, serviços, virtualização, backup e observabilidade em uma topologia segura.",
      objective:
        "Reproduzir dependências comuns de infraestrutura para validar procedimentos de administração, hardening e continuidade operacional.",
      problem:
        "Testar mudanças diretamente em ambientes de produção aumenta risco e limita a experimentação. É preciso um espaço isolado que represente serviços corporativos reais.",
      solution:
        "O laboratório organiza os serviços por camadas, documenta dependências e permite validar a saúde básica de cada componente antes de uma alteração controlada.",
      flow: ["Hypervisor", "Identidade", "Serviços", "Backup", "Observabilidade"],
      technologies: ["Proxmox", "Windows Server", "AD DS", "Docker", "Linux", "Backup", "Hardening"],
      demoTitle: "Mapa de saúde do laboratório",
      demoDescription:
        "Confira uma fotografia local dos serviços e simule uma validação de pré-alteração para visualizar a sequência de checagens.",
      demo: "homelab",
    },
    "monitoramento-zabbix-grafana": {
      category: "Observabilidade | Métricas de infraestrutura",
      title: "Monitoramento com Zabbix + Grafana",
      summary:
        "Uma visão operacional de disponibilidade e capacidade, com métricas sintéticas de hosts, gatilhos e um painel temporal inspirado em dashboards Grafana.",
      objective:
        "Acompanhar sinais essenciais da infraestrutura para que desvios sejam vistos antes de impactarem a disponibilidade de serviços críticos.",
      problem:
        "Sem visibilidade contínua de CPU, memória, latência e disponibilidade, a equipe reage tarde e perde contexto histórico durante incidentes.",
      solution:
        "A combinação Zabbix e Grafana separa coleta, alertas e leitura visual. A simulação abaixo mostra uma série temporal local com troca de métricas e geração de alertas.",
      flow: ["Hosts", "Coleta", "Gatilhos", "Métricas", "Dashboard"],
      technologies: ["Zabbix", "Grafana", "Linux", "SNMP", "Dashboards", "Alertas", "SLA"],
      demoTitle: "Dashboard de infraestrutura",
      demoDescription:
        "Alterne as métricas, acrescente novas amostras e force um alerta de CPU. O gráfico é desenhado localmente em canvas, sem dependências externas.",
      demo: "monitoring",
    },
    "siem-wazuh": {
      category: "Segurança defensiva | SIEM",
      title: "SIEM com Wazuh",
      summary:
        "Uma base de centralização e análise de eventos de segurança para demonstrar ingestão de logs, regras e priorização de alertas.",
      objective:
        "Concentrar sinais relevantes de endpoints e servidores em um fluxo que facilite investigação, resposta e melhoria contínua de controles.",
      problem:
        "Logs distribuídos por hosts diferentes dificultam correlação e atrasam a identificação de comportamentos que merecem atenção de segurança.",
      solution:
        "O projeto utiliza uma trilha de eventos normalizados e regras de alto nível para evidenciar mudanças de privilégios, acessos fora do padrão e integridade de arquivos.",
      flow: ["Agentes", "Eventos", "Decodificação", "Regras", "Alertas"],
      technologies: ["Wazuh", "SIEM", "Linux", "FIM", "Alertas", "Inventário", "Blue Team"],
      demoTitle: "Fila de eventos de segurança",
      demoDescription:
        "Ingere eventos sintéticos e aplique regras locais para observar a criação de alertas priorizados.",
      demo: "wazuh",
    },
    "automacao-powershell": {
      category: "Automação | Administração Windows",
      title: "Automação PowerShell",
      summary:
        "Rotinas administrativas reproduzíveis para inventário, checagem de serviços, organização de evidências e relatórios operacionais.",
      objective:
        "Reduzir tarefas manuais repetitivas e oferecer resultados padronizados para a operação de infraestrutura.",
      problem:
        "Atividades administrativas feitas manualmente variam entre operadores, tomam tempo e tornam difícil comparar o estado de máquinas em diferentes momentos.",
      solution:
        "Scripts focados em leitura, validação e relatórios criam uma trilha consistente. A demonstração imita uma execução segura com resultados sintéticos, sem alterar o computador.",
      flow: ["Escopo", "Coleta", "Validação", "Relatório", "Evidências"],
      technologies: ["PowerShell", "Windows", "CSV", "Relatórios", "Inventário", "Automação"],
      demoTitle: "Execução administrativa simulada",
      demoDescription:
        "Execute um inventário sintético e exporte uma amostra CSV. Nenhum comando é executado no sistema operacional.",
      demo: "automation",
    },
    "diagnostico-windows-corporativo": {
      category: "Infraestrutura | Diagnóstico seguro",
      title: "Diagnóstico Corporativo Windows",
      summary:
        "Uma base somente leitura para reunir evidências de sistema, serviços e gerenciamento corporativo sem aplicar reparos automáticos.",
      objective:
        "Apoiar o troubleshooting com informações organizadas, reduzindo o tempo gasto para localizar o contexto de uma máquina corporativa.",
      problem:
        "Incidentes em endpoints frequentemente exigem dados de fontes diferentes. Coletas manuais são demoradas e podem omitir detalhes relevantes para o diagnóstico.",
      solution:
        "O projeto organiza verificações de saúde, serviços e gestão corporativa em um relatório reproduzível. A tela demonstra apenas dados fictícios e ações de leitura.",
      flow: ["Sistema", "Serviços", "Gestão", "Evidências", "Relatório"],
      technologies: ["PowerShell", "Windows", "Intune", "SCCM/MECM", "CSV", "Troubleshooting"],
      demoTitle: "Relatório de diagnóstico local",
      demoDescription:
        "Gere uma visão segura do endpoint fictício e baixe um relatório em texto para usar como exemplo de evidência operacional.",
      demo: "windows",
    },
  };

  const state = {
    guardian: {
      assets: 4,
      events: 5,
      findings: [],
      loaded: false,
    },
    wazuh: {
      ingested: false,
      detected: false,
    },
    homelab: {
      validated: false,
    },
    automation: {
      run: false,
    },
    windows: {
      run: false,
    },
    monitoring: {
      metric: "cpu",
      alertRaised: false,
      series: {
        cpu: [36, 42, 39, 46, 44, 51, 48, 53, 49, 56, 52, 58],
        memory: [61, 63, 64, 62, 65, 66, 67, 66, 68, 69, 68, 70],
        latency: [28, 31, 29, 34, 32, 30, 37, 35, 39, 36, 34, 38],
      },
    },
  };

  const metricConfig = {
    cpu: { label: "CPU", unit: "%", min: 0, max: 100, color: "#6ee7dd" },
    memory: { label: "Memória", unit: "%", min: 0, max: 100, color: "#f2c86d" },
    latency: { label: "Latência", unit: " ms", min: 0, max: 100, color: "#aeb5c8" },
  };

  const dom = {
    category: document.getElementById("projectCategory"),
    title: document.getElementById("projectTitle"),
    summary: document.getElementById("projectSummary"),
    objective: document.getElementById("projectObjective"),
    problem: document.getElementById("projectProblem"),
    solution: document.getElementById("projectSolution"),
    flow: document.getElementById("projectFlow"),
    technologies: document.getElementById("projectTechnologies"),
    metrics: document.getElementById("projectMetrics"),
    demoTitle: document.getElementById("demoTitle"),
    demoDescription: document.getElementById("demoDescription"),
    demoRoot: document.getElementById("demoRoot"),
    status: document.getElementById("statusMessage"),
    select: document.getElementById("projectSelect"),
    goToDemo: document.getElementById("goToDemo"),
  };

  const params = new URLSearchParams(window.location.search);
  let activeSlug = catalog[params.get("project")] ? params.get("project") : "cloud-soc-guardian";

  function localTimestamp() {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  }

  function getMetrics(slug) {
    const metrics = {
      "cloud-soc-guardian": [
        { value: String(state.guardian.assets), label: "ativos no cenário" },
        { value: String(state.guardian.loaded ? 12 : state.guardian.events), label: "eventos sintéticos" },
        { value: String(state.guardian.findings.length), label: "findings ativos" },
        { value: state.guardian.findings.filter((finding) => finding.severity === "Alta").length ? "Alta" : "0", label: "prioridade máxima" },
      ],
      "enterprise-home-lab": [
        { value: "5", label: "serviços mapeados" },
        { value: state.homelab.validated ? "5/5" : "4/5", label: "validações concluídas" },
        { value: "2", label: "domínios de teste" },
        { value: "Local", label: "ambiente isolado" },
      ],
      "monitoramento-zabbix-grafana": [
        { value: "3", label: "hosts observados" },
        { value: "99,97%", label: "disponibilidade exemplo" },
        { value: state.monitoring.alertRaised ? "1" : "0", label: "alertas ativos" },
        { value: "15 min", label: "janela de análise" },
      ],
      "siem-wazuh": [
        { value: state.wazuh.ingested ? "8" : "3", label: "eventos na fila" },
        { value: state.wazuh.detected ? "2" : "0", label: "alertas gerados" },
        { value: "3", label: "fontes simuladas" },
        { value: "Local", label: "ambiente de teste" },
      ],
      "automacao-powershell": [
        { value: state.automation.run ? "4" : "0", label: "hosts consultados" },
        { value: "Somente leitura", label: "modo de execução" },
        { value: "CSV", label: "saída disponível" },
        { value: state.automation.run ? "Pronto" : "Aguardando", label: "estado da rotina" },
      ],
      "diagnostico-windows-corporativo": [
        { value: state.windows.run ? "6" : "0", label: "verificações concluídas" },
        { value: "0", label: "alterações aplicadas" },
        { value: "TXT", label: "evidência exportável" },
        { value: state.windows.run ? "Coletado" : "Aguardando", label: "estado do relatório" },
      ],
    };

    return metrics[slug];
  }

  function buildMetricMarkup(metrics) {
    return metrics
      .map(
        (metric) => `
          <div class="metric-item">
            <span class="metric-value">${metric.value}</span>
            <span class="metric-label">${metric.label}</span>
          </div>
        `,
      )
      .join("");
  }

  function updateMetrics() {
    dom.metrics.innerHTML = buildMetricMarkup(getMetrics(activeSlug));
  }

  function renderProject({ scrollToDemo = false } = {}) {
    const project = catalog[activeSlug];
    document.title = `${project.title} | Lorran Daniel`;
    dom.category.textContent = project.category;
    dom.title.textContent = project.title;
    dom.summary.textContent = project.summary;
    dom.objective.textContent = project.objective;
    dom.problem.textContent = project.problem;
    dom.solution.textContent = project.solution;
    dom.flow.innerHTML = project.flow.map((step) => `<li>${step}</li>`).join("");
    dom.technologies.innerHTML = project.technologies.map((technology) => `<span>${technology}</span>`).join("");
    dom.demoTitle.textContent = project.demoTitle;
    dom.demoDescription.textContent = project.demoDescription;
    dom.select.value = activeSlug;
    dom.status.textContent = "";
    updateMetrics();
    renderDemo(project.demo);
    updateUrl();

    if (scrollToDemo) {
      window.setTimeout(() => {
        document.getElementById("demonstracao").scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }

  function updateUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set("project", activeSlug);
    if (!url.searchParams.has("view")) {
      url.searchParams.set("view", "overview");
    }
    window.history.replaceState({}, "", url);
  }

  function setStatus(message) {
    dom.status.textContent = message;
    updateMetrics();
  }

  function renderDemo(type) {
    const renderers = {
      guardian: renderGuardianDemo,
      homelab: renderHomeLabDemo,
      monitoring: renderMonitoringDemo,
      wazuh: renderWazuhDemo,
      automation: renderAutomationDemo,
      windows: renderWindowsDemo,
    };

    renderers[type]();
  }

  function renderGuardianDemo() {
    const findings = state.guardian.findings;
    const events = state.guardian.loaded
      ? [
          ["09:02", "cloud-audit", "Alteração de política IAM", "warn"],
          ["09:05", "vpn-gateway", "Múltiplas falhas de autenticação", "alert"],
          ["09:08", "web-portal", "Login administrativo autorizado", "ok"],
          ["09:11", "storage-prod", "Acesso a bucket sensível", "warn"],
        ]
      : [
          ["09:02", "cloud-audit", "Aguardando cenário de logs", "ok"],
          ["09:05", "vpn-gateway", "Aguardando cenário de logs", "ok"],
        ];

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Pipeline local de inventário, eventos, regras e relatório.</p>
          <div class="demo-actions">
            <button class="button" type="button" data-local-action="guardian-load">Carregar cenário</button>
            <button class="button button-primary" type="button" data-local-action="guardian-detect">Executar regras</button>
            <button class="button" type="button" data-local-action="guardian-report">Baixar relatório</button>
          </div>
        </div>
        <div class="demo-grid">
          <section class="demo-panel" aria-labelledby="guardianEventsTitle">
            <p class="panel-kicker">Eventos ingeridos</p>
            <h3 class="panel-title" id="guardianEventsTitle">Fila de telemetria</h3>
            <div class="data-table-wrap">
              <table class="data-table">
                <thead><tr><th>Hora</th><th>Origem</th><th>Evento</th><th>Estado</th></tr></thead>
                <tbody>
                  ${events
                    .map(
                      ([time, source, event, stateName]) => `
                        <tr>
                          <td>${time}</td><td>${source}</td><td>${event}</td>
                          <td><span class="state-pill ${stateName}">${stateName === "ok" ? "Normal" : stateName === "warn" ? "Revisar" : "Alerta"}</span></td>
                        </tr>`,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </section>
          <section class="demo-panel" aria-labelledby="guardianFindingsTitle">
            <p class="panel-kicker">Detecção</p>
            <h3 class="panel-title" id="guardianFindingsTitle">Findings deduplicados</h3>
            <ul class="finding-list">
              ${
                findings.length
                  ? findings
                      .map(
                        (finding) => `
                          <li class="finding-item ${finding.className}">
                            <strong>${finding.title}</strong>
                            <span>${finding.detail} | Severidade ${finding.severity}</span>
                          </li>`,
                      )
                      .join("")
                  : '<li class="finding-item"><strong>Sem findings ainda</strong><span>Execute as regras para correlacionar o cenário.</span></li>'
              }
            </ul>
          </section>
        </div>
      </div>
    `;
  }

  function renderHomeLabDemo() {
    const stateLabel = state.homelab.validated ? "Validado" : "Pendente";
    const rows = [
      ["pve-lab-01", "Hypervisor", "Online", "ok"],
      ["dc-lab-01", "AD DS e DNS", "Online", "ok"],
      ["docker-lab-01", "Serviços de laboratório", "Online", "ok"],
      ["backup-lab-01", "Rotina de backup", state.homelab.validated ? "Validado" : "Aguardando", state.homelab.validated ? "ok" : "warn"],
      ["monitor-lab-01", "Observabilidade", "Online", "ok"],
    ];

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Topologia local de serviços corporativos para testes controlados.</p>
          <div class="demo-actions">
            <button class="button button-primary" type="button" data-local-action="homelab-validate">Validar pré-alteração</button>
          </div>
        </div>
        <div class="demo-grid">
          <section class="demo-panel" aria-labelledby="homeLabTopologyTitle">
            <p class="panel-kicker">Topologia</p>
            <h3 class="panel-title" id="homeLabTopologyTitle">Serviços do ambiente</h3>
            <div class="data-table-wrap">
              <table class="data-table">
                <thead><tr><th>Nó</th><th>Função</th><th>Estado</th></tr></thead>
                <tbody>${rows
                  .map(
                    ([host, role, status, className]) => `<tr><td>${host}</td><td>${role}</td><td><span class="state-pill ${className}">${status}</span></td></tr>`,
                  )
                  .join("")}</tbody>
              </table>
            </div>
          </section>
          <section class="demo-panel" aria-labelledby="homeLabChecksTitle">
            <p class="panel-kicker">Checklist</p>
            <h3 class="panel-title" id="homeLabChecksTitle">Janela de manutenção</h3>
            <ul class="host-list">
              <li class="host-item ok"><strong>Resolução DNS</strong><span>Consulta entre os serviços de teste.</span></li>
              <li class="host-item ok"><strong>Espaço de backup</strong><span>Retenção local disponível para o cenário.</span></li>
              <li class="host-item ${state.homelab.validated ? "ok" : ""}"><strong>Plano de reversão</strong><span>${state.homelab.validated ? "Registrado para a alteração simulada." : `Status: ${stateLabel.toLowerCase()}.`}</span></li>
            </ul>
          </section>
        </div>
      </div>
    `;
  }

  function renderMonitoringDemo() {
    const activeMetric = metricConfig[state.monitoring.metric];
    const lastValue = state.monitoring.series[state.monitoring.metric].at(-1);
    const alertText = state.monitoring.alertRaised ? "Alta CPU em app-lab-01" : "Nenhum alerta crítico";

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Exemplo local de painel Grafana alimentado por dados sintéticos de monitoramento.</p>
          <div class="demo-actions">
            <button class="button" type="button" data-local-action="monitoring-sample">Adicionar amostra</button>
            <button class="button button-primary" type="button" data-local-action="monitoring-alert">Simular alerta de CPU</button>
          </div>
        </div>
        <div class="monitoring-layout">
          <section class="chart-panel" aria-labelledby="monitorChartTitle">
            <div class="chart-header">
              <div>
                <p class="panel-kicker">Grafana | série temporal</p>
                <h3 class="chart-title" id="monitorChartTitle">app-lab-01: ${activeMetric.label}</h3>
              </div>
              <div class="metric-tabs" role="group" aria-label="Métrica exibida">
                ${Object.entries(metricConfig)
                  .map(
                    ([key, metric]) => `
                      <button class="metric-tab" type="button" data-monitoring-metric="${key}" aria-pressed="${key === state.monitoring.metric}">
                        ${metric.label}
                      </button>`,
                  )
                  .join("")}
              </div>
            </div>
            <canvas class="chart-canvas" id="monitoringChart" width="860" height="300" role="img" aria-label="Gráfico temporal de ${activeMetric.label}"></canvas>
            <div class="legend" aria-label="Legenda do gráfico">
              <span>${activeMetric.label} atual: ${lastValue}${activeMetric.unit}</span>
              <span class="legend-alert">limiar de alerta</span>
              <span class="legend-muted">janela: 15 min</span>
            </div>
          </section>
          <aside class="summary-panel" aria-label="Resumo de monitoramento">
            <div>
              <p class="panel-kicker">Zabbix | itens</p>
              <h3 class="panel-title">Resumo do host</h3>
            </div>
            <div class="summary-row"><span>Host</span><strong>app-lab-01</strong></div>
            <div class="summary-row"><span>Coleta</span><strong>30 segundos</strong></div>
            <div class="summary-row"><span>Última leitura</span><strong class="summary-value" id="monitoringCurrentValue">${lastValue}${activeMetric.unit}</strong></div>
            <div class="summary-row"><span>Gatilho</span><strong class="summary-value ${state.monitoring.alertRaised ? "text-alert" : ""}" id="monitoringAlertText">${alertText}</strong></div>
          </aside>
        </div>
      </div>
    `;

    window.requestAnimationFrame(drawMonitoringChart);
  }

  function renderWazuhDemo() {
    const events = state.wazuh.ingested
      ? [
          ["wazuh-agent", "Alteração em /etc/ssh/sshd_config", "warn"],
          ["windows-agent", "Grupo Administradores atualizado", "alert"],
          ["linux-agent", "Verificação de integridade concluída", "ok"],
          ["wazuh-agent", "Falhas de autenticação acima do limiar", "alert"],
        ]
      : [
          ["wazuh-agent", "Heartbeat recebido", "ok"],
          ["windows-agent", "Inventário sincronizado", "ok"],
          ["linux-agent", "Verificação de integridade concluída", "ok"],
        ];
    const alerts = state.wazuh.detected
      ? [
          ["Possível brute force SSH", "Regra 5710 | 6 falhas em 2 min", "high"],
          ["Alteração de grupo privilegiado", "Regra 60106 | endpoint windows-agent", "medium"],
        ]
      : [];

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Fluxo de ingestão e correlação de eventos em uma fila SIEM fictícia.</p>
          <div class="demo-actions">
            <button class="button" type="button" data-local-action="wazuh-ingest">Ingerir eventos</button>
            <button class="button button-primary" type="button" data-local-action="wazuh-detect">Aplicar regras</button>
          </div>
        </div>
        <div class="demo-grid">
          <section class="demo-panel" aria-labelledby="wazuhQueueTitle">
            <p class="panel-kicker">Eventos</p>
            <h3 class="panel-title" id="wazuhQueueTitle">Fila de agentes</h3>
            <ul class="event-list">
              ${events
                .map(
                  ([source, event, className]) => `<li class="event-item ${className}"><strong>${source}</strong><span>${event}</span></li>`,
                )
                .join("")}
            </ul>
          </section>
          <section class="demo-panel" aria-labelledby="wazuhAlertTitle">
            <p class="panel-kicker">Regras</p>
            <h3 class="panel-title" id="wazuhAlertTitle">Alertas correlacionados</h3>
            <ul class="finding-list">
              ${
                alerts.length
                  ? alerts
                      .map(
                        ([title, detail, className]) => `<li class="finding-item ${className}"><strong>${title}</strong><span>${detail}</span></li>`,
                      )
                      .join("")
                  : '<li class="finding-item"><strong>Nenhuma regra aplicada</strong><span>Ingere eventos e aplique as regras de detecção.</span></li>'
              }
            </ul>
          </section>
        </div>
      </div>
    `;
  }

  function renderAutomationDemo() {
    const terminal = state.automation.run
      ? [
          "[09:15:02] Iniciando inventário de 4 hosts fictícios.",
          "[09:15:03] WS-023 | Disco: 61% livre | Serviço de backup: Running.",
          "[09:15:04] WS-024 | Disco: 47% livre | Serviço de backup: Running.",
          "[09:15:05] SRV-FILE-01 | Disco: 28% livre | Atenção: capacidade.",
          "[09:15:06] Coleta concluída. Nenhuma alteração foi executada.",
        ]
      : ["Pronto para iniciar uma coleta fictícia, somente leitura."];

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Simulação de uma rotina PowerShell administrativa e segura.</p>
          <div class="demo-actions">
            <button class="button button-primary" type="button" data-local-action="automation-run">Executar inventário</button>
            <button class="button" type="button" data-local-action="automation-export">Baixar CSV</button>
          </div>
        </div>
        <div class="demo-grid">
          <section class="demo-panel" aria-labelledby="automationTerminalTitle">
            <p class="panel-kicker">Saída simulada</p>
            <h3 class="panel-title" id="automationTerminalTitle">Console da rotina</h3>
            <ul class="terminal-lines">${terminal.map((line) => `<li class="terminal-line">${line}</li>`).join("")}</ul>
          </section>
          <section class="demo-panel" aria-labelledby="automationScopeTitle">
            <p class="panel-kicker">Escopo</p>
            <h3 class="panel-title" id="automationScopeTitle">Controles da automação</h3>
            <ul class="host-list">
              <li class="host-item ok"><strong>Somente leitura</strong><span>Não cria usuários, não altera serviços e não remove arquivos.</span></li>
              <li class="host-item ok"><strong>Resultado estruturado</strong><span>Os dados podem ser exportados em CSV para análise.</span></li>
              <li class="host-item"><strong>Uso demonstrativo</strong><span>Todos os hosts exibidos nesta página são fictícios.</span></li>
            </ul>
          </section>
        </div>
      </div>
    `;
  }

  function renderWindowsDemo() {
    const checks = state.windows.run
      ? [
          ["Sistema operacional", "Windows 11 Enterprise | Atualizado", "ok"],
          ["Armazenamento", "Disco C: com 52% livre", "ok"],
          ["Serviços", "Defender e Windows Update em execução", "ok"],
          ["Gerenciamento", "Dispositivo gerenciado por Intune", "ok"],
          ["Eventos recentes", "Sem erros críticos nas últimas 24h", "ok"],
          ["Conectividade", "Rede corporativa disponível", "ok"],
        ]
      : [["Coleta", "Aguardando a geração do relatório local", "warn"]];

    dom.demoRoot.innerHTML = `
      <div class="demo-workspace">
        <div class="demo-toolbar">
          <p>Leitura demonstrativa de sinais de saúde de um endpoint corporativo fictício.</p>
          <div class="demo-actions">
            <button class="button button-primary" type="button" data-local-action="windows-run">Gerar diagnóstico</button>
            <button class="button" type="button" data-local-action="windows-export">Baixar relatório TXT</button>
          </div>
        </div>
        <div class="demo-grid">
          <section class="demo-panel" aria-labelledby="windowsReportTitle">
            <p class="panel-kicker">Evidências</p>
            <h3 class="panel-title" id="windowsReportTitle">Resumo do endpoint</h3>
            <div class="data-table-wrap">
              <table class="data-table">
                <thead><tr><th>Verificação</th><th>Resultado</th><th>Estado</th></tr></thead>
                <tbody>${checks
                  .map(
                    ([check, result, className]) => `<tr><td>${check}</td><td>${result}</td><td><span class="state-pill ${className}">${className === "ok" ? "Normal" : "Aguardando"}</span></td></tr>`,
                  )
                  .join("")}</tbody>
              </table>
            </div>
          </section>
          <section class="demo-panel" aria-labelledby="windowsSafetyTitle">
            <p class="panel-kicker">Segurança</p>
            <h3 class="panel-title" id="windowsSafetyTitle">Limites da rotina</h3>
            <ul class="host-list">
              <li class="host-item ok"><strong>Sem remediação automática</strong><span>A rotina apenas organiza evidências para avaliação técnica.</span></li>
              <li class="host-item ok"><strong>Dados sintéticos</strong><span>Esta demonstração não lê informações do computador aberto.</span></li>
              <li class="host-item"><strong>Relatório local</strong><span>O arquivo TXT é gerado pelo próprio navegador.</span></li>
            </ul>
          </section>
        </div>
      </div>
    `;
  }

  function appendMonitoringSample() {
    const index = state.monitoring.series.cpu.length;
    const cpuValue = Math.min(92, Math.max(28, Math.round(50 + Math.sin(index * 1.3) * 14 + (index % 4) * 2)));
    const memoryValue = Math.min(88, Math.max(54, Math.round(65 + Math.sin(index * 0.85) * 6)));
    const latencyValue = Math.min(90, Math.max(18, Math.round(34 + Math.sin(index * 1.1) * 11)));
    state.monitoring.series.cpu.push(cpuValue);
    state.monitoring.series.memory.push(memoryValue);
    state.monitoring.series.latency.push(latencyValue);
  }

  function drawMonitoringChart() {
    const canvas = document.getElementById("monitoringChart");
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(320, Math.round(rect.width));
    const height = Math.max(180, Math.round(rect.height));

    if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
      canvas.width = width * ratio;
      canvas.height = height * ratio;
    }

    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    const config = metricConfig[state.monitoring.metric];
    const values = state.monitoring.series[state.monitoring.metric];
    const padding = { top: 22, right: 24, bottom: 32, left: 46 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const threshold = state.monitoring.metric === "cpu" ? 80 : state.monitoring.metric === "memory" ? 85 : 70;

    context.fillStyle = "#0a0d16";
    context.fillRect(0, 0, width, height);
    context.font = "12px system-ui";
    context.textBaseline = "middle";

    for (let index = 0; index <= 4; index += 1) {
      const y = padding.top + (plotHeight / 4) * index;
      const value = config.max - ((config.max - config.min) / 4) * index;
      context.strokeStyle = "rgba(226, 232, 240, 0.12)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(padding.left, y);
      context.lineTo(width - padding.right, y);
      context.stroke();
      context.fillStyle = "#aeb5c8";
      context.fillText(`${Math.round(value)}${config.unit}`, 3, y);
    }

    for (let index = 0; index < values.length; index += 3) {
      const x = padding.left + (index / Math.max(values.length - 1, 1)) * plotWidth;
      context.strokeStyle = "rgba(226, 232, 240, 0.08)";
      context.beginPath();
      context.moveTo(x, padding.top);
      context.lineTo(x, height - padding.bottom);
      context.stroke();
    }

    const thresholdY = padding.top + ((config.max - threshold) / (config.max - config.min)) * plotHeight;
    context.setLineDash([6, 5]);
    context.strokeStyle = "rgba(255, 122, 134, 0.85)";
    context.beginPath();
    context.moveTo(padding.left, thresholdY);
    context.lineTo(width - padding.right, thresholdY);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = "#ff7a86";
    context.fillText(`limiar ${threshold}${config.unit}`, Math.max(padding.left, width - padding.right - 104), thresholdY - 10);

    context.strokeStyle = config.color;
    context.lineWidth = 2.5;
    context.beginPath();
    values.forEach((value, index) => {
      const x = padding.left + (index / Math.max(values.length - 1, 1)) * plotWidth;
      const y = padding.top + ((config.max - value) / (config.max - config.min)) * plotHeight;
      if (index === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });
    context.stroke();

    const lastIndex = values.length - 1;
    const lastValue = values[lastIndex];
    const lastX = padding.left + (lastIndex / Math.max(values.length - 1, 1)) * plotWidth;
    const lastY = padding.top + ((config.max - lastValue) / (config.max - config.min)) * plotHeight;
    context.fillStyle = config.color;
    context.beginPath();
    context.arc(lastX, lastY, 4.5, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#f7f8ff";
    context.fillText(`${lastValue}${config.unit}`, Math.max(padding.left, lastX - 16), Math.max(13, lastY - 14));
    context.fillStyle = "#aeb5c8";
    context.fillText("-15 min", padding.left, height - 14);
    context.fillText("agora", Math.max(padding.left, width - padding.right - 35), height - 14);
  }

  function createDownload(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function guardianReport() {
    if (!state.guardian.findings.length) {
      runGuardianDetection();
    }

    const findings = state.guardian.findings
      .map((finding) => `- **${finding.severity}**: ${finding.title} - ${finding.detail}`)
      .join("\n");
    const report = `# Cloud SOC Guardian - Relatório local\n\nGerado em: ${localTimestamp()}\n\n## Resumo\n- Ativos: ${state.guardian.assets}\n- Eventos: ${state.guardian.loaded ? 12 : state.guardian.events}\n- Findings: ${state.guardian.findings.length}\n\n## Findings\n${findings}\n\n> Dados sintéticos gerados localmente para demonstração.\n`;
    createDownload("cloud-soc-guardian-relatorio.md", report, "text/markdown;charset=utf-8");
    setStatus("Relatório Markdown criado localmente e enviado para download.");
  }

  function runGuardianDetection() {
    state.guardian.loaded = true;
    state.guardian.events = 12;
    state.guardian.findings = [
      { title: "Possível ataque de senha em VPN", detail: "6 falhas seguidas do IP 198.51.100.42", severity: "Alta", className: "high" },
      { title: "Mudança de política IAM", detail: "Permissão sensível revisada no ambiente cloud", severity: "Média", className: "medium" },
      { title: "Acesso a bucket monitorado", detail: "Atividade registrada e correlacionada", severity: "Baixa", className: "low" },
    ];
  }

  function handleAction(action) {
    if (action === "guardian-load") {
      state.guardian.loaded = true;
      state.guardian.events = 12;
      renderGuardianDemo();
      setStatus("Cenário carregado: 4 ativos e 12 eventos sintéticos prontos para análise.");
      return;
    }

    if (action === "guardian-detect") {
      runGuardianDetection();
      renderGuardianDemo();
      setStatus("3 findings foram gerados; eventos semelhantes foram agrupados no mesmo resultado.");
      return;
    }

    if (action === "guardian-report") {
      guardianReport();
      return;
    }

    if (action === "homelab-validate") {
      state.homelab.validated = true;
      renderHomeLabDemo();
      setStatus("Validação concluída: dependências, backup e plano de reversão foram conferidos no cenário local.");
      return;
    }

    if (action === "monitoring-sample") {
      appendMonitoringSample();
      renderMonitoringDemo();
      setStatus(`Nova amostra de ${metricConfig[state.monitoring.metric].label.toLowerCase()} adicionada às ${localTimestamp()}.`);
      return;
    }

    if (action === "monitoring-alert") {
      state.monitoring.metric = "cpu";
      state.monitoring.alertRaised = true;
      state.monitoring.series.cpu.push(83, 88);
      state.monitoring.series.memory.push(72, 74);
      state.monitoring.series.latency.push(44, 52);
      renderMonitoringDemo();
      setStatus("Alerta simulado: CPU de app-lab-01 ultrapassou o limiar de 80%.");
      return;
    }

    if (action === "wazuh-ingest") {
      state.wazuh.ingested = true;
      renderWazuhDemo();
      setStatus("Eventos de três agentes sintéticos foram inseridos na fila local.");
      return;
    }

    if (action === "wazuh-detect") {
      state.wazuh.ingested = true;
      state.wazuh.detected = true;
      renderWazuhDemo();
      setStatus("Duas regras correlacionaram atividades que precisam de revisão do analista.");
      return;
    }

    if (action === "automation-run") {
      state.automation.run = true;
      renderAutomationDemo();
      setStatus("Inventário fictício concluído em modo somente leitura.");
      return;
    }

    if (action === "automation-export") {
      if (!state.automation.run) {
        state.automation.run = true;
        renderAutomationDemo();
      }
      createDownload(
        "inventario-powershell-exemplo.csv",
        "host,disco_livre,backup\nWS-023,61%,Running\nWS-024,47%,Running\nSRV-FILE-01,28%,Attention\n",
        "text/csv;charset=utf-8",
      );
      setStatus("CSV de exemplo criado localmente e enviado para download.");
      return;
    }

    if (action === "windows-run") {
      state.windows.run = true;
      renderWindowsDemo();
      setStatus("Diagnóstico sintético concluído sem executar reparos ou alterar configurações.");
      return;
    }

    if (action === "windows-export") {
      if (!state.windows.run) {
        state.windows.run = true;
        renderWindowsDemo();
      }
      createDownload(
        "diagnostico-windows-exemplo.txt",
        `DIAGNÓSTICO CORPORATIVO WINDOWS - EXEMPLO\nGerado em ${localTimestamp()}\n\nSistema: Windows 11 Enterprise\nGerenciamento: Intune\nServiços: Defender e Windows Update em execução\nAlterações aplicadas: nenhuma\n\nDados sintéticos locais para demonstração.\n`,
        "text/plain;charset=utf-8",
      );
      setStatus("Relatório TXT de exemplo criado localmente e enviado para download.");
    }
  }

  function initializeProjectSelect() {
    dom.select.innerHTML = Object.entries(catalog)
      .map(([slug, project]) => `<option value="${slug}">${project.title}</option>`)
      .join("");

    dom.select.addEventListener("change", () => {
      activeSlug = dom.select.value;
      renderProject();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-local-action]");
    if (actionButton) {
      handleAction(actionButton.dataset.localAction);
      return;
    }

    const metricButton = event.target.closest("[data-monitoring-metric]");
    if (metricButton) {
      state.monitoring.metric = metricButton.dataset.monitoringMetric;
      renderMonitoringDemo();
      setStatus(`Exibindo métrica de ${metricConfig[state.monitoring.metric].label.toLowerCase()} no gráfico local.`);
    }
  });

  dom.goToDemo.addEventListener("click", () => {
    document.getElementById("demonstracao").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(drawMonitoringChart);
  });

  initializeProjectSelect();
  renderProject({ scrollToDemo: params.get("view") === "demo" });
})();
