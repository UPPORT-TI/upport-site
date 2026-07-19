import {
  ArrowLeft,
  BadgeDollarSign,
  Bell,
  BellRing,
  Blocks,
  Boxes,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Code2,
  Columns3,
  Database,
  Factory,
  FileText,
  GitBranch,
  Globe2,
  LayoutDashboard,
  Landmark,
  LifeBuoy,
  ListTodo,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  PackageOpen,
  PanelsTopLeft,
  Phone,
  Play,
  Plus,
  ReceiptText,
  RefreshCw,
  Search,
  Send,
  Server,
  ServerCog,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Target,
  UsersRound,
  WalletCards,
  Workflow,
  X,
  Zap,
  createIcons,
} from "lucide";

type Language = "pt" | "en" | "es";
type Dictionary = Record<string, string>;

const FLAG_URLS: Record<Language, string> = {
  pt: new URL("../assets/flags/br.png", import.meta.url).href,
  en: new URL("../assets/flags/us.png", import.meta.url).href,
  es: new URL("../assets/flags/es.png", import.meta.url).href,
};

const LANGUAGE_KEY = "upport-language";
let activeLanguage: Language = "pt";

const sharedEn: Dictionary = {
  "Ir para o conteúdo": "Skip to content",
  Soluções: "Solutions",
  Clientes: "Clients",
  "TI gerenciada": "Managed IT",
  Contato: "Contact",
  "Área do cliente": "Client portal",
  "Falar com a Upport": "Talk to Upport",
  "Tecnologia para operações que precisam crescer sem perder o controle.":
    "Technology for operations that need to grow without losing control.",
  "ERP sob medida": "Custom ERP",
  "CRM hospedado": "Hosted CRM",
  Empresa: "Company",
  Privacidade: "Privacy",
  Atendimento: "Support",
  "Abrir chamado": "Open a ticket",
  "São Paulo e Grande SP": "São Paulo and Greater São Paulo",
  "São Paulo e Grande SP · CNPJ 66.298.127/0001-47":
    "São Paulo and Greater São Paulo · CNPJ 66.298.127/0001-47",
  "Upport. Todos os direitos reservados.": "Upport. All rights reserved.",
  "Fale conosco": "Contact us",
  "Como prefere falar?": "How would you like to talk?",
  Telefone: "Phone",
  "Ligar agora": "Call now",
  "E-mail": "Email",
  "Fechar contatos": "Close contact options",
  "Seg–Sex, 08h às 18h": "Mon–Fri, 8am to 6pm",
  "Falar com a Upport pelo WhatsApp": "Talk to Upport on WhatsApp",
  "Sua privacidade importa.": "Your privacy matters.",
  "Usamos cookies essenciais para o site funcionar e, com sua permissão, dados de navegação para melhorar a experiência.":
    "We use essential cookies to run the website and, with your permission, browsing data to improve the experience.",
  "Ver política de privacidade": "View privacy policy",
  "Recusar opcionais": "Reject optional",
  Configurar: "Configure",
  "Aceitar todos": "Accept all",
  "Preferências de cookies": "Cookie preferences",
  "Escolha quais recursos opcionais podem ser usados. Cookies essenciais permanecem ativos para segurança e funcionamento do site.":
    "Choose which optional features may be used. Essential cookies remain active for security and website operation.",
  "Cookies essenciais": "Essential cookies",
  "Guardam sua escolha de privacidade e mantêm recursos básicos funcionando.":
    "They store your privacy choice and keep basic features working.",
  "Sempre ativos": "Always active",
  "Análise e desempenho": "Analytics and performance",
  "Permite métricas anônimas de navegação para entendermos e melhorarmos a experiência.":
    "Allows anonymous browsing metrics so we can understand and improve the experience.",
  "Somente essenciais": "Essential only",
  "Salvar preferências": "Save preferences",
  "Revisar preferências de cookies": "Review cookie preferences",
  "Fechar preferências": "Close preferences",
  "Abrir menu": "Open menu",
  "Fechar menu": "Close menu",
  "Navegação principal": "Primary navigation",
  "Selecionar idioma": "Select language",
  "Preferências salvas. Cookies de análise autorizados.":
    "Preferences saved. Analytics cookies allowed.",
  "Preferências salvas. Somente cookies essenciais estão ativos.":
    "Preferences saved. Only essential cookies are active.",
};

const homeEn: Dictionary = {
  "Upport | Tecnologia para operações que não podem parar":
    "Upport | Technology for operations that cannot stop",
  "Infraestrutura, sistemas e operação":
    "Infrastructure, systems and operations",
  "Tecnologia que": "Technology that",
  sustenta: "powers",
  "o crescimento.": "growth.",
  "A Upport cuida da TI, organiza processos e implanta sistemas para sua empresa trabalhar com estabilidade, controle e segurança.":
    "Upport manages IT, organizes processes and deploys systems so your company can operate with stability, control and security.",
  "Agendar diagnóstico": "Schedule an assessment",
  "Conhecer soluções": "Explore solutions",
  "Atendimento remoto e presencial em São Paulo e Grande SP.":
    "Remote and on-site support in São Paulo and Greater São Paulo.",
  "Empresas que contam com a Upport": "Companies that trust Upport",
  "A plataforma Upport": "The Upport platform",
  "Da infraestrutura à gestão.": "From infrastructure to management.",
  "Três frentes que trabalham juntas para reduzir improviso, organizar a operação e dar visibilidade para quem decide.":
    "Three areas working together to reduce improvisation, organize operations and give decision-makers visibility.",
  "01 / Operação": "01 / Operations",
  "Suporte, monitoramento, segurança, redes e continuidade para sua equipe trabalhar.":
    "Support, monitoring, security, networks and continuity to keep your team working.",
  "Explorar serviço →": "Explore service →",
  "02 / Gestão": "02 / Management",
  "Um sistema construído em torno dos processos que tornam sua empresa única.":
    "A system built around the processes that make your company unique.",
  "Conhecer ERP →": "Explore ERP →",
  "03 / Relacionamento": "03 / Relationships",
  "Twenty configurado, protegido e operado pela Upport, com seus dados sob controle.":
    "Twenty configured, protected and operated by Upport, with your data under control.",
  "Conhecer CRM →": "Explore CRM →",
  "Você toca o negócio. A gente mantém a operação de pé.":
    "You run the business. We keep operations running.",
  "Acompanhamento contínuo para prevenir falhas, responder rápido e tirar a tecnologia da lista de preocupações.":
    "Continuous oversight to prevent failures, respond quickly and take technology off your worry list.",
  "Suporte remoto e presencial com processo e SLA":
    "Remote and on-site support with defined processes and SLAs",
  "Monitoramento de ativos, rede, servidores e links":
    "Asset, network, server and link monitoring",
  "Backup, segurança e manutenção preventiva":
    "Backup, security and preventive maintenance",
  "Inventário e visão executiva do ambiente":
    "Inventory and executive infrastructure overview",
  "Avaliar minha estrutura": "Assess my infrastructure",
  "Visão da operação": "Operations overview",
  "Ambiente acompanhado": "Monitored environment",
  "meta de resposta": "response target",
  monitoramento: "monitoring",
  "inventário visível": "visible inventory",
  "Confiança em operação": "Trusted in operation",
  "Tecnologia para empresas reais.": "Technology for real companies.",
  "De logística e varejo pet a serviços e operações digitais, a Upport entra onde estabilidade e organização fazem diferença.":
    "From logistics and pet retail to services and digital operations, Upport steps in where stability and organization make a difference.",
  "Cada parceria começa entendendo o que não pode parar e termina com uma operação mais previsível.":
    "Every partnership starts by understanding what cannot stop and ends with a more predictable operation.",
  "Tecnologia e logística": "Technology and logistics",
  "Grupo de soluções para o mercado pet": "Solutions group for the pet market",
  "Líder em soluções de injeção termoplástica":
    "Leader in thermoplastic injection solutions",
  "Marketing e operação digital": "Marketing and digital operations",
  "Criação e desenvolvimento de sites": "Website design and development",
  "O que assumimos": "What we take ownership of",
  "Menos fornecedores soltos. Mais responsabilidade.":
    "Fewer disconnected vendors. More accountability.",
  "A Upport conecta infraestrutura, segurança e suporte em uma operação única, com comunicação direta e visão de negócio.":
    "Upport connects infrastructure, security and support into one operation, with direct communication and business insight.",
  "Suporte e continuidade": "Support and continuity",
  "Atendimento estruturado para resolver incidentes e evitar que o mesmo problema volte.":
    "Structured support to resolve incidents and prevent the same problem from returning.",
  "Redes e infraestrutura": "Networks and infrastructure",
  "Ambientes organizados, documentados e preparados para acompanhar o crescimento.":
    "Organized, documented environments prepared to support growth.",
  "Segurança e backup": "Security and backup",
  "Camadas de proteção, cópias verificadas e processos para reduzir risco operacional.":
    "Protection layers, verified backups and processes that reduce operational risk.",
  "NOC e monitoramento": "NOC and monitoring",
  "Visibilidade contínua de ativos, servidores e links para agir antes da interrupção.":
    "Continuous visibility across assets, servers and links to act before disruption.",
  "Ecossistema de tecnologia": "Technology ecosystem",
  "Tecnologia de ponta, direto pra você.":
    "Leading technology, directly for you.",
  "Ferramentas reconhecidas, integradas e operadas para entregar uma solução completa, sem empilhar fornecedores.":
    "Recognized tools, integrated and operated to deliver a complete solution without stacking vendors.",
  "Novo produto / ERP Upport": "New product / Upport ERP",
  "Seu processo não precisa caber em um sistema engessado.":
    "Your process should not have to fit a rigid system.",
  "Mapeamos a operação e construímos um ERP modular para centralizar dados, automatizar rotinas e acompanhar o que importa.":
    "We map your operation and build a modular ERP to centralize data, automate routines and track what matters.",
  "Explorar ERP": "Explore ERP",
  "Pipeline comercial": "Sales pipeline",
  Atualizado: "Updated",
  NOVOS: "NEW",
  "Expansão de contrato": "Contract expansion",
  "Nova unidade": "New branch",
  "EM CONVERSA": "IN DISCUSSION",
  "Projeto de implantação": "Implementation project",
  PROPOSTA: "PROPOSAL",
  "Operação gerenciada": "Managed operations",
  "CRM Twenty gerenciado": "Managed Twenty CRM",
  "Seu CRM. Seus dados. Nossa operação.": "Your CRM. Your data. Our operation.",
  "Implantação, hospedagem, atualizações, backup e suporte para sua equipe usar um CRM moderno sem administrar servidores.":
    "Implementation, hosting, updates, backup and support so your team can use a modern CRM without managing servers.",
  "Conhecer CRM hospedado": "Explore hosted CRM",
  "Demonstração de painel de desempenho de servidores": "Server performance dashboard demonstration",
  "Desempenho de servidores": "Server performance",
  "Páginas do relatório": "Report pages",
  Páginas: "Pages",
  "Visão geral": "Overview",
  Capacidade: "Capacity",
  Incidentes: "Incidents",
  "SAÚDE DA INFRAESTRUTURA": "INFRASTRUCTURE HEALTH",
  "Atualizado agora": "Updated now",
  "Ambiente estável": "Stable environment",
  Disponibilidade: "Availability",
  "últimos 30 dias": "last 30 days",
  "Servidores online": "Servers online",
  "todos operacionais": "all operational",
  "CPU média": "Average CPU",
  "pico de 67%": "67% peak",
  "Alertas críticos": "Critical alerts",
  "nenhuma ação pendente": "no pending action",
  "Carga dos servidores": "Server load",
  Memória: "Memory",
  "CPU e memória nas últimas 24 horas": "CPU and memory over the last 24 hours",
  "Status por servidor": "Status by server",
  ativos: "active",
  Saudável: "Healthy",
  Atenção: "Attention",
  Crítico: "Critical",
  "Utilização por servidor": "Utilization by server",
  "CPU atual": "Current CPU",
  "Demonstração visual de monitoramento · indicadores variam conforme o ambiente":
    "Monitoring demonstration · indicators vary by environment",
  "Vamos conversar": "Let's talk",
  "Qual parte da sua operação precisa funcionar melhor?":
    "Which part of your operation needs to work better?",
  "Uma conversa direta para entender o cenário e indicar o próximo passo.":
    "A direct conversation to understand your situation and recommend the next step.",
  "Chamar no WhatsApp": "Message us on WhatsApp",
  "Enviar e-mail": "Send email",
};

const productEn: Dictionary = {
  "ERP sob medida | Upport": "Custom ERP | Upport",
  "ERP Upport / Projeto sob medida": "Upport ERP / Custom project",
  "Um sistema que segue o": "A system that follows",
  "seu processo.": "your process.",
  "Centralize operação, financeiro e indicadores em uma plataforma desenhada a partir da realidade da sua empresa.":
    "Centralize operations, finance and metrics in a platform designed around your company's reality.",
  "Mapear meu processo": "Map my process",
  "Ver possibilidades": "Explore possibilities",
  "Arquitetura modular": "Modular architecture",
  "Começa no essencial. Cresce com a operação.":
    "Start with the essentials. Grow with the operation.",
  "O escopo é definido depois de mapear o processo, sem prometer módulos que sua equipe não precisa.":
    "The scope is defined after mapping the process, without selling modules your team does not need.",
  Financeiro: "Finance",
  "Contas, fluxo de caixa, centros de custo e visão consolidada para apoiar decisões.":
    "Accounts, cash flow, cost centers and a consolidated view to support decisions.",
  Comercial: "Sales",
  "Pedidos, propostas, clientes e acompanhamento do ciclo de venda em um só fluxo.":
    "Orders, proposals, clients and sales-cycle tracking in one flow.",
  Estoque: "Inventory",
  "Movimentações, níveis de estoque e rastreabilidade conectados à operação.":
    "Movements, inventory levels and traceability connected to operations.",
  Operação: "Operations",
  "Rotinas, responsáveis, status e exceções organizados conforme o trabalho acontece.":
    "Routines, owners, statuses and exceptions organized as work happens.",
  Indicadores: "Metrics",
  "Painéis construídos em torno das perguntas que a gestão realmente precisa responder.":
    "Dashboards built around the questions management actually needs to answer.",
  Integrações: "Integrations",
  "Conexões com ferramentas existentes para reduzir digitação e dados espalhados.":
    "Connections with existing tools to reduce manual entry and scattered data.",
  "Como o projeto acontece": "How the project works",
  "Software começa entendendo gente e processo.":
    "Software starts by understanding people and processes.",
  Descoberta: "Discovery",
  "Mapeamos rotinas, gargalos, usuários e objetivos.":
    "We map routines, bottlenecks, users and goals.",
  Protótipo: "Prototype",
  "Validamos fluxos e telas antes de desenvolver.":
    "We validate flows and screens before development.",
  Implantação: "Implementation",
  "Entregas progressivas, migração e treinamento.":
    "Progressive deliveries, migration and training.",
  Evolução: "Evolution",
  "Suporte, infraestrutura e novas etapas do produto.":
    "Support, infrastructure and new product stages.",
  "Primeiro passo": "First step",
  "Mostre o processo que hoje depende de planilhas e improviso.":
    "Show us the process that currently depends on spreadsheets and improvisation.",
  "A gente organiza o problema antes de propor o sistema.":
    "We organize the problem before proposing the system.",
  "Conversar sobre o ERP": "Talk about ERP",
  "CRM Twenty gerenciado | Upport": "Managed Twenty CRM | Upport",
  "Twenty CRM / Hospedado pela Upport": "Twenty CRM / Hosted by Upport",
  "Relacionamentos organizados. Dados sob":
    "Organized relationships. Data under",
  "A Upport implanta, configura e mantém o Twenty para sua equipe vender melhor sem precisar administrar servidores.":
    "Upport deploys, configures and maintains Twenty so your team can sell better without managing servers.",
  "Planejar implantação": "Plan implementation",
  "Como funciona": "How it works",
  "Conta estratégica": "Strategic account",
  "Próxima ação hoje": "Next action today",
  Expansão: "Expansion",
  "Contato qualificado": "Qualified contact",
  "Projeto anual": "Annual project",
  "Reunião agendada": "Meeting scheduled",
  "Nova operação": "New operation",
  "Proposta enviada": "Proposal sent",
  "CRM sem peso operacional": "CRM without operational overhead",
  "A flexibilidade do open source com alguém responsável pela operação.":
    "Open-source flexibility with someone accountable for operations.",
  "O Twenty permite adaptar objetos, campos, visualizações e fluxos. A Upport cuida da camada técnica e da implantação.":
    "Twenty lets you adapt objects, fields, views and flows. Upport handles the technical layer and implementation.",
  "Hospedagem gerenciada": "Managed hosting",
  "Ambiente dedicado, domínio personalizado e acompanhamento da infraestrutura.":
    "Dedicated environment, custom domain and infrastructure oversight.",
  "Configuração do funil, usuários, campos e visualizações conforme seu processo comercial.":
    "Pipeline, users, fields and views configured around your sales process.",
  "Dados e backup": "Data and backup",
  "Rotinas de cópia, atualização e monitoramento para reduzir risco e indisponibilidade.":
    "Backup, update and monitoring routines to reduce risk and downtime.",
  Migração: "Migration",
  "Planejamento para trazer empresas, contatos e oportunidades de planilhas ou outro CRM.":
    "Planning to bring companies, contacts and opportunities from spreadsheets or another CRM.",
  Automações: "Automations",
  "Workflows e integrações para reduzir tarefas manuais e manter o time alinhado.":
    "Workflows and integrations to reduce manual tasks and keep the team aligned.",
  "Suporte próximo": "Local support",
  "Uma empresa brasileira para apoiar usuários e manter a plataforma funcionando.":
    "A Brazilian company supporting users and keeping the platform running.",
  "O que você recebe": "What you get",
  "Um CRM pronto para usar, não mais um servidor para cuidar.":
    "A CRM ready to use, not another server to manage.",
  "Entendemos processo, equipe, dados e integrações.":
    "We understand your process, team, data and integrations.",
  Configuração: "Configuration",
  "Montamos ambiente, domínio, funil e permissões.":
    "We set up the environment, domain, pipeline and permissions.",
  "Organizamos a entrada dos dados e validamos com o time.":
    "We organize data import and validate it with the team.",
  "Cuidamos de backup, atualizações, monitoramento e suporte.":
    "We handle backups, updates, monitoring and support.",
  "Próximo passo": "Next step",
  "Quer tirar o comercial das planilhas sem perder o controle dos dados?":
    "Ready to move sales beyond spreadsheets without losing control of your data?",
  "Vamos dimensionar usuários, migração e ambiente.":
    "Let's size users, migration and environment.",
  "Conversar sobre o CRM": "Talk about CRM",
};

const privacyEn: Dictionary = {
  "Privacidade e Cookies | Upport": "Privacy and Cookies | Upport",
  "Transparência e proteção": "Transparency and protection",
  "Privacidade e cookies.": "Privacy and cookies.",
  "Como a Upport coleta, utiliza e protege dados pessoais em seus canais digitais.":
    "How Upport collects, uses and protects personal data across its digital channels.",
  "Última atualização: 18 de julho de 2026.": "Last updated: July 18, 2026.",
  "Dados coletados": "Data collected",
  "Como utilizamos": "How we use data",
  Compartilhamento: "Sharing",
  "Seus direitos": "Your rights",
  Segurança: "Security",
  "Sobre esta política": "About this policy",
  "A Upport Tecnologia trata dados pessoais com responsabilidade e em conformidade com a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018. Esta política se aplica ao site, aos formulários de contato e aos canais comerciais da empresa.":
    "Upport Tecnologia processes personal data responsibly and in accordance with Brazil's General Data Protection Law, Law No. 13,709/2018. This policy applies to the website, contact forms and company sales channels.",
  "1. Dados coletados": "1. Data collected",
  "Coletamos apenas informações necessárias para responder solicitações, preparar propostas e prestar os serviços contratados.":
    "We collect only the information needed to answer requests, prepare proposals and provide contracted services.",
  "Nome, cargo e empresa;": "Name, role and company;",
  "E-mail corporativo e telefone;": "Business email and phone;",
  "Informações enviadas voluntariamente em mensagens e formulários;":
    "Information voluntarily submitted in messages and forms;",
  "Dados técnicos essenciais, como endereço IP, navegador e registros de segurança.":
    "Essential technical data such as IP address, browser and security logs.",
  "2. Como utilizamos": "2. How we use data",
  "Responder contatos e solicitações de proposta;":
    "Respond to contacts and proposal requests;",
  "Prestar suporte e executar contratos;":
    "Provide support and perform contracts;",
  "Proteger nossos sistemas e prevenir uso indevido;":
    "Protect our systems and prevent misuse;",
  "Cumprir obrigações legais e regulatórias;":
    "Comply with legal and regulatory obligations;",
  "Melhorar o site quando houver consentimento para dados opcionais.":
    "Improve the website when consent is given for optional data.",
  "3. Compartilhamento": "3. Sharing",
  "A Upport não vende dados pessoais. Informações podem ser compartilhadas com fornecedores de infraestrutura, comunicação e software quando isso for necessário para prestar o serviço, sempre limitado à finalidade correspondente e sujeito a medidas de proteção.":
    "Upport does not sell personal data. Information may be shared with infrastructure, communication and software providers when needed to deliver the service, always limited to the relevant purpose and subject to safeguards.",
  "4. Cookies": "4. Cookies",
  "Cookies essenciais mantêm recursos de navegação e segurança funcionando. Cookies opcionais de análise somente devem ser utilizados após sua escolha no aviso de consentimento. Você pode aceitar, recusar ou revisar a preferência pelo botão “Cookies” disponível no site.":
    "Essential cookies keep navigation and security features working. Optional analytics cookies should only be used after your choice in the consent notice. You can accept, reject or review your preference through the “Cookies” button on the site.",
  "5. Seus direitos": "5. Your rights",
  "Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação quando aplicável, além de informações sobre compartilhamento e revogação de consentimento.":
    "Under the LGPD, data subjects may request confirmation of processing, access, correction, anonymization, portability or deletion where applicable, as well as information about sharing and withdrawal of consent.",
  "6. Segurança e retenção": "6. Security and retention",
  "Adotamos medidas técnicas e administrativas compatíveis com os riscos do tratamento. Os dados são mantidos somente pelo período necessário para cumprir a finalidade informada, obrigações contratuais, legais ou o exercício regular de direitos.":
    "We adopt technical and administrative measures appropriate to processing risks. Data is kept only for the period needed to fulfill the stated purpose, contractual and legal obligations or the regular exercise of rights.",
  "7. Contato sobre privacidade": "7. Privacy contact",
  "Para dúvidas ou solicitações relacionadas a dados pessoais, escreva para":
    "For questions or requests related to personal data, write to",
  ". Podemos solicitar informações adicionais para confirmar a identidade do titular antes de atender uma solicitação.":
    ". We may request additional information to confirm the data subject's identity before fulfilling a request.",
};

const en: Dictionary = { ...sharedEn, ...homeEn, ...productEn, ...privacyEn };

const es: Dictionary = Object.fromEntries(
  Object.entries(en).map(([key, value]) => [key, value]),
);

Object.assign(es, {
  "Ir para o conteúdo": "Ir al contenido",
  Soluções: "Soluciones",
  Clientes: "Clientes",
  "TI gerenciada": "TI gestionada",
  Contato: "Contacto",
  "Área do cliente": "Área del cliente",
  "Falar com a Upport": "Hablar con Upport",
  "Infraestrutura, sistemas e operação":
    "Infraestructura, sistemas y operación",
  "Tecnologia que": "Tecnología que",
  sustenta: "impulsa",
  "o crescimento.": "el crecimiento.",
  "A Upport cuida da TI, organiza processos e implanta sistemas para sua empresa trabalhar com estabilidade, controle e segurança.":
    "Upport gestiona la TI, organiza procesos e implementa sistemas para que su empresa trabaje con estabilidad, control y seguridad.",
  "Agendar diagnóstico": "Agendar diagnóstico",
  "Conhecer soluções": "Conocer soluciones",
  "Empresas que contam com a Upport": "Empresas que confían en Upport",
  "A plataforma Upport": "La plataforma Upport",
  "Da infraestrutura à gestão.": "De la infraestructura a la gestión.",
  "Você toca o negócio. A gente mantém a operação de pé.":
    "Usted dirige el negocio. Nosotros mantenemos la operación en marcha.",
  "Demonstração de painel de desempenho de servidores": "Demostración de panel de rendimiento de servidores",
  "Desempenho de servidores": "Rendimiento de servidores",
  "Páginas do relatório": "Páginas del informe",
  Páginas: "Páginas",
  "Visão geral": "Vista general",
  Capacidade: "Capacidad",
  Incidentes: "Incidentes",
  "SAÚDE DA INFRAESTRUTURA": "SALUD DE LA INFRAESTRUCTURA",
  "Atualizado agora": "Actualizado ahora",
  "Ambiente estável": "Entorno estable",
  Disponibilidade: "Disponibilidad",
  "últimos 30 dias": "últimos 30 días",
  "Servidores online": "Servidores en línea",
  "todos operacionais": "todos operativos",
  "CPU média": "CPU media",
  "pico de 67%": "pico del 67%",
  "Alertas críticos": "Alertas críticas",
  "nenhuma ação pendente": "ninguna acción pendiente",
  "Carga dos servidores": "Carga de servidores",
  Memória: "Memoria",
  "CPU e memória nas últimas 24 horas": "CPU y memoria en las últimas 24 horas",
  "Status por servidor": "Estado por servidor",
  ativos: "activos",
  Saudável: "Saludable",
  Atenção: "Atención",
  Crítico: "Crítico",
  "Utilização por servidor": "Uso por servidor",
  "CPU atual": "CPU actual",
  "Demonstração visual de monitoramento · indicadores variam conforme o ambiente":
    "Demostración visual de monitoreo · los indicadores varían según el entorno",
  "Tecnologia para empresas reais.": "Tecnología para empresas reales.",
  "O que assumimos": "De qué nos responsabilizamos",
  "Menos fornecedores soltos. Mais responsabilidade.":
    "Menos proveedores desconectados. Más responsabilidad.",
  "Tecnologia de ponta, direto pra você.":
    "Tecnología de vanguardia, directamente para usted.",
  "Seu processo não precisa caber em um sistema engessado.":
    "Su proceso no tiene que encajar en un sistema rígido.",
  "Seu CRM. Seus dados. Nossa operação.":
    "Su CRM. Sus datos. Nuestra operación.",
  "Vamos conversar": "Hablemos",
  "Qual parte da sua operação precisa funcionar melhor?":
    "¿Qué parte de su operación necesita funcionar mejor?",
  "Chamar no WhatsApp": "Escribir por WhatsApp",
  "Enviar e-mail": "Enviar correo",
  "ERP sob medida": "ERP a medida",
  "CRM hospedado": "CRM alojado",
  Privacidade: "Privacidad",
  Atendimento: "Atención",
  "Abrir chamado": "Abrir ticket",
  "Preferências de cookies": "Preferencias de cookies",
  "Sua privacidade importa.": "Su privacidad importa.",
  "Recusar opcionais": "Rechazar opcionales",
  Configurar: "Configurar",
  "Aceitar todos": "Aceptar todo",
  "Cookies essenciais": "Cookies esenciales",
  "Sempre ativos": "Siempre activos",
  "Análise e desempenho": "Análisis y rendimiento",
  "Somente essenciais": "Solo esenciales",
  "Salvar preferências": "Guardar preferencias",
  "ERP Upport / Projeto sob medida": "ERP Upport / Proyecto a medida",
  "Um sistema que segue o": "Un sistema que sigue",
  "seu processo.": "su proceso.",
  "Mapear meu processo": "Mapear mi proceso",
  "Ver possibilidades": "Ver posibilidades",
  "Arquitetura modular": "Arquitectura modular",
  Financeiro: "Finanzas",
  Comercial: "Ventas",
  Estoque: "Inventario",
  Operação: "Operación",
  Indicadores: "Indicadores",
  Integrações: "Integraciones",
  "Como o projeto acontece": "Cómo funciona el proyecto",
  Descoberta: "Descubrimiento",
  Protótipo: "Prototipo",
  Implantação: "Implementación",
  Evolução: "Evolución",
  "Primeiro passo": "Primer paso",
  "Conversar sobre o ERP": "Hablar sobre el ERP",
  "Twenty CRM / Hospedado pela Upport": "Twenty CRM / Alojado por Upport",
  "Relacionamentos organizados. Dados sob":
    "Relaciones organizadas. Datos bajo",
  "Planejar implantação": "Planificar implementación",
  "Como funciona": "Cómo funciona",
  "Pipeline comercial": "Pipeline comercial",
  Atualizado: "Actualizado",
  NOVOS: "NUEVOS",
  "EM CONVERSA": "EN CONVERSACIÓN",
  PROPOSTA: "PROPUESTA",
  "CRM sem peso operacional": "CRM sin carga operativa",
  "Hospedagem gerenciada": "Alojamiento gestionado",
  "Dados e backup": "Datos y copias de seguridad",
  Migração: "Migración",
  Automações: "Automatizaciones",
  "Suporte próximo": "Soporte cercano",
  "O que você recebe": "Lo que recibe",
  Configuração: "Configuración",
  "Próximo passo": "Siguiente paso",
  "Conversar sobre o CRM": "Hablar sobre el CRM",
  "Transparência e proteção": "Transparencia y protección",
  "Privacidade e cookies.": "Privacidad y cookies.",
  "Dados coletados": "Datos recopilados",
  "Como utilizamos": "Cómo los utilizamos",
  Compartilhamento: "Compartir datos",
  "Seus direitos": "Sus derechos",
  Segurança: "Seguridad",
  "Sobre esta política": "Sobre esta política",
  "1. Dados coletados": "1. Datos recopilados",
  "2. Como utilizamos": "2. Cómo utilizamos los datos",
  "3. Compartilhamento": "3. Compartir datos",
  "4. Cookies": "4. Cookies",
  "5. Seus direitos": "5. Sus derechos",
  "6. Segurança e retenção": "6. Seguridad y retención",
  "7. Contato sobre privacidade": "7. Contacto de privacidad",
});

Object.assign(es, {
  "Tecnologia para operações que precisam crescer sem perder o controle.":
    "Tecnología para operaciones que necesitan crecer sin perder el control.",
  "São Paulo e Grande SP": "São Paulo y Gran São Paulo",
  "São Paulo e Grande SP · CNPJ 66.298.127/0001-47":
    "São Paulo y Gran São Paulo · CNPJ 66.298.127/0001-47",
  "Upport. Todos os direitos reservados.":
    "Upport. Todos los derechos reservados.",
  "Fale conosco": "Contáctenos",
  "Como prefere falar?": "¿Cómo prefiere hablar?",
  Telefone: "Teléfono",
  "Ligar agora": "Llamar ahora",
  "E-mail": "Correo electrónico",
  "Fechar contatos": "Cerrar opciones de contacto",
  "Seg–Sex, 08h às 18h": "Lun–Vie, 8:00 a 18:00",
  "Falar com a Upport pelo WhatsApp": "Hablar con Upport por WhatsApp",
  "Usamos cookies essenciais para o site funcionar e, com sua permissão, dados de navegação para melhorar a experiência.":
    "Utilizamos cookies esenciales para el funcionamiento del sitio y, con su permiso, datos de navegación para mejorar la experiencia.",
  "Ver política de privacidade": "Ver política de privacidad",
  "Escolha quais recursos opcionais podem ser usados. Cookies essenciais permanecem ativos para segurança e funcionamento do site.":
    "Elija qué recursos opcionales pueden utilizarse. Las cookies esenciales permanecen activas para la seguridad y el funcionamiento del sitio.",
  "Guardam sua escolha de privacidade e mantêm recursos básicos funcionando.":
    "Guardan su elección de privacidad y mantienen las funciones básicas operativas.",
  "Permite métricas anônimas de navegação para entendermos e melhorarmos a experiência.":
    "Permite métricas anónimas de navegación para comprender y mejorar la experiencia.",
  "Revisar preferências de cookies": "Revisar preferencias de cookies",
  "Fechar preferências": "Cerrar preferencias",
  "Abrir menu": "Abrir menú",
  "Fechar menu": "Cerrar menú",
  "Navegação principal": "Navegación principal",
  "Selecionar idioma": "Seleccionar idioma",
  "Preferências salvas. Cookies de análise autorizados.":
    "Preferencias guardadas. Cookies de análisis autorizadas.",
  "Preferências salvas. Somente cookies essenciais estão ativos.":
    "Preferencias guardadas. Solo están activas las cookies esenciales.",
  "Upport | Tecnologia para operações que não podem parar":
    "Upport | Tecnología para operaciones que no pueden detenerse",
  "Atendimento remoto e presencial em São Paulo e Grande SP.":
    "Atención remota y presencial en São Paulo y Gran São Paulo.",
  "Três frentes que trabalham juntas para reduzir improviso, organizar a operação e dar visibilidade para quem decide.":
    "Tres áreas que trabajan juntas para reducir la improvisación, organizar la operación y dar visibilidad a quienes deciden.",
  "01 / Operação": "01 / Operación",
  "Suporte, monitoramento, segurança, redes e continuidade para sua equipe trabalhar.":
    "Soporte, monitoreo, seguridad, redes y continuidad para que su equipo pueda trabajar.",
  "Explorar serviço →": "Explorar servicio →",
  "02 / Gestão": "02 / Gestión",
  "Um sistema construído em torno dos processos que tornam sua empresa única.":
    "Un sistema construido en torno a los procesos que hacen única a su empresa.",
  "Conhecer ERP →": "Conocer ERP →",
  "03 / Relacionamento": "03 / Relaciones",
  "Twenty configurado, protegido e operado pela Upport, com seus dados sob controle.":
    "Twenty configurado, protegido y operado por Upport, con sus datos bajo control.",
  "Conhecer CRM →": "Conocer CRM →",
  "Acompanhamento contínuo para prevenir falhas, responder rápido e tirar a tecnologia da lista de preocupações.":
    "Supervisión continua para prevenir fallos, responder rápidamente y quitar la tecnología de su lista de preocupaciones.",
  "Suporte remoto e presencial com processo e SLA":
    "Soporte remoto y presencial con procesos y SLA",
  "Monitoramento de ativos, rede, servidores e links":
    "Monitoreo de activos, red, servidores y enlaces",
  "Backup, segurança e manutenção preventiva":
    "Copias de seguridad, seguridad y mantenimiento preventivo",
  "Inventário e visão executiva do ambiente":
    "Inventario y visión ejecutiva del entorno",
  "Avaliar minha estrutura": "Evaluar mi infraestructura",
  "Visão da operação": "Visión de la operación",
  "Ambiente acompanhado": "Entorno monitoreado",
  "meta de resposta": "objetivo de respuesta",
  monitoramento: "monitoreo",
  "inventário visível": "inventario visible",
  "Confiança em operação": "Confianza en operación",
  "De logística e varejo pet a serviços e operações digitais, a Upport entra onde estabilidade e organização fazem diferença.":
    "Desde logística y comercio pet hasta servicios y operaciones digitales, Upport actúa donde la estabilidad y la organización marcan la diferencia.",
  "Cada parceria começa entendendo o que não pode parar e termina com uma operação mais previsível.":
    "Cada alianza comienza entendiendo lo que no puede detenerse y termina con una operación más predecible.",
  "Tecnologia e logística": "Tecnología y logística",
  "Grupo de soluções para o mercado pet":
    "Grupo de soluciones para el mercado pet",
  "Líder em soluções de injeção termoplástica":
    "Líder en soluciones de inyección termoplástica",
  "Marketing e operação digital": "Marketing y operación digital",
  "Criação e desenvolvimento de sites": "Creación y desarrollo de sitios web",
  "A Upport conecta infraestrutura, segurança e suporte em uma operação única, com comunicação direta e visão de negócio.":
    "Upport conecta infraestructura, seguridad y soporte en una única operación, con comunicación directa y visión de negocio.",
  "Suporte e continuidade": "Soporte y continuidad",
  "Atendimento estruturado para resolver incidentes e evitar que o mesmo problema volte.":
    "Atención estructurada para resolver incidentes y evitar que el mismo problema vuelva.",
  "Redes e infraestrutura": "Redes e infraestructura",
  "Ambientes organizados, documentados e preparados para acompanhar o crescimento.":
    "Entornos organizados, documentados y preparados para acompañar el crecimiento.",
  "Segurança e backup": "Seguridad y copias de seguridad",
  "Camadas de proteção, cópias verificadas e processos para reduzir risco operacional.":
    "Capas de protección, copias verificadas y procesos para reducir el riesgo operativo.",
  "NOC e monitoramento": "NOC y monitoreo",
  "Visibilidade contínua de ativos, servidores e links para agir antes da interrupção.":
    "Visibilidad continua de activos, servidores y enlaces para actuar antes de una interrupción.",
  "Ecossistema de tecnologia": "Ecosistema tecnológico",
  "Ferramentas reconhecidas, integradas e operadas para entregar uma solução completa, sem empilhar fornecedores.":
    "Herramientas reconocidas, integradas y operadas para ofrecer una solución completa sin acumular proveedores.",
  "Novo produto / ERP Upport": "Nuevo producto / ERP Upport",
  "Mapeamos a operação e construímos um ERP modular para centralizar dados, automatizar rotinas e acompanhar o que importa.":
    "Mapeamos la operación y construimos un ERP modular para centralizar datos, automatizar rutinas y seguir lo que importa.",
  "Explorar ERP": "Explorar ERP",
  "Expansão de contrato": "Ampliación de contrato",
  "Nova unidade": "Nueva unidad",
  "Projeto de implantação": "Proyecto de implementación",
  "Operação gerenciada": "Operación gestionada",
  "CRM Twenty gerenciado": "CRM Twenty gestionado",
  "Implantação, hospedagem, atualizações, backup e suporte para sua equipe usar um CRM moderno sem administrar servidores.":
    "Implementación, alojamiento, actualizaciones, copias de seguridad y soporte para que su equipo use un CRM moderno sin administrar servidores.",
  "Conhecer CRM hospedado": "Conocer CRM alojado",
  "Uma conversa direta para entender o cenário e indicar o próximo passo.":
    "Una conversación directa para entender el escenario e indicar el siguiente paso.",
  "ERP sob medida | Upport": "ERP a medida | Upport",
  "Centralize operação, financeiro e indicadores em uma plataforma desenhada a partir da realidade da sua empresa.":
    "Centralice operaciones, finanzas e indicadores en una plataforma diseñada a partir de la realidad de su empresa.",
  "Começa no essencial. Cresce com a operação.":
    "Comienza con lo esencial. Crece con la operación.",
  "O escopo é definido depois de mapear o processo, sem prometer módulos que sua equipe não precisa.":
    "El alcance se define después de mapear el proceso, sin prometer módulos que su equipo no necesita.",
  "Contas, fluxo de caixa, centros de custo e visão consolidada para apoiar decisões.":
    "Cuentas, flujo de caja, centros de costo y una visión consolidada para apoyar decisiones.",
  "Pedidos, propostas, clientes e acompanhamento do ciclo de venda em um só fluxo.":
    "Pedidos, propuestas, clientes y seguimiento del ciclo de venta en un solo flujo.",
  "Movimentações, níveis de estoque e rastreabilidade conectados à operação.":
    "Movimientos, niveles de inventario y trazabilidad conectados a la operación.",
  "Rotinas, responsáveis, status e exceções organizados conforme o trabalho acontece.":
    "Rutinas, responsables, estados y excepciones organizados conforme sucede el trabajo.",
  "Painéis construídos em torno das perguntas que a gestão realmente precisa responder.":
    "Paneles construidos en torno a las preguntas que la gestión realmente necesita responder.",
  "Conexões com ferramentas existentes para reduzir digitação e dados espalhados.":
    "Conexiones con herramientas existentes para reducir la digitación y los datos dispersos.",
  "Software começa entendendo gente e processo.":
    "El software comienza entendiendo a las personas y los procesos.",
  "Mapeamos rotinas, gargalos, usuários e objetivos.":
    "Mapeamos rutinas, cuellos de botella, usuarios y objetivos.",
  "Validamos fluxos e telas antes de desenvolver.":
    "Validamos flujos y pantallas antes de desarrollar.",
  "Entregas progressivas, migração e treinamento.":
    "Entregas progresivas, migración y capacitación.",
  "Suporte, infraestrutura e novas etapas do produto.":
    "Soporte, infraestructura y nuevas etapas del producto.",
  "Mostre o processo que hoje depende de planilhas e improviso.":
    "Muéstrenos el proceso que hoy depende de hojas de cálculo e improvisación.",
  "A gente organiza o problema antes de propor o sistema.":
    "Organizamos el problema antes de proponer el sistema.",
  "CRM Twenty gerenciado | Upport": "CRM Twenty gestionado | Upport",
  "A Upport implanta, configura e mantém o Twenty para sua equipe vender melhor sem precisar administrar servidores.":
    "Upport implementa, configura y mantiene Twenty para que su equipo venda mejor sin administrar servidores.",
  "Conta estratégica": "Cuenta estratégica",
  "Próxima ação hoje": "Próxima acción hoy",
  Expansão: "Expansión",
  "Contato qualificado": "Contacto calificado",
  "Projeto anual": "Proyecto anual",
  "Reunião agendada": "Reunión programada",
  "Nova operação": "Nueva operación",
  "Proposta enviada": "Propuesta enviada",
  "A flexibilidade do open source com alguém responsável pela operação.":
    "La flexibilidad del código abierto con alguien responsable de la operación.",
  "O Twenty permite adaptar objetos, campos, visualizações e fluxos. A Upport cuida da camada técnica e da implantação.":
    "Twenty permite adaptar objetos, campos, vistas y flujos. Upport se encarga de la capa técnica y la implementación.",
  "Ambiente dedicado, domínio personalizado e acompanhamento da infraestrutura.":
    "Entorno dedicado, dominio personalizado y supervisión de la infraestructura.",
  "Configuração do funil, usuários, campos e visualizações conforme seu processo comercial.":
    "Configuración del embudo, usuarios, campos y vistas según su proceso comercial.",
  "Rotinas de cópia, atualização e monitoramento para reduzir risco e indisponibilidade.":
    "Rutinas de copia, actualización y monitoreo para reducir riesgos e indisponibilidad.",
  "Planejamento para trazer empresas, contatos e oportunidades de planilhas ou outro CRM.":
    "Planificación para importar empresas, contactos y oportunidades desde hojas de cálculo u otro CRM.",
  "Workflows e integrações para reduzir tarefas manuais e manter o time alinhado.":
    "Flujos de trabajo e integraciones para reducir tareas manuales y mantener al equipo alineado.",
  "Uma empresa brasileira para apoiar usuários e manter a plataforma funcionando.":
    "Una empresa brasileña para apoyar a los usuarios y mantener la plataforma funcionando.",
  "Um CRM pronto para usar, não mais um servidor para cuidar.":
    "Un CRM listo para usar, no otro servidor que mantener.",
  "Entendemos processo, equipe, dados e integrações.":
    "Entendemos el proceso, el equipo, los datos y las integraciones.",
  "Montamos ambiente, domínio, funil e permissões.":
    "Configuramos el entorno, dominio, embudo y permisos.",
  "Organizamos a entrada dos dados e validamos com o time.":
    "Organizamos la entrada de datos y la validamos con el equipo.",
  "Cuidamos de backup, atualizações, monitoramento e suporte.":
    "Nos encargamos de copias de seguridad, actualizaciones, monitoreo y soporte.",
  "Quer tirar o comercial das planilhas sem perder o controle dos dados?":
    "¿Quiere sacar el área comercial de las hojas de cálculo sin perder el control de los datos?",
  "Vamos dimensionar usuários, migração e ambiente.":
    "Definamos usuarios, migración y entorno.",
  "Privacidade e Cookies | Upport": "Privacidad y Cookies | Upport",
  "Como a Upport coleta, utiliza e protege dados pessoais em seus canais digitais.":
    "Cómo Upport recopila, utiliza y protege datos personales en sus canales digitales.",
  "Última atualização: 18 de julho de 2026.":
    "Última actualización: 18 de julio de 2026.",
  "A Upport Tecnologia trata dados pessoais com responsabilidade e em conformidade com a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018. Esta política se aplica ao site, aos formulários de contato e aos canais comerciais da empresa.":
    "Upport Tecnologia trata los datos personales con responsabilidad y de conformidad con la Ley General de Protección de Datos Personales de Brasil, Ley nº 13.709/2018. Esta política se aplica al sitio, los formularios de contacto y los canales comerciales de la empresa.",
  "Coletamos apenas informações necessárias para responder solicitações, preparar propostas e prestar os serviços contratados.":
    "Recopilamos únicamente la información necesaria para responder solicitudes, preparar propuestas y prestar los servicios contratados.",
  "Nome, cargo e empresa;": "Nombre, cargo y empresa;",
  "E-mail corporativo e telefone;": "Correo corporativo y teléfono;",
  "Informações enviadas voluntariamente em mensagens e formulários;":
    "Información enviada voluntariamente en mensajes y formularios;",
  "Dados técnicos essenciais, como endereço IP, navegador e registros de segurança.":
    "Datos técnicos esenciales, como dirección IP, navegador y registros de seguridad.",
  "Responder contatos e solicitações de proposta;":
    "Responder contactos y solicitudes de propuesta;",
  "Prestar suporte e executar contratos;":
    "Prestar soporte y ejecutar contratos;",
  "Proteger nossos sistemas e prevenir uso indevido;":
    "Proteger nuestros sistemas y prevenir usos indebidos;",
  "Cumprir obrigações legais e regulatórias;":
    "Cumplir obligaciones legales y regulatorias;",
  "Melhorar o site quando houver consentimento para dados opcionais.":
    "Mejorar el sitio cuando exista consentimiento para datos opcionales.",
  "A Upport não vende dados pessoais. Informações podem ser compartilhadas com fornecedores de infraestrutura, comunicação e software quando isso for necessário para prestar o serviço, sempre limitado à finalidade correspondente e sujeito a medidas de proteção.":
    "Upport no vende datos personales. La información puede compartirse con proveedores de infraestructura, comunicación y software cuando sea necesario para prestar el servicio, siempre limitada a la finalidad correspondiente y sujeta a medidas de protección.",
  "Cookies essenciais mantêm recursos de navegação e segurança funcionando. Cookies opcionais de análise somente devem ser utilizados após sua escolha no aviso de consentimento. Você pode aceitar, recusar ou revisar a preferência pelo botão “Cookies” disponível no site.":
    "Las cookies esenciales mantienen las funciones de navegación y seguridad. Las cookies opcionales de análisis solo deben utilizarse después de su elección en el aviso de consentimiento. Puede aceptar, rechazar o revisar su preferencia mediante el botón “Cookies” del sitio.",
  "Nos termos da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação quando aplicável, além de informações sobre compartilhamento e revogação de consentimento.":
    "Según la LGPD, el titular puede solicitar confirmación del tratamiento, acceso, corrección, anonimización, portabilidad o eliminación cuando corresponda, además de información sobre el intercambio y la revocación del consentimiento.",
  "Adotamos medidas técnicas e administrativas compatíveis com os riscos do tratamento. Os dados são mantidos somente pelo período necessário para cumprir a finalidade informada, obrigações contratuais, legais ou o exercício regular de direitos.":
    "Adoptamos medidas técnicas y administrativas compatibles con los riesgos del tratamiento. Los datos se conservan solo durante el período necesario para cumplir la finalidad informada, obligaciones contractuales y legales o el ejercicio regular de derechos.",
  "Para dúvidas ou solicitações relacionadas a dados pessoais, escreva para":
    "Para dudas o solicitudes relacionadas con datos personales, escriba a",
  ". Podemos solicitar informações adicionais para confirmar a identidade do titular antes de atender uma solicitação.":
    ". Podemos solicitar información adicional para confirmar la identidad del titular antes de atender una solicitud.",
});

Object.assign(en, {
  "Links legais e privacidade": "Legal and privacy links",
  "Política de Privacidade": "Privacy Notice",
  "Uso de Cookies": "Cookie Use",
  "Direitos LGPD": "Privacy Rights",
  "Suas escolhas de privacidade": "Your Privacy Choices",
  "Abrir preferências de privacidade": "Open privacy preferences",
  "Radar open source": "Open source radar",
  "Tecnologia que está em movimento.": "Technology in motion.",
  "Atualizações dos projetos e comunidades que ajudam a construir operações mais abertas, seguras e automatizadas.":
    "Updates from the projects and communities helping build more open, secure and automated operations.",
  "Consultando fontes oficiais...": "Checking official sources...",
  "Atualizado automaticamente": "Updated automatically",
  "Ler na fonte": "Read at source",
  "O radar está atualizando.": "The radar is updating.",
  "Enquanto isso, acesse diretamente as fontes oficiais.":
    "In the meantime, visit the official sources directly.",
  "Fontes oficiais": "Official sources",
  "Sistemas e infraestrutura": "Systems and infrastructure",
  "Dados e comunidade": "Data and community",
  "Automação e integrações": "Automation and integrations",
  "Redes e segurança": "Networks and security",
  "Fale com a Upport | Contato": "Talk to Upport | Contact",
  "Fale com a Upport sobre TI gerenciada, ERP sob medida, CRM e automações para sua empresa.":
    "Talk to Upport about managed IT, custom ERP, CRM and automation for your company.",
  "Queremos entender o seu próximo desafio.":
    "We would love to understand your next challenge.",
  "Conte um pouco sobre sua empresa e um especialista da Upport entra em contato para indicar o melhor caminho.":
    "Tell us a little about your company and an Upport specialist will get in touch to recommend the best path.",
  Nome: "First name",
  Sobrenome: "Last name",
  Empresa: "Company",
  "E-mail corporativo": "Business email",
  "Cidade / Estado": "City / State",
  "Como podemos ajudar?": "How can we help?",
  Mensagem: "Message",
  "Selecione uma opção": "Select an option",
  "TI gerenciada e suporte": "Managed IT and support",
  "CRM Twenty hospedado": "Hosted Twenty CRM",
  "Automações e integrações": "Automation and integrations",
  "Outro assunto": "Other subject",
  "Li a": "I have read the",
  "e autorizo o uso destes dados para responder à minha solicitação.":
    "and authorize the use of this data to respond to my request.",
  "Ao enviar, sua mensagem será preparada no WhatsApp para você revisar antes de iniciar a conversa.":
    "When you submit, your message will be prepared in WhatsApp for you to review before starting the conversation.",
  "Enviar solicitação": "Submit request",
  "Canais diretos": "Direct channels",
  "Precisa falar sobre algo específico?": "Need help with something specific?",
  "Escolha o canal mais adequado e fale diretamente com a nossa equipe.":
    "Choose the best channel and talk directly to our team.",
  "Resposta rápida em horário comercial": "Fast response during business hours",
  "Central de suporte": "Support center",
  "Abra e acompanhe chamados técnicos": "Open and track technical requests",
  Atendimento: "Service area",
  "Mensagem preparada. Abrindo o WhatsApp...":
    "Message ready. Opening WhatsApp...",
  "Nova solicitação pelo site": "New website request",
  "Nome completo": "Full name",
  Assunto: "Subject",
});

Object.assign(es, {
  "Links legais e privacidade": "Enlaces legales y de privacidad",
  "Política de Privacidade": "Aviso de Privacidad",
  "Uso de Cookies": "Uso de Cookies",
  "Direitos LGPD": "Derechos de Privacidad",
  "Suas escolhas de privacidade": "Sus Opciones de Privacidad",
  "Abrir preferências de privacidade": "Abrir preferencias de privacidad",
  "Radar open source": "Radar open source",
  "Tecnologia que está em movimento.": "Tecnología en movimiento.",
  "Atualizações dos projetos e comunidades que ajudam a construir operações mais abertas, seguras e automatizadas.":
    "Actualizaciones de los proyectos y comunidades que ayudan a crear operaciones más abiertas, seguras y automatizadas.",
  "Consultando fontes oficiais...": "Consultando fuentes oficiales...",
  "Atualizado automaticamente": "Actualizado automáticamente",
  "Ler na fonte": "Leer en la fuente",
  "O radar está atualizando.": "El radar se está actualizando.",
  "Enquanto isso, acesse diretamente as fontes oficiais.":
    "Mientras tanto, visite directamente las fuentes oficiales.",
  "Fontes oficiais": "Fuentes oficiales",
  "Sistemas e infraestrutura": "Sistemas e infraestructura",
  "Dados e comunidade": "Datos y comunidad",
  "Automação e integrações": "Automatización e integraciones",
  "Redes e segurança": "Redes y seguridad",
  "Fale com a Upport | Contato": "Hable con Upport | Contacto",
  "Fale com a Upport sobre TI gerenciada, ERP sob medida, CRM e automações para sua empresa.":
    "Hable con Upport sobre TI gestionada, ERP a medida, CRM y automatización para su empresa.",
  "Queremos entender o seu próximo desafio.":
    "Queremos entender su próximo desafío.",
  "Conte um pouco sobre sua empresa e um especialista da Upport entra em contato para indicar o melhor caminho.":
    "Cuéntenos sobre su empresa y un especialista de Upport se pondrá en contacto para recomendarle el mejor camino.",
  Nome: "Nombre",
  Sobrenome: "Apellido",
  Empresa: "Empresa",
  "E-mail corporativo": "Correo corporativo",
  "Cidade / Estado": "Ciudad / Estado",
  "Como podemos ajudar?": "¿Cómo podemos ayudar?",
  Mensagem: "Mensaje",
  "Selecione uma opção": "Seleccione una opción",
  "TI gerenciada e suporte": "TI gestionada y soporte",
  "CRM Twenty hospedado": "CRM Twenty alojado",
  "Automações e integrações": "Automatización e integraciones",
  "Outro assunto": "Otro asunto",
  "Li a": "He leído la",
  "e autorizo o uso destes dados para responder à minha solicitação.":
    "y autorizo el uso de estos datos para responder a mi solicitud.",
  "Ao enviar, sua mensagem será preparada no WhatsApp para você revisar antes de iniciar a conversa.":
    "Al enviar, su mensaje se preparará en WhatsApp para que pueda revisarlo antes de iniciar la conversación.",
  "Enviar solicitação": "Enviar solicitud",
  "Canais diretos": "Canales directos",
  "Precisa falar sobre algo específico?":
    "¿Necesita hablar sobre algo específico?",
  "Escolha o canal mais adequado e fale diretamente com a nossa equipe.":
    "Elija el canal más adecuado y hable directamente con nuestro equipo.",
  "Resposta rápida em horário comercial":
    "Respuesta rápida en horario comercial",
  "Central de suporte": "Centro de soporte",
  "Abra e acompanhe chamados técnicos": "Abra y siga solicitudes técnicas",
  Atendimento: "Área de atención",
  "Mensagem preparada. Abrindo o WhatsApp...":
    "Mensaje preparado. Abriendo WhatsApp...",
  "Nova solicitação pelo site": "Nueva solicitud desde el sitio",
  "Nome completo": "Nombre completo",
  Assunto: "Asunto",
});

Object.assign(en, {
  "Ver o Twenty em ação": "See Twenty in action",
  "Demonstração visual do CRM Twenty": "Visual demo of Twenty CRM",
  "Hospedado pela Upport": "Hosted by Upport",
  "Operação comercial": "Sales operations",
  Pesquisar: "Search",
  "Objetos do CRM": "CRM objects",
  Workspace: "Workspace",
  Empresas: "Companies",
  Pessoas: "People",
  Oportunidades: "Opportunities",
  Tarefas: "Tasks",
  Workflows: "Workflows",
  "4 registros": "4 records",
  Novo: "New",
  Empresa: "Company",
  Segmento: "Industry",
  Status: "Status",
  Logística: "Logistics",
  "Mercado pet": "Pet market",
  Indústria: "Manufacturing",
  Digital: "Digital",
  Cliente: "Customer",
  "Twenty em ação": "Twenty in action",
  "Um CRM que sua equipe vai querer usar.": "A CRM your team will want to use.",
  "Visual limpo, dados conectados e automações no mesmo ambiente. A Upport entrega a plataforma configurada para o processo da sua empresa.":
    "A clean interface, connected data and automations in one place. Upport delivers the platform configured for your company's process.",
  "Demonstrações do Twenty": "Twenty demos",
  "Empresas e pessoas": "Companies and people",
  "Relacionamentos em contexto": "Relationships in context",
  "Pipeline visual e flexível": "Visual, flexible pipeline",
  "Rotinas que trabalham sozinhas": "Routines that run themselves",
  "Ambiente protegido": "Protected environment",
  "Navegação da demonstração": "Demo navigation",
  "Minha empresa": "My company",
  Favoritos: "Favorites",
  "Visão comercial": "Sales overview",
  "Contas e relacionamentos em uma visão":
    "Accounts and relationships in one view",
  Filtrar: "Filter",
  "Nova empresa": "New company",
  "São Paulo": "São Paulo",
  Guarulhos: "Guarulhos",
  Tecnologia: "Technology",
  Remoto: "Remote",
  Ativo: "Active",
  "Próximas atividades": "Upcoming activities",
  "Reunião de acompanhamento": "Follow-up meeting",
  "Hoje, 14:30 · NexusPet Group": "Today, 2:30 PM · NexusPet Group",
  Hoje: "Today",
  "Retorno da proposta": "Proposal follow-up",
  "Amanhã, 09:00 · Jeplafer": "Tomorrow, 9:00 AM · Jeplafer",
  Amanhã: "Tomorrow",
  "Pipeline comercial · R$ 186.500": "Sales pipeline · BRL 186,500",
  "Nova oportunidade": "New opportunity",
  NOVAS: "NEW",
  "Projeto de infraestrutura": "Infrastructure project",
  "CRM para comercial": "CRM for sales",
  "Expansão de unidades": "Branch expansion",
  "Operação gerenciada": "Managed operations",
  "Automação comercial": "Sales automation",
  "22 jul.": "Jul 22",
  "24 jul.": "Jul 24",
  "25 jul.": "Jul 25",
  "Follow-up de oportunidade": "Opportunity follow-up",
  "Workflow ativo · executado há 4 minutos":
    "Active workflow · run 4 minutes ago",
  Testar: "Test",
  QUANDO: "WHEN",
  "Oportunidade atualizada": "Opportunity updated",
  "Estágio mudou para Proposta": "Stage changed to Proposal",
  AGUARDAR: "WAIT",
  "2 dias úteis": "2 business days",
  "Continuar às 09:00": "Continue at 9:00 AM",
  ENTÃO: "THEN",
  "Modelo: acompanhamento comercial": "Template: sales follow-up",
  "E TAMBÉM": "AND ALSO",
  "Criar tarefa": "Create task",
  "Responsável pela oportunidade": "Opportunity owner",
  "Twenty é um CRM open source. A Upport cuida da implantação, hospedagem e operação da sua instância.":
    "Twenty is an open-source CRM. Upport handles the implementation, hosting and operation of your instance.",
});

Object.assign(es, {
  "Ver o Twenty em ação": "Ver Twenty en acción",
  "Demonstração visual do CRM Twenty": "Demostración visual de Twenty CRM",
  "Hospedado pela Upport": "Alojado por Upport",
  "Operação comercial": "Operación comercial",
  Pesquisar: "Buscar",
  "Objetos do CRM": "Objetos del CRM",
  Workspace: "Espacio de trabajo",
  Empresas: "Empresas",
  Pessoas: "Personas",
  Oportunidades: "Oportunidades",
  Tarefas: "Tareas",
  Workflows: "Flujos de trabajo",
  "4 registros": "4 registros",
  Novo: "Nuevo",
  Empresa: "Empresa",
  Segmento: "Sector",
  Status: "Estado",
  Logística: "Logística",
  "Mercado pet": "Mercado de mascotas",
  Indústria: "Industria",
  Digital: "Digital",
  Cliente: "Cliente",
  "Twenty em ação": "Twenty en acción",
  "Um CRM que sua equipe vai querer usar.": "Un CRM que su equipo querrá usar.",
  "Visual limpo, dados conectados e automações no mesmo ambiente. A Upport entrega a plataforma configurada para o processo da sua empresa.":
    "Una interfaz limpia, datos conectados y automatizaciones en un mismo entorno. Upport entrega la plataforma configurada para el proceso de su empresa.",
  "Demonstrações do Twenty": "Demostraciones de Twenty",
  "Empresas e pessoas": "Empresas y personas",
  "Relacionamentos em contexto": "Relaciones en contexto",
  "Pipeline visual e flexível": "Pipeline visual y flexible",
  "Rotinas que trabalham sozinhas": "Rutinas que funcionan solas",
  "Ambiente protegido": "Entorno protegido",
  "Navegação da demonstração": "Navegación de la demostración",
  "Minha empresa": "Mi empresa",
  Favoritos: "Favoritos",
  "Visão comercial": "Vista comercial",
  "Contas e relacionamentos em uma visão": "Cuentas y relaciones en una vista",
  Filtrar: "Filtrar",
  "Nova empresa": "Nueva empresa",
  "São Paulo": "São Paulo",
  Guarulhos: "Guarulhos",
  Tecnologia: "Tecnología",
  Remoto: "Remoto",
  Ativo: "Activo",
  "Próximas atividades": "Próximas actividades",
  "Reunião de acompanhamento": "Reunión de seguimiento",
  "Hoje, 14:30 · NexusPet Group": "Hoy, 14:30 · NexusPet Group",
  Hoje: "Hoy",
  "Retorno da proposta": "Seguimiento de la propuesta",
  "Amanhã, 09:00 · Jeplafer": "Mañana, 09:00 · Jeplafer",
  Amanhã: "Mañana",
  "Pipeline comercial · R$ 186.500": "Pipeline comercial · R$ 186.500",
  "Nova oportunidade": "Nueva oportunidad",
  NOVAS: "NUEVAS",
  "Projeto de infraestrutura": "Proyecto de infraestructura",
  "CRM para comercial": "CRM para ventas",
  "Expansão de unidades": "Expansión de unidades",
  "Operação gerenciada": "Operación gestionada",
  "Automação comercial": "Automatización comercial",
  "22 jul.": "22 jul.",
  "24 jul.": "24 jul.",
  "25 jul.": "25 jul.",
  "Follow-up de oportunidade": "Seguimiento de oportunidad",
  "Workflow ativo · executado há 4 minutos":
    "Flujo activo · ejecutado hace 4 minutos",
  Testar: "Probar",
  QUANDO: "CUANDO",
  "Oportunidade atualizada": "Oportunidad actualizada",
  "Estágio mudou para Proposta": "La etapa cambió a Propuesta",
  AGUARDAR: "ESPERAR",
  "2 dias úteis": "2 días hábiles",
  "Continuar às 09:00": "Continuar a las 09:00",
  ENTÃO: "ENTONCES",
  "Modelo: acompanhamento comercial": "Plantilla: seguimiento comercial",
  "E TAMBÉM": "Y TAMBIÉN",
  "Criar tarefa": "Crear tarea",
  "Responsável pela oportunidade": "Responsable de la oportunidad",
  "Twenty é um CRM open source. A Upport cuida da implantação, hospedagem e operação da sua instância.":
    "Twenty es un CRM de código abierto. Upport se encarga de la implementación, alojamiento y operación de su instancia.",
});

Object.assign(en, {
  "ERPNext gerenciado": "Managed ERPNext",
  "Financeiro, vendas, estoque e operação em uma plataforma hospedada e cuidada pela Upport.":
    "Finance, sales, inventory and operations on a platform hosted and managed by Upport.",
  "Conhecer ERPNext →": "Explore ERPNext →",
  "04 / Desenvolvimento": "04 / Development",
  "Software sob medida": "Custom software",
  "Portais, sistemas e integrações criados para processos que não cabem em uma solução pronta.":
    "Portals, systems and integrations built for processes that do not fit an off-the-shelf solution.",
  "Conhecer desenvolvimento →": "Explore development →",
  "A empresa inteira falando a mesma língua.":
    "Your whole company speaking the same language.",
  "Implantação, personalização, hospedagem, backup e suporte para conectar financeiro, vendas, compras, estoque e produção.":
    "Implementation, customization, hosting, backup and support connecting finance, sales, procurement, inventory and manufacturing.",
  "Conhecer ERPNext": "Explore ERPNext",
  "Quando não existe pronto, a gente constrói.":
    "When it does not exist, we build it.",
  "Sistemas internos, portais, integrações e plataformas desenvolvidos em torno da sua operação, com infraestrutura e suporte da mesma equipe.":
    "Internal systems, portals, integrations and platforms built around your operation, with infrastructure and support from the same team.",
  "Conhecer desenvolvimento": "Explore development",
  "Seu processo": "Your process",
  "Software UPPORT": "UPPORT software",
  "Dados integrados": "Integrated data",
  "Ambiente visual de desenvolvimento TypeScript integrado à AWS": "Visual TypeScript development environment integrated with AWS",
  "Ambiente de produção": "Production environment",
  "Exemplo de código TypeScript": "TypeScript code example",
  "TypeScript compilado": "TypeScript compiled",
  "testes aprovados": "tests passed",
  "Deploy concluído em AWS": "Deployment completed on AWS",
  "Stack de engenharia": "Engineering stack",
  "Tecnologias que conhecemos, integramos e operamos.": "Technologies we know, integrate and operate.",
  "Escolhemos a ferramenta pelo contexto do projeto. Código, dados, infraestrutura e continuidade são planejados juntos para o sistema nascer pronto para operar.":
    "We choose tools based on each project's context. Code, data, infrastructure and continuity are planned together so the system is operational from day one.",
  "Arquitetura técnica de uma solução desenvolvida pela Upport": "Technical architecture of a solution developed by Upport",
  "Todos os serviços operacionais": "All services operational",
  DESENVOLVIMENTO: "DEVELOPMENT",
  "Frontend e backend": "Frontend and backend",
  "Aplicações tipadas, APIs e componentes reutilizáveis.": "Typed applications, APIs and reusable components.",
  "DADOS & AUTOMAÇÃO": "DATA & AUTOMATION",
  "Dados transacionais": "Transactional data",
  "Fluxos e integrações": "Workflows and integrations",
  CLOUD: "CLOUD",
  "Compute e serviços": "Compute and services",
  "Cloud e dados": "Cloud and data",
  CONTINUIDADE: "CONTINUITY",
  "Backup e recuperação": "Backup and recovery",
  "Proteção da aplicação, configurações e dados críticos.": "Protection for applications, configurations and critical data.",
  aprovado: "passed",
  verificado: "verified",
  "01 / ENTREGA": "01 / DELIVERY",
  "Versionamento e ambientes": "Versioning and environments",
  "Git, revisão de código, testes e separação entre desenvolvimento, homologação e produção.":
    "Git, code review, testing and separate development, staging and production environments.",
  "02 / SEGURANÇA": "02 / SECURITY",
  "Dados protegidos desde o desenho": "Data protected by design",
  "Controle de acesso, segredos fora do código, trilha de auditoria e políticas de backup.":
    "Access control, secrets kept out of code, audit trails and backup policies.",
  "03 / OPERAÇÃO": "03 / OPERATIONS",
  "Software acompanhado depois do deploy": "Software monitored after deployment",
  "Logs, métricas, alertas, atualização contínua e uma equipe responsável pela sustentação.":
    "Logs, metrics, alerts, continuous updates and a team accountable for ongoing operations.",
  "ERPNext gerenciado | Upport": "Managed ERPNext | Upport",
  "ERPNext / Hospedado pela Upport": "ERPNext / Hosted by Upport",
  "Toda a empresa em uma": "Your whole company in",
  "única operação.": "one operation.",
  "A Upport implanta, personaliza e mantém o ERPNext para integrar financeiro, vendas, compras, estoque e produção sem sua equipe administrar servidores.":
    "Upport implements, customizes and maintains ERPNext to integrate finance, sales, procurement, inventory and manufacturing without your team managing servers.",
  "Ver o ERPNext em ação": "See ERPNext in action",
  "Demonstração visual do ERPNext": "Visual ERPNext demo",
  "Ambiente gerenciado": "Managed environment",
  "Painel executivo": "Executive dashboard",
  "Pesquisar ou digitar um comando": "Search or enter a command",
  "Módulos do ERPNext": "ERPNext modules",
  "Visão geral": "Overview",
  Produção: "Manufacturing",
  "Visão da empresa": "Company overview",
  "Atualizado agora": "Updated now",
  "Receita no mês": "Monthly revenue",
  "Pedidos abertos": "Open orders",
  "Estoque disponível": "Available inventory",
  Saudável: "Healthy",
  "Receita e despesas": "Revenue and expenses",
  "Últimos 6 meses": "Last 6 months",
  "ERPNext em ação": "ERPNext in action",
  "Os dados mudam. A visão acompanha.": "Data changes. Your view keeps up.",
  "Uma plataforma integrada para enxergar o que aconteceu, o que precisa de atenção e qual é o próximo passo.":
    "An integrated platform showing what happened, what needs attention and what comes next.",
  "Demonstrações do ERPNext": "ERPNext demos",
  "Caixa, contas e resultado": "Cash flow, accounts and results",
  "Estoque e compras": "Inventory and procurement",
  "Materiais e fornecedores": "Materials and suppliers",
  "Ordens e capacidade": "Orders and capacity",
  "Backup verificado": "Verified backup",
  Módulos: "Modules",
  "Painel financeiro": "Financial dashboard",
  "Julho de 2026 · valores consolidados": "July 2026 · consolidated values",
  Relatórios: "Reports",
  Receita: "Revenue",
  Despesas: "Expenses",
  Resultado: "Profit",
  "59,9% da receita": "59.9% of revenue",
  "Margem 40%": "40% margin",
  "Fluxo mensal": "Monthly flow",
  "Receita / despesa": "Revenue / expenses",
  "Contas a receber": "Accounts receivable",
  "24 em dia": "24 current",
  "4 vencendo": "4 due soon",
  Conciliação: "Reconciliation",
  "96% concluída": "96% complete",
  "3 armazéns · 1.284 itens monitorados":
    "3 warehouses · 1,284 monitored items",
  "Solicitar compra": "Request purchase",
  Disponibilidade: "Availability",
  "Pedidos de compra": "Purchase orders",
  "12 abertos": "12 open",
  "Prazo médio": "Average lead time",
  "4,8 dias": "4.8 days",
  Item: "Item",
  Disponível: "Available",
  "Ponto de reposição": "Reorder point",
  Normal: "Normal",
  Comprar: "Purchase",
  "Programação da produção": "Production schedule",
  "Semana 29 · 18 ordens ativas": "Week 29 · 18 active orders",
  "Nova ordem": "New order",
  capacidade: "capacity",
  "Eficiência da semana": "Weekly efficiency",
  "Meta operacional: 85%": "Operating target: 85%",
  "Dentro da meta": "On target",
  "ERPNext é uma plataforma open source. A Upport cuida da implantação, personalização, hospedagem, backup e operação da sua instância.":
    "ERPNext is an open-source platform. Upport handles the implementation, customization, hosting, backup and operation of your instance.",
  "ERP completo e modular": "Complete, modular ERP",
  "Comece pelo que resolve hoje. Expanda quando fizer sentido.":
    "Start with what solves today's needs. Expand when it makes sense.",
  "Financeiro, vendas, compras, estoque, produção, projetos, ativos e pessoas conectados no mesmo ambiente.":
    "Finance, sales, procurement, inventory, manufacturing, projects, assets and people connected in one environment.",
  "Implantação orientada": "Guided implementation",
  "Mapeamento, configuração, permissões e treinamento para sua equipe começar com segurança.":
    "Mapping, configuration, permissions and training so your team starts safely.",
  "Ambiente acompanhado, domínio personalizado, atualizações e capacidade dimensionada.":
    "Monitored environment, custom domain, updates and right-sized capacity.",
  "Cópias verificadas, monitoramento e rotinas de recuperação para reduzir risco operacional.":
    "Verified backups, monitoring and recovery routines that reduce operational risk.",
  Personalizações: "Customizations",
  "Campos, formulários, relatórios, impressões e fluxos ajustados ao seu processo.":
    "Fields, forms, reports, print layouts and workflows tailored to your process.",
  "APIs e automações para conectar bancos, e-commerce, sistemas legados e parceiros.":
    "APIs and automations connecting banks, e-commerce, legacy systems and partners.",
  "Quando o pronto não basta": "When off-the-shelf is not enough",
  "Sua operação pede algo realmente único?":
    "Does your operation need something truly unique?",
  "A UPPORT também cria portais, sistemas internos, aplicativos e plataformas sob medida, com TypeScript, SQL Server e integrações.":
    "UPPORT also builds custom portals, internal systems, applications and platforms with TypeScript, SQL Server and integrations.",
  "Conhecer software sob medida": "Explore custom software",
  "Sua equipe": "Your team",
  "Sistema UPPORT": "UPPORT system",
  "Seus dados": "Your data",
  "Quer integrar a operação sem assumir mais um servidor?":
    "Ready to integrate operations without taking on another server?",
  "Vamos definir módulos, usuários, migração e ambiente.":
    "Let's define modules, users, migration and environment.",
  "Conversar sobre o ERPNext": "Talk about ERPNext",
  "Software sob medida | Upport": "Custom software | Upport",
  "Desenvolvimento de sistemas sob medida, portais e integrações com TypeScript, SQL Server e infraestrutura gerenciada.":
    "Custom systems, portals and integrations with TypeScript, SQL Server and managed infrastructure.",
  "Software sob medida / Da ideia à operação":
    "Custom software / From idea to operation",
  "Seu processo pode virar": "Your process can become",
  "um sistema.": "a system.",
  "A UPPORT projeta, desenvolve e opera software para empresas que precisam substituir planilhas, integrar ferramentas ou criar uma plataforma que ainda não existe.":
    "UPPORT designs, develops and operates software for companies that need to replace spreadsheets, integrate tools or create a platform that does not exist yet.",
  "Contar minha ideia": "Share my idea",
  "Ver o que construímos": "See what we build",
  "Representação de uma plataforma sob medida": "Custom platform visualization",
  "Bom dia, equipe": "Good morning, team",
  "Operação em tempo real": "Real-time operations",
  "Novo processo": "New process",
  "Processos hoje": "Processes today",
  "Tempo economizado": "Time saved",
  "esta semana": "this week",
  Automações: "Automations",
  ativas: "active",
  "Fluxos recentes": "Recent workflows",
  "Pedido #2841 aprovado": "Order #2841 approved",
  "Financeiro · agora": "Finance · now",
  Concluído: "Completed",
  "Integração de estoque": "Inventory integration",
  "ERP · há 3 min": "ERP · 3 min ago",
  Executando: "Running",
  "Novo cliente cadastrado": "New customer added",
  "Comercial · há 8 min": "Sales · 8 min ago",
  "Volume processado": "Processed volume",
  "Construído para o seu negócio": "Built for your business",
  "Da ferramenta interna ao produto digital.":
    "From internal tool to digital product.",
  "Não vendemos tecnologia pela tecnologia. Cada tela, integração e automação nasce de um problema real da operação.":
    "We do not sell technology for technology's sake. Every screen, integration and automation starts from a real operating problem.",
  "Sistemas internos": "Internal systems",
  "Processos, aprovações, ordens de serviço, cadastros e indicadores em um único lugar.":
    "Processes, approvals, work orders, records and metrics in one place.",
  "Portais e plataformas": "Portals and platforms",
  "Experiências para clientes, fornecedores e parceiros acessarem dados e serviços com segurança.":
    "Secure experiences for customers, suppliers and partners to access data and services.",
  "APIs e automações que conectam ERP, CRM, bancos, e-commerce e sistemas legados.":
    "APIs and automations connecting ERP, CRM, banks, e-commerce and legacy systems.",
  "Dados e decisão": "Data and decisions",
  "Painéis e relatórios que transformam informações espalhadas em uma visão confiável.":
    "Dashboards and reports turning scattered information into a reliable view.",
  "Tecnologia com responsabilidade": "Technology with accountability",
  "Nós construímos. Nós colocamos no ar. Nós acompanhamos.":
    "We build it. We launch it. We operate it.",
  "Produto, infraestrutura e suporte ficam na mesma conversa. Isso reduz repasses, acelera correções e mantém o sistema evoluindo depois da entrega.":
    "Product, infrastructure and support stay in the same conversation. This reduces handoffs, speeds up fixes and keeps the system evolving after launch.",
  Experiência: "Experience",
  "Web e dispositivos": "Web and devices",
  Aplicação: "Application",
  "TypeScript e APIs": "TypeScript and APIs",
  Dados: "Data",
  "Cloud e monitoramento": "Cloud and monitoring",
  "Uma ideia grande começa com um problema bem entendido.":
    "A big idea starts with a well-understood problem.",
  "Entendemos usuários, processo, dados, riscos e o resultado esperado.":
    "We understand users, process, data, risks and the expected outcome.",
  "Validamos fluxos e telas antes de investir no desenvolvimento completo.":
    "We validate flows and screens before investing in full development.",
  Construção: "Build",
  "Entregas progressivas, testes e integração com o ambiente da empresa.":
    "Progressive delivery, testing and integration with the company's environment.",
  "Monitoramento, suporte e novas funcionalidades conforme o uso real.":
    "Monitoring, support and new features based on actual usage.",
  "Vamos tirar do papel": "Let's bring it to life",
  "Qual processo da sua empresa merece um sistema melhor?":
    "Which process in your company deserves a better system?",
  "Conte o cenário. A UPPORT ajuda a transformar a necessidade em um primeiro escopo.":
    "Tell us the situation. UPPORT helps turn the need into an initial scope.",
  "Conversar sobre meu sistema": "Talk about my system",
});

Object.assign(es, {
  "ERPNext gerenciado": "ERPNext gestionado",
  "Financeiro, vendas, estoque e operação em uma plataforma hospedada e cuidada pela Upport.":
    "Finanzas, ventas, inventario y operaciones en una plataforma alojada y gestionada por Upport.",
  "Conhecer ERPNext →": "Conocer ERPNext →",
  "04 / Desenvolvimento": "04 / Desarrollo",
  "Software sob medida": "Software a medida",
  "Portais, sistemas e integrações criados para processos que não cabem em uma solução pronta.":
    "Portales, sistemas e integraciones creados para procesos que no encajan en una solución estándar.",
  "Conhecer desenvolvimento →": "Conocer desarrollo →",
  "A empresa inteira falando a mesma língua.":
    "Toda la empresa hablando el mismo idioma.",
  "Implantação, personalização, hospedagem, backup e suporte para conectar financeiro, vendas, compras, estoque e produção.":
    "Implementación, personalización, alojamiento, copias de seguridad y soporte para conectar finanzas, ventas, compras, inventario y producción.",
  "Conhecer ERPNext": "Conocer ERPNext",
  "Quando não existe pronto, a gente constrói.":
    "Cuando no existe, lo construimos.",
  "Sistemas internos, portais, integrações e plataformas desenvolvidos em torno da sua operação, com infraestrutura e suporte da mesma equipe.":
    "Sistemas internos, portales, integraciones y plataformas desarrollados alrededor de su operación, con infraestructura y soporte del mismo equipo.",
  "Conhecer desenvolvimento": "Conocer desarrollo",
  "Seu processo": "Su proceso",
  "Software UPPORT": "Software UPPORT",
  "Dados integrados": "Datos integrados",
  "Ambiente visual de desenvolvimento TypeScript integrado à AWS": "Entorno visual de desarrollo TypeScript integrado con AWS",
  "Ambiente de produção": "Entorno de producción",
  "Exemplo de código TypeScript": "Ejemplo de código TypeScript",
  "TypeScript compilado": "TypeScript compilado",
  "testes aprovados": "pruebas superadas",
  "Deploy concluído em AWS": "Despliegue completado en AWS",
  "Stack de engenharia": "Stack de ingeniería",
  "Tecnologias que conhecemos, integramos e operamos.": "Tecnologías que conocemos, integramos y operamos.",
  "Escolhemos a ferramenta pelo contexto do projeto. Código, dados, infraestrutura e continuidade são planejados juntos para o sistema nascer pronto para operar.":
    "Elegimos cada herramienta según el contexto del proyecto. Código, datos, infraestructura y continuidad se planifican juntos para que el sistema nazca listo para operar.",
  "Arquitetura técnica de uma solução desenvolvida pela Upport": "Arquitectura técnica de una solución desarrollada por Upport",
  "Todos os serviços operacionais": "Todos los servicios operativos",
  DESENVOLVIMENTO: "DESARROLLO",
  "Frontend e backend": "Frontend y backend",
  "Aplicações tipadas, APIs e componentes reutilizáveis.": "Aplicaciones tipadas, APIs y componentes reutilizables.",
  "DADOS & AUTOMAÇÃO": "DATOS Y AUTOMATIZACIÓN",
  "Dados transacionais": "Datos transaccionales",
  "Fluxos e integrações": "Flujos e integraciones",
  CLOUD: "NUBE",
  "Compute e serviços": "Cómputo y servicios",
  "Cloud e dados": "Nube y datos",
  CONTINUIDADE: "CONTINUIDAD",
  "Backup e recuperação": "Copias de seguridad y recuperación",
  "Proteção da aplicação, configurações e dados críticos.": "Protección de la aplicación, configuraciones y datos críticos.",
  aprovado: "aprobado",
  verificado: "verificado",
  "01 / ENTREGA": "01 / ENTREGA",
  "Versionamento e ambientes": "Versionado y entornos",
  "Git, revisão de código, testes e separação entre desenvolvimento, homologação e produção.":
    "Git, revisión de código, pruebas y separación entre desarrollo, homologación y producción.",
  "02 / SEGURANÇA": "02 / SEGURIDAD",
  "Dados protegidos desde o desenho": "Datos protegidos desde el diseño",
  "Controle de acesso, segredos fora do código, trilha de auditoria e políticas de backup.":
    "Control de acceso, secretos fuera del código, trazabilidad de auditoría y políticas de respaldo.",
  "03 / OPERAÇÃO": "03 / OPERACIÓN",
  "Software acompanhado depois do deploy": "Software supervisado después del despliegue",
  "Logs, métricas, alertas, atualização contínua e uma equipe responsável pela sustentação.":
    "Logs, métricas, alertas, actualización continua y un equipo responsable de la operación.",
  "ERPNext gerenciado | Upport": "ERPNext gestionado | Upport",
  "ERPNext / Hospedado pela Upport": "ERPNext / Alojado por Upport",
  "Toda a empresa em uma": "Toda la empresa en",
  "única operação.": "una sola operación.",
  "A Upport implanta, personaliza e mantém o ERPNext para integrar financeiro, vendas, compras, estoque e produção sem sua equipe administrar servidores.":
    "Upport implementa, personaliza y mantiene ERPNext para integrar finanzas, ventas, compras, inventario y producción sin que su equipo administre servidores.",
  "Ver o ERPNext em ação": "Ver ERPNext en acción",
  "Demonstração visual do ERPNext": "Demostración visual de ERPNext",
  "Ambiente gerenciado": "Entorno gestionado",
  "Painel executivo": "Panel ejecutivo",
  "Pesquisar ou digitar um comando": "Buscar o escribir un comando",
  "Módulos do ERPNext": "Módulos de ERPNext",
  "Visão geral": "Vista general",
  "Visão da empresa": "Vista de la empresa",
  "Atualizado agora": "Actualizado ahora",
  "Receita no mês": "Ingresos del mes",
  "Pedidos abertos": "Pedidos abiertos",
  "Estoque disponível": "Inventario disponible",
  Saudável: "Saludable",
  "Receita e despesas": "Ingresos y gastos",
  "Últimos 6 meses": "Últimos 6 meses",
  "ERPNext em ação": "ERPNext en acción",
  "Os dados mudam. A visão acompanha.":
    "Los datos cambian. La visión los acompaña.",
  "Uma plataforma integrada para enxergar o que aconteceu, o que precisa de atenção e qual é o próximo passo.":
    "Una plataforma integrada para ver qué ocurrió, qué necesita atención y cuál es el siguiente paso.",
  "Demonstrações do ERPNext": "Demostraciones de ERPNext",
  "Caixa, contas e resultado": "Caja, cuentas y resultados",
  "Estoque e compras": "Inventario y compras",
  "Materiais e fornecedores": "Materiales y proveedores",
  "Ordens e capacidade": "Órdenes y capacidad",
  "Backup verificado": "Copia verificada",
  Módulos: "Módulos",
  "Painel financeiro": "Panel financiero",
  "Julho de 2026 · valores consolidados":
    "Julio de 2026 · valores consolidados",
  Relatórios: "Informes",
  Receita: "Ingresos",
  Despesas: "Gastos",
  Resultado: "Resultado",
  "59,9% da receita": "59,9% de los ingresos",
  "Margem 40%": "Margen 40%",
  "Fluxo mensal": "Flujo mensual",
  "Receita / despesa": "Ingresos / gastos",
  "Contas a receber": "Cuentas por cobrar",
  "24 em dia": "24 al día",
  "4 vencendo": "4 por vencer",
  Conciliação: "Conciliación",
  "96% concluída": "96% completada",
  "3 armazéns · 1.284 itens monitorados":
    "3 almacenes · 1.284 artículos monitoreados",
  "Solicitar compra": "Solicitar compra",
  Disponibilidade: "Disponibilidad",
  "Pedidos de compra": "Pedidos de compra",
  "12 abertos": "12 abiertos",
  "Prazo médio": "Plazo medio",
  "4,8 dias": "4,8 días",
  Item: "Artículo",
  Disponível: "Disponible",
  "Ponto de reposição": "Punto de reposición",
  Normal: "Normal",
  Comprar: "Comprar",
  "Programação da produção": "Programación de producción",
  "Semana 29 · 18 ordens ativas": "Semana 29 · 18 órdenes activas",
  "Nova ordem": "Nueva orden",
  "Eficiência da semana": "Eficiencia semanal",
  "Meta operacional: 85%": "Meta operativa: 85%",
  "Dentro da meta": "Dentro de la meta",
  "ERPNext é uma plataforma open source. A Upport cuida da implantação, personalização, hospedagem, backup e operação da sua instância.":
    "ERPNext es una plataforma de código abierto. Upport se encarga de la implementación, personalización, alojamiento, copias de seguridad y operación de su instancia.",
  "ERP completo e modular": "ERP completo y modular",
  "Comece pelo que resolve hoje. Expanda quando fizer sentido.":
    "Comience por lo que resuelve hoy. Amplíe cuando tenga sentido.",
  "Financeiro, vendas, compras, estoque, produção, projetos, ativos e pessoas conectados no mesmo ambiente.":
    "Finanzas, ventas, compras, inventario, producción, proyectos, activos y personas conectados en el mismo entorno.",
  "Implantação orientada": "Implementación guiada",
  "Mapeamento, configuração, permissões e treinamento para sua equipe começar com segurança.":
    "Mapeo, configuración, permisos y capacitación para que su equipo comience con seguridad.",
  Personalizações: "Personalizaciones",
  "Campos, formulários, relatórios, impressões e fluxos ajustados ao seu processo.":
    "Campos, formularios, informes, impresiones y flujos adaptados a su proceso.",
  "Quando o pronto não basta": "Cuando lo estándar no basta",
  "Sua operação pede algo realmente único?":
    "¿Su operación necesita algo realmente único?",
  "A UPPORT também cria portais, sistemas internos, aplicativos e plataformas sob medida, com TypeScript, SQL Server e integrações.":
    "UPPORT también crea portales, sistemas internos, aplicaciones y plataformas a medida con TypeScript, SQL Server e integraciones.",
  "Conhecer software sob medida": "Conocer software a medida",
  "Sua equipe": "Su equipo",
  "Sistema UPPORT": "Sistema UPPORT",
  "Seus dados": "Sus datos",
  "Quer integrar a operação sem assumir mais um servidor?":
    "¿Quiere integrar la operación sin asumir otro servidor?",
  "Conversar sobre o ERPNext": "Hablar sobre ERPNext",
  "Software sob medida | Upport": "Software a medida | Upport",
  "Software sob medida / Da ideia à operação":
    "Software a medida / De la idea a la operación",
  "Seu processo pode virar": "Su proceso puede convertirse en",
  "um sistema.": "un sistema.",
  "A UPPORT projeta, desenvolve e opera software para empresas que precisam substituir planilhas, integrar ferramentas ou criar uma plataforma que ainda não existe.":
    "UPPORT diseña, desarrolla y opera software para empresas que necesitan reemplazar hojas de cálculo, integrar herramientas o crear una plataforma que aún no existe.",
  "Contar minha ideia": "Contar mi idea",
  "Ver o que construímos": "Ver lo que construimos",
  Produção: "Producción",
  "Bom dia, equipe": "Buenos días, equipo",
  "Operação em tempo real": "Operación en tiempo real",
  "Novo processo": "Nuevo proceso",
  "Processos hoje": "Procesos hoy",
  "Tempo economizado": "Tiempo ahorrado",
  "esta semana": "esta semana",
  Automações: "Automatizaciones",
  ativas: "activas",
  "Fluxos recentes": "Flujos recientes",
  "Pedido #2841 aprovado": "Pedido #2841 aprobado",
  Concluído: "Completado",
  "Integração de estoque": "Integración de inventario",
  Executando: "Ejecutando",
  "Novo cliente cadastrado": "Nuevo cliente registrado",
  "Volume processado": "Volumen procesado",
  "Construído para o seu negócio": "Construido para su negocio",
  "Da ferramenta interna ao produto digital.":
    "De la herramienta interna al producto digital.",
  "Não vendemos tecnologia pela tecnologia. Cada tela, integração e automação nasce de um problema real da operação.":
    "No vendemos tecnología por la tecnología. Cada pantalla, integración y automatización nace de un problema real de la operación.",
  "Sistemas internos": "Sistemas internos",
  "Portais e plataformas": "Portales y plataformas",
  "Dados e decisão": "Datos y decisiones",
  "Tecnologia com responsabilidade": "Tecnología con responsabilidad",
  "Nós construímos. Nós colocamos no ar. Nós acompanhamos.":
    "Construimos. Publicamos. Acompañamos.",
  Experiência: "Experiencia",
  "Web e dispositivos": "Web y dispositivos",
  Aplicação: "Aplicación",
  Dados: "Datos",
  "Uma ideia grande começa com um problema bem entendido.":
    "Una gran idea comienza con un problema bien entendido.",
  Construção: "Construcción",
  "Vamos tirar do papel": "Hagámoslo realidad",
  "Qual processo da sua empresa merece um sistema melhor?":
    "¿Qué proceso de su empresa merece un sistema mejor?",
  "Conte o cenário. A UPPORT ajuda a transformar a necessidade em um primeiro escopo.":
    "Cuéntenos el escenario. UPPORT ayuda a transformar la necesidad en un primer alcance.",
  "Conversar sobre meu sistema": "Hablar sobre mi sistema",
});

Object.assign(en, {
  "Sobre a Upport | Empresa de Tecnologia em São Paulo": "About Upport | Technology Company in São Paulo",
  "Conheça a Upport, empresa de tecnologia em São Paulo especializada em TI gerenciada, infraestrutura, ERPNext, CRM Twenty, automações e software sob medida.": "Meet Upport, a São Paulo technology company specializing in managed IT, infrastructure, ERPNext, Twenty CRM, automation and custom software.",
  "Sobre a Upport": "About Upport", "Tecnologia com": "Technology with", "alguém responsável.": "someone accountable.",
  "A Upport é uma empresa brasileira de tecnologia que conecta suporte, infraestrutura e sistemas para operações que precisam crescer sem perder o controle.": "Upport is a Brazilian technology company connecting support, infrastructure and systems for operations that need to grow without losing control.",
  "Conhecer nossa equipe": "Meet our team", "Como atuamos": "How we work", "Identidade e atuação da Upport": "Upport identity and operations", "Serviços de TI Ltda.": "IT Services Ltd.", "Base": "Base", "São Paulo, SP": "São Paulo, Brazil", "Remoto e presencial": "Remote and on-site", "Especialidade": "Specialty", "Operação e sistemas": "Operations and systems",
  "Por que existimos": "Why we exist", "Menos repasse. Mais resolução.": "Fewer handoffs. More resolution.", "A UPPORT nasceu para assumir problemas de tecnologia por inteiro. Entendemos o negócio, organizamos o ambiente e permanecemos perto depois da entrega.": "UPPORT was created to take full ownership of technology problems. We understand the business, organize the environment and stay close after delivery.", "Isso significa uma mesma equipe capaz de cuidar da infraestrutura, implantar plataformas open source, automatizar rotinas e desenvolver um sistema quando nenhuma solução pronta resolve.": "It means one team capable of managing infrastructure, implementing open-source platforms, automating routines and building a system when no off-the-shelf solution works.",
  "Nossa atuação": "What we do", "Da estação de trabalho ao sistema que move a empresa.": "From the workstation to the system that runs the company.", "Suporte, monitoramento, redes, segurança, backup e continuidade.": "Support, monitoring, networks, security, backup and continuity.", "Conhecer operação →": "Explore operations →", "Implantação, personalização, hospedagem e suporte para gestão integrada.": "Implementation, customization, hosting and support for integrated management.", "CRM open source configurado e operado para sua equipe comercial.": "Open-source CRM configured and operated for your sales team.", "Portais, sistemas internos, integrações e produtos digitais.": "Portals, internal systems, integrations and digital products.",
  "Experiência aplicada": "Experience in practice", "Empresas reais. Operações diferentes.": "Real companies. Different operations.", "Atuamos em ambientes de logística, mercado pet, indústria e operação digital, adaptando tecnologia ao contexto de cada cliente.": "We work across logistics, pet market, manufacturing and digital operations, adapting technology to each client's context.", "Soluções de injeção termoplástica": "Thermoplastic injection solutions",
  "Identidade empresarial": "Business identity", "Uma empresa brasileira, com contato direto.": "A Brazilian company with direct contact.", "Atendimento para São Paulo e Grande São Paulo, com suporte remoto e presencial conforme a necessidade da operação.": "Serving São Paulo and Greater São Paulo with remote and on-site support according to operational needs.", "Razão social": "Legal name", "Nome": "Name", "Conversa direta": "Direct conversation", "Conte o cenário para a gente indicar um caminho realista.": "Tell us the situation so we can recommend a realistic path.", "Conhecer a Upport →": "About Upport →",
});

Object.assign(es, {
  "Sobre a Upport | Empresa de Tecnologia em São Paulo": "Sobre Upport | Empresa de Tecnología en São Paulo",
  "Conheça a Upport, empresa de tecnologia em São Paulo especializada em TI gerenciada, infraestrutura, ERPNext, CRM Twenty, automações e software sob medida.": "Conozca Upport, empresa de tecnología en São Paulo especializada en TI gestionada, infraestructura, ERPNext, CRM Twenty, automatizaciones y software a medida.",
  "Sobre a Upport": "Sobre Upport", "Tecnologia com": "Tecnología con", "alguém responsável.": "alguien responsable.", "A Upport é uma empresa brasileira de tecnologia que conecta suporte, infraestrutura e sistemas para operações que precisam crescer sem perder o controle.": "Upport es una empresa brasileña de tecnología que conecta soporte, infraestructura y sistemas para operaciones que necesitan crecer sin perder el control.", "Conhecer nossa equipe": "Conocer nuestro equipo", "Como atuamos": "Cómo trabajamos", "Serviços de TI Ltda.": "Servicios de TI Ltda.", "Base": "Base", "São Paulo, SP": "São Paulo, Brasil", "Remoto e presencial": "Remoto y presencial", "Especialidade": "Especialidad", "Operação e sistemas": "Operación y sistemas",
  "Por que existimos": "Por qué existimos", "Menos repasse. Mais resolução.": "Menos intermediarios. Más resolución.", "A UPPORT nasceu para assumir problemas de tecnologia por inteiro. Entendemos o negócio, organizamos o ambiente e permanecemos perto depois da entrega.": "UPPORT nació para asumir los problemas tecnológicos por completo. Entendemos el negocio, organizamos el entorno y permanecemos cerca después de la entrega.", "Isso significa uma mesma equipe capaz de cuidar da infraestrutura, implantar plataformas open source, automatizar rotinas e desenvolver um sistema quando nenhuma solução pronta resolve.": "Significa un mismo equipo capaz de gestionar infraestructura, implementar plataformas de código abierto, automatizar rutinas y desarrollar un sistema cuando ninguna solución estándar funciona.",
  "Nossa atuação": "Nuestra actuación", "Da estação de trabalho ao sistema que move a empresa.": "Desde la estación de trabajo hasta el sistema que mueve la empresa.", "Suporte, monitoramento, redes, segurança, backup e continuidade.": "Soporte, monitoreo, redes, seguridad, copias y continuidad.", "Conhecer operação →": "Conocer operación →", "Implantação, personalização, hospedagem e suporte para gestão integrada.": "Implementación, personalización, alojamiento y soporte para una gestión integrada.", "CRM open source configurado e operado para sua equipe comercial.": "CRM de código abierto configurado y operado para su equipo comercial.", "Portais, sistemas internos, integrações e produtos digitais.": "Portales, sistemas internos, integraciones y productos digitales.",
  "Experiência aplicada": "Experiencia aplicada", "Empresas reais. Operações diferentes.": "Empresas reales. Operaciones diferentes.", "Atuamos em ambientes de logística, mercado pet, indústria e operação digital, adaptando tecnologia ao contexto de cada cliente.": "Trabajamos en logística, mercado de mascotas, industria y operación digital, adaptando la tecnología al contexto de cada cliente.", "Soluções de injeção termoplástica": "Soluciones de inyección termoplástica", "Identidade empresarial": "Identidad empresarial", "Uma empresa brasileira, com contato direto.": "Una empresa brasileña con contacto directo.", "Atendimento para São Paulo e Grande São Paulo, com suporte remoto e presencial conforme a necessidade da operação.": "Atención en São Paulo y Gran São Paulo, con soporte remoto y presencial según las necesidades.", "Razão social": "Razón social", "Nome": "Nombre", "Conversa direta": "Conversación directa", "Conte o cenário para a gente indicar um caminho realista.": "Cuéntenos el escenario para recomendar un camino realista.", "Conhecer a Upport →": "Conocer Upport →",
});

Object.assign(en, {
  "Suporte de TI para empresas em São Paulo | Upport": "IT Support for Companies in São Paulo | Upport",
  "Suporte de TI para empresas em São Paulo e Grande SP, remoto e presencial, com monitoramento, redes, segurança, backup e atendimento contínuo.": "IT support for companies in São Paulo and Greater São Paulo, remote and on-site, with monitoring, networks, security, backup and continuous service.",
  "Suporte de TI / São Paulo e Grande SP": "IT Support / São Paulo and Greater São Paulo",
  "Sua equipe trabalha. A TI ": "Your team works. IT ", "não para.": "does not stop.",
  "Suporte de TI para empresas com atendimento remoto e presencial, monitoramento e responsabilidade contínua sobre o ambiente.": "Business IT support with remote and on-site service, monitoring and continuous ownership of your environment.",
  "Solicitar diagnóstico": "Request an assessment", "Ver cobertura": "See coverage", "Operação UPPORT": "UPPORT operations", "Ambiente saudável": "Healthy environment",
  Disponibilidade: "Availability", Dispositivos: "Devices", Proteção: "Protection", Ativa: "Active", "últimos 30 dias": "last 30 days", monitorados: "monitored", "sem alertas críticos": "no critical alerts",
  "Atividade recente": "Recent activity", "Backup verificado": "Backup verified", "Atualização aplicada": "Update applied", "Rede estabilizada": "Network stabilized", "Saúde do ambiente": "Environment health",
  "TI gerenciada de ponta a ponta": "End-to-end managed IT", "Um único time para cuidar do ambiente inteiro.": "One team to manage the entire environment.",
  "Da dúvida de um usuário à continuidade dos servidores, a Upport acompanha a rotina, antecipa riscos e documenta o que mantém sua empresa funcionando.": "From a user's question to server continuity, Upport follows daily operations, anticipates risks and documents what keeps your company running.",
  "Suporte remoto e on site": "Remote and on-site support", "Monitoramento e prevenção": "Monitoring and prevention", "Redes e conectividade": "Networks and connectivity", "Segurança e identidade": "Security and identity", "Backup e continuidade": "Backup and continuity", "Cloud e servidores": "Cloud and servers",
  "Atendimento que vira melhoria": "Support that drives improvement", "Chamado resolvido é só o começo.": "A resolved ticket is just the beginning.",
  Diagnóstico: "Assessment", Organização: "Organization", Evolução: "Evolution", "Para quem faz sentido": "Who it is for",
  "Suporte empresarial, sem distância entre problema e responsável.": "Business support with no distance between the problem and the owner.",
  "Atendimento remoto para todo o Brasil": "Remote service throughout Brazil", "Suporte presencial em São Paulo e Grande SP": "On-site support in São Paulo and Greater São Paulo", "Canal direto por portal, telefone e WhatsApp": "Direct channel through portal, phone and WhatsApp", "Escopo ajustado ao tamanho e à criticidade da operação": "Scope tailored to the size and criticality of the operation", "Integração com ERP, CRM, automações e software sob medida": "Integration with ERP, CRM, automation and custom software",
  "Comece pelo cenário atual": "Start with your current environment", "Onde a TI mais atrasa sua equipe hoje?": "Where does IT slow your team down today?", "Chamar no WhatsApp": "Message us on WhatsApp", "Suporte de TI": "IT Support",
});

Object.assign(es, {
  "Suporte de TI para empresas em São Paulo | Upport": "Soporte de TI para empresas en São Paulo | Upport",
  "Suporte de TI para empresas em São Paulo e Grande SP, remoto e presencial, com monitoramento, redes, segurança, backup e atendimento contínuo.": "Soporte de TI para empresas en São Paulo y Gran São Paulo, remoto y presencial, con monitoreo, redes, seguridad, copias y atención continua.",
  "Suporte de TI / São Paulo e Grande SP": "Soporte de TI / São Paulo y Gran São Paulo",
  "Sua equipe trabalha. A TI ": "Su equipo trabaja. TI ", "não para.": "no se detiene.",
  "Suporte de TI para empresas com atendimento remoto e presencial, monitoramento e responsabilidade contínua sobre o ambiente.": "Soporte de TI empresarial con atención remota y presencial, monitoreo y responsabilidad continua sobre el entorno.",
  "Solicitar diagnóstico": "Solicitar diagnóstico", "Ver cobertura": "Ver cobertura", "Operação UPPORT": "Operación UPPORT", "Ambiente saudável": "Entorno saludable",
  Disponibilidade: "Disponibilidad", Dispositivos: "Dispositivos", Proteção: "Protección", Ativa: "Activa", "últimos 30 dias": "últimos 30 días", monitorados: "monitoreados", "sem alertas críticos": "sin alertas críticos",
  "Atividade recente": "Actividad reciente", "Backup verificado": "Copia verificada", "Atualização aplicada": "Actualización aplicada", "Rede estabilizada": "Red estabilizada", "Saúde do ambiente": "Salud del entorno",
  "TI gerenciada de ponta a ponta": "TI gestionada de extremo a extremo", "Um único time para cuidar do ambiente inteiro.": "Un solo equipo para cuidar todo el entorno.",
  "Da dúvida de um usuário à continuidade dos servidores, a Upport acompanha a rotina, antecipa riscos e documenta o que mantém sua empresa funcionando.": "Desde una duda de usuario hasta la continuidad de los servidores, Upport acompaña la rutina, anticipa riesgos y documenta lo que mantiene su empresa funcionando.",
  "Suporte remoto e on site": "Soporte remoto y presencial", "Monitoramento e prevenção": "Monitoreo y prevención", "Redes e conectividade": "Redes y conectividad", "Segurança e identidade": "Seguridad e identidad", "Backup e continuidade": "Copias y continuidad", "Cloud e servidores": "Nube y servidores",
  "Atendimento que vira melhoria": "Atención que genera mejoras", "Chamado resolvido é só o começo.": "Un ticket resuelto es solo el comienzo.",
  Diagnóstico: "Diagnóstico", Organização: "Organización", Evolução: "Evolución", "Para quem faz sentido": "Para quién es",
  "Suporte empresarial, sem distância entre problema e responsável.": "Soporte empresarial sin distancia entre el problema y el responsable.",
  "Atendimento remoto para todo o Brasil": "Atención remota en todo Brasil", "Suporte presencial em São Paulo e Grande SP": "Soporte presencial en São Paulo y Gran São Paulo", "Canal direto por portal, telefone e WhatsApp": "Canal directo por portal, teléfono y WhatsApp", "Escopo ajustado ao tamanho e à criticidade da operação": "Alcance adaptado al tamaño y criticidad de la operación", "Integração com ERP, CRM, automações e software sob medida": "Integración con ERP, CRM, automatizaciones y software a medida",
  "Comece pelo cenário atual": "Empiece por el escenario actual", "Onde a TI mais atrasa sua equipe hoje?": "¿Dónde retrasa más TI a su equipo hoy?", "Chamar no WhatsApp": "Contactar por WhatsApp", "Suporte de TI": "Soporte de TI",
});

Object.assign(en, {
  "Sua equipe trabalha. A TI": "Your team works. IT",
  "Painel de operação de TI gerenciada": "Managed IT operations dashboard",
  "Servidor financeiro · agora": "Finance server · now", "12 estações · há 8 min": "12 workstations · 8 min ago", "Unidade São Paulo · há 21 min": "São Paulo office · 21 min ago",
  "Atendimento aos usuários, estações, aplicações e acessos, com visita presencial em São Paulo e Grande SP quando necessário.": "Support for users, workstations, applications and access, with on-site visits in São Paulo and Greater São Paulo when needed.",
  "Acompanhamento de servidores, serviços, capacidade e alertas para agir antes que uma falha interrompa a operação.": "Monitoring servers, services, capacity and alerts to act before a failure interrupts operations.",
  "Wi-Fi corporativo, VPN, pfSense, switches e organização da rede com segurança e estabilidade.": "Corporate Wi-Fi, VPN, pfSense, switches and network organization with security and stability.",
  "Proteção de endpoints, controle de acessos, políticas, atualizações e boas práticas adequadas ao seu cenário.": "Endpoint protection, access control, policies, updates and best practices suited to your environment.",
  "Rotinas verificadas, recuperação planejada e documentação para reduzir o impacto de incidentes.": "Verified routines, planned recovery and documentation to reduce the impact of incidents.",
  "Administração de Windows, Linux, Microsoft 365, serviços em nuvem e ambientes locais ou híbridos.": "Administration of Windows, Linux, Microsoft 365, cloud services and local or hybrid environments.",
  "Registramos recorrências, eliminamos causas e organizamos o ambiente para a tecnologia deixar de ser uma sequência de urgências.": "We track recurring issues, eliminate root causes and organize the environment so technology stops being a series of emergencies.",
  "Mapeamos usuários, equipamentos, sistemas, fornecedores e riscos.": "We map users, equipment, systems, vendors and risks.", "Definimos prioridades, acessos, documentação e plano de continuidade.": "We define priorities, access, documentation and a continuity plan.", "Atendemos, monitoramos e mantemos o ambiente atualizado.": "We support, monitor and keep the environment up to date.", "Revisamos indicadores e propomos melhorias com contexto de negócio.": "We review metrics and propose improvements with business context.",
  "Ideal para pequenas e médias empresas que precisam de uma equipe de TI próxima, mas não querem montar e manter toda a estrutura internamente.": "Ideal for small and medium-sized companies that need a close IT team without building and maintaining the entire structure in-house.",
  "Conte como sua empresa opera. A Upport avalia o ambiente e propõe um caminho objetivo.": "Tell us how your company operates. Upport assesses the environment and proposes a practical path.",
});

Object.assign(es, {
  "Sua equipe trabalha. A TI": "Su equipo trabaja. TI",
  "Painel de operação de TI gerenciada": "Panel de operación de TI gestionada",
  "Servidor financeiro · agora": "Servidor financiero · ahora", "12 estações · há 8 min": "12 equipos · hace 8 min", "Unidade São Paulo · há 21 min": "Unidad São Paulo · hace 21 min",
  "Atendimento aos usuários, estações, aplicações e acessos, com visita presencial em São Paulo e Grande SP quando necessário.": "Atención a usuarios, equipos, aplicaciones y accesos, con visitas presenciales en São Paulo y Gran São Paulo cuando sea necesario.",
  "Acompanhamento de servidores, serviços, capacidade e alertas para agir antes que uma falha interrompa a operação.": "Monitoreo de servidores, servicios, capacidad y alertas para actuar antes de que una falla interrumpa la operación.",
  "Wi-Fi corporativo, VPN, pfSense, switches e organização da rede com segurança e estabilidade.": "Wi-Fi corporativo, VPN, pfSense, switches y organización de red con seguridad y estabilidad.",
  "Proteção de endpoints, controle de acessos, políticas, atualizações e boas práticas adequadas ao seu cenário.": "Protección de endpoints, control de accesos, políticas, actualizaciones y buenas prácticas adecuadas a su entorno.",
  "Rotinas verificadas, recuperação planejada e documentação para reduzir o impacto de incidentes.": "Rutinas verificadas, recuperación planificada y documentación para reducir el impacto de incidentes.",
  "Administração de Windows, Linux, Microsoft 365, serviços em nuvem e ambientes locais ou híbridos.": "Administración de Windows, Linux, Microsoft 365, servicios en la nube y entornos locales o híbridos.",
  "Registramos recorrências, eliminamos causas e organizamos o ambiente para a tecnologia deixar de ser uma sequência de urgências.": "Registramos recurrencias, eliminamos causas y organizamos el entorno para que la tecnología deje de ser una serie de urgencias.",
  "Mapeamos usuários, equipamentos, sistemas, fornecedores e riscos.": "Mapeamos usuarios, equipos, sistemas, proveedores y riesgos.", "Definimos prioridades, acessos, documentação e plano de continuidade.": "Definimos prioridades, accesos, documentación y plan de continuidad.", "Atendemos, monitoramos e mantemos o ambiente atualizado.": "Atendemos, monitoreamos y mantenemos el entorno actualizado.", "Revisamos indicadores e propomos melhorias com contexto de negócio.": "Revisamos indicadores y proponemos mejoras con contexto de negocio.",
  "Ideal para pequenas e médias empresas que precisam de uma equipe de TI próxima, mas não querem montar e manter toda a estrutura internamente.": "Ideal para pequeñas y medianas empresas que necesitan un equipo de TI cercano sin mantener toda la estructura internamente.",
  "Conte como sua empresa opera. A Upport avalia o ambiente e propõe um caminho objetivo.": "Cuéntenos cómo opera su empresa. Upport evalúa el entorno y propone un camino objetivo.",
});

Object.assign(en, {
  "Painel demonstrativo de monitoramento com Grafana e Zabbix": "Monitoring dashboard demo with Grafana and Zabbix",
  "Monitoramento ativo": "Monitoring active",
  "Navegação do painel": "Dashboard navigation",
  "Infraestrutura / Visão geral": "Infrastructure / Overview",
  "Coleta Zabbix · visualização Grafana": "Zabbix collection · Grafana visualization",
  "Últimas 6 horas": "Last 6 hours",
  "Atualização 30s": "Refresh 30s",
  "HOSTS DISPONÍVEIS": "AVAILABLE HOSTS",
  DISPONIBILIDADE: "AVAILABILITY",
  "ALERTAS CRÍTICOS": "CRITICAL ALERTS",
  BACKUPS: "BACKUPS",
  "100% online": "100% online",
  "sem ação pendente": "no action pending",
  "verificados hoje": "verified today",
  "CPU e memória · servidores": "CPU and memory · servers",
  "CPU e memória dos servidores nas últimas seis horas": "Server CPU and memory over the last six hours",
  Memória: "Memory",
  "30 dias": "30 days",
  Operacional: "Operational",
  Atenção: "Warning",
  Indisponível: "Unavailable",
  "Utilização por host": "Usage by host",
  "CPU atual": "Current CPU",
  "Eventos recentes": "Recent events",
  "Última hora": "Last hour",
  "Backup concluído": "Backup completed",
  "ERP-SQL-01 · agora": "ERP-SQL-01 · now",
  "CPU acima de 65%": "CPU above 65%",
  "APP-PROD-02 · há 4 min": "APP-PROD-02 · 4 min ago",
  "Serviço validado": "Service validated",
  "FILES-SP-01 · há 12 min": "FILES-SP-01 · 12 min ago",
  "Painel demonstrativo integrado pela Upport. Grafana é marca da Grafana Labs; Zabbix é marca registrada da Zabbix LLC.": "Demo dashboard integrated by Upport. Grafana is a Grafana Labs trademark; Zabbix is a registered trademark of Zabbix LLC.",
});

Object.assign(es, {
  "Painel demonstrativo de monitoramento com Grafana e Zabbix": "Demostración de monitoreo con Grafana y Zabbix",
  "Monitoramento ativo": "Monitoreo activo",
  "Navegação do painel": "Navegación del panel",
  "Infraestrutura / Visão geral": "Infraestructura / Vista general",
  "Coleta Zabbix · visualização Grafana": "Recopilación Zabbix · visualización Grafana",
  "Últimas 6 horas": "Últimas 6 horas",
  "Atualização 30s": "Actualización 30s",
  "HOSTS DISPONÍVEIS": "HOSTS DISPONIBLES",
  DISPONIBILIDADE: "DISPONIBILIDAD",
  "ALERTAS CRÍTICOS": "ALERTAS CRÍTICAS",
  BACKUPS: "COPIAS",
  "100% online": "100% en línea",
  "sem ação pendente": "sin acciones pendientes",
  "verificados hoje": "verificados hoy",
  "CPU e memória · servidores": "CPU y memoria · servidores",
  "CPU e memória dos servidores nas últimas seis horas": "CPU y memoria de los servidores durante las últimas seis horas",
  Memória: "Memoria",
  "30 dias": "30 días",
  Operacional: "Operativo",
  Atenção: "Atención",
  Indisponível: "No disponible",
  "Utilização por host": "Uso por host",
  "CPU atual": "CPU actual",
  "Eventos recentes": "Eventos recientes",
  "Última hora": "Última hora",
  "Backup concluído": "Copia completada",
  "ERP-SQL-01 · agora": "ERP-SQL-01 · ahora",
  "CPU acima de 65%": "CPU superior al 65%",
  "APP-PROD-02 · há 4 min": "APP-PROD-02 · hace 4 min",
  "Serviço validado": "Servicio validado",
  "FILES-SP-01 · há 12 min": "FILES-SP-01 · hace 12 min",
  "Painel demonstrativo integrado pela Upport. Grafana é marca da Grafana Labs; Zabbix é marca registrada da Zabbix LLC.": "Panel demostrativo integrado por Upport. Grafana es una marca de Grafana Labs; Zabbix es una marca registrada de Zabbix LLC.",
});

Object.assign(en, {
  "Diagnóstico Upport": "Upport assessment", "Escolha o melhor horário.": "Choose the best time.",
  "Fechar agendamento": "Close scheduling", "Etapas do agendamento": "Scheduling steps", Data: "Date", Horário: "Time", "Seus dados": "Your details",
  "Primeiro passo": "First step", "Selecione uma data": "Select a date", "Segunda a sexta, das 08h às 18h": "Monday to Friday, 8am to 6pm",
  "Mês anterior": "Previous month", "Próximo mês": "Next month", "Alterar data": "Change date", "Segundo passo": "Second step", "Escolha um horário": "Choose a time",
  "Diagnóstico inicial": "Initial assessment", "Conversa de aproximadamente 45 minutos": "Approximately 45-minute conversation",
  "Não há mais horários disponíveis neste dia. Escolha outra data.": "There are no more times available on this date. Choose another date.",
  "Alterar horário": "Change time", "Último passo": "Last step", "Como podemos falar com você?": "How can we reach you?", WhatsApp: "WhatsApp",
  "O que você gostaria de avaliar?": "What would you like us to assess?", "Conte brevemente sobre sua empresa ou necessidade.": "Briefly describe your company or need.",
  "Enviar solicitação": "Send request", "Solicitação enviada": "Request sent", "Recebemos seu pedido de agendamento.": "We received your scheduling request.",
  "A equipe da Upport vai confirmar o horário pelo e-mail ou WhatsApp informado.": "The Upport team will confirm the time by email or WhatsApp.",
  Concluir: "Done", "Enviando...": "Sending...", "Não foi possível enviar agora. Tente novamente ou fale com a Upport pelo WhatsApp.": "We could not send it now. Try again or contact Upport on WhatsApp.",
});

Object.assign(es, {
  "Diagnóstico Upport": "Diagnóstico Upport", "Escolha o melhor horário.": "Elija el mejor horario.",
  "Fechar agendamento": "Cerrar reserva", "Etapas do agendamento": "Pasos de la reserva", Data: "Fecha", Horário: "Horario", "Seus dados": "Sus datos",
  "Primeiro passo": "Primer paso", "Selecione uma data": "Seleccione una fecha", "Segunda a sexta, das 08h às 18h": "De lunes a viernes, de 08h a 18h",
  "Mês anterior": "Mes anterior", "Próximo mês": "Mes siguiente", "Alterar data": "Cambiar fecha", "Segundo passo": "Segundo paso", "Escolha um horário": "Elija un horario",
  "Diagnóstico inicial": "Diagnóstico inicial", "Conversa de aproximadamente 45 minutos": "Conversación de aproximadamente 45 minutos",
  "Não há mais horários disponíveis neste dia. Escolha outra data.": "No hay más horarios disponibles este día. Elija otra fecha.",
  "Alterar horário": "Cambiar horario", "Último passo": "Último paso", "Como podemos falar com você?": "¿Cómo podemos contactarle?", WhatsApp: "WhatsApp",
  "O que você gostaria de avaliar?": "¿Qué le gustaría evaluar?", "Conte brevemente sobre sua empresa ou necessidade.": "Describa brevemente su empresa o necesidad.",
  "Enviar solicitação": "Enviar solicitud", "Solicitação enviada": "Solicitud enviada", "Recebemos seu pedido de agendamento.": "Hemos recibido su solicitud de reserva.",
  "A equipe da Upport vai confirmar o horário pelo e-mail ou WhatsApp informado.": "El equipo de Upport confirmará el horario por correo o WhatsApp.",
  Concluir: "Finalizar", "Enviando...": "Enviando...", "Não foi possível enviar agora. Tente novamente ou fale com a Upport pelo WhatsApp.": "No fue posible enviar ahora. Inténtelo de nuevo o contacte con Upport por WhatsApp.",
});

const dictionaries: Record<Exclude<Language, "pt">, Dictionary> = { en, es };

export function translateText(value: string): string {
  return activeLanguage === "pt"
    ? value
    : (dictionaries[activeLanguage][value] ?? value);
}

function languageMarkup(): string {
  return `<div class="language-picker" data-language-picker>
    <button class="language-trigger" type="button" data-language-trigger aria-label="Selecionar idioma" aria-expanded="false" aria-controls="language-menu"><i data-lucide="globe-2" aria-hidden="true"></i><span data-language-code>PT</span><i data-lucide="chevron-down" aria-hidden="true"></i></button>
    <div class="language-menu" id="language-menu" data-language-menu role="menu" hidden>
      <button type="button" role="menuitemradio" data-language="en"><img src="${FLAG_URLS.en}" alt=""><strong>English</strong></button>
      <button type="button" role="menuitemradio" data-language="pt"><img src="${FLAG_URLS.pt}" alt=""><strong>Português</strong></button>
      <button type="button" role="menuitemradio" data-language="es"><img src="${FLAG_URLS.es}" alt=""><strong>Español</strong></button>
    </div>
  </div>`;
}

function readLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    return stored === "en" || stored === "es" || stored === "pt"
      ? stored
      : "pt";
  } catch {
    return "pt";
  }
}

export function initI18n(): void {
  const navActions = document.querySelector(".nav-actions");
  navActions?.insertAdjacentHTML("afterbegin", languageMarkup());
  createIcons({
    icons: {
      ArrowLeft,
      BadgeDollarSign,
      Bell,
      BellRing,
      Globe2,
      ChevronDown,
      ChevronLeft,
      ChevronRight,
      MessageCircle,
      LifeBuoy,
      Mail,
      Phone,
      MapPin,
      ShieldCheck,
      Building2,
      CalendarDays,
      UsersRound,
      Target,
      ListTodo,
      Workflow,
      Search,
      Send,
      Plus,
      Columns3,
      LayoutDashboard,
      Landmark,
      SlidersHorizontal,
      Play,
      Zap,
      Clock3,
      Blocks,
      Boxes,
      ChartNoAxesCombined,
      Check,
      CircleDollarSign,
      Code2,
      Database,
      Factory,
      FileText,
      GitBranch,
      MonitorSmartphone,
      PackageCheck,
      PackageOpen,
      PanelsTopLeft,
      ReceiptText,
      RefreshCw,
      Server,
      ServerCog,
      Settings2,
      ShoppingCart,
      WalletCards,
      X,
    },
  });

  const textNodes: Array<{ node: Text; original: string }> = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        const value = node.nodeValue?.trim();
        if (
          !parent ||
          !value ||
          parent.closest("script, style, [data-language-picker]")
        )
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );
  let current = walker.nextNode();
  while (current) {
    const node = current as Text;
    textNodes.push({ node, original: node.nodeValue ?? "" });
    current = walker.nextNode();
  }
  const translatedAttributes = [
    ...document.querySelectorAll<HTMLElement>("[aria-label]"),
  ].map((element) => ({
    element,
    original: element.getAttribute("aria-label") ?? "",
  }));

  const originalTitle = document.title;
  const metaDescription = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  const originalDescription = metaDescription?.content ?? "";
  const picker = document.querySelector<HTMLElement>("[data-language-picker]");
  const trigger = document.querySelector<HTMLButtonElement>(
    "[data-language-trigger]",
  );
  const menu = document.querySelector<HTMLElement>("[data-language-menu]");
  const code = document.querySelector<HTMLElement>("[data-language-code]");

  function closeMenu(): void {
    if (!menu || !trigger) return;
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }

  function applyLanguage(language: Language): void {
    activeLanguage = language;
    const dictionary = language === "pt" ? null : dictionaries[language];
    for (const { node, original } of textNodes) {
      const source = original.trim();
      const translated = dictionary?.[source] ?? source;
      node.nodeValue = original.replace(source, translated);
    }
    document.title = dictionary?.[originalTitle] ?? originalTitle;
    for (const { element, original } of translatedAttributes) {
      element.setAttribute("aria-label", dictionary?.[original] ?? original);
    }
    if (metaDescription)
      metaDescription.content =
        dictionary?.[originalDescription] ?? originalDescription;
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    if (code) code.textContent = language.toUpperCase();
    document
      .querySelectorAll<HTMLButtonElement>("[data-language]")
      .forEach((button) => {
        const active = button.dataset.language === language;
        button.classList.toggle("active", active);
        button.setAttribute("aria-checked", String(active));
      });
    try {
      window.localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      /* Keep the choice for this page only. */
    }
    window.dispatchEvent(
      new CustomEvent("upport:languagechange", { detail: { language } }),
    );
    closeMenu();
  }

  trigger?.addEventListener("click", () => {
    if (!menu) return;
    const open = menu.hidden;
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  });
  document
    .querySelectorAll<HTMLButtonElement>("[data-language]")
    .forEach((button) => {
      button.addEventListener("click", () =>
        applyLanguage(button.dataset.language as Language),
      );
    });
  document.addEventListener("click", (event) => {
    if (picker && !picker.contains(event.target as Node)) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  applyLanguage(readLanguage());
}
