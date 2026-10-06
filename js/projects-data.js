// Datos detallados de los proyectos de Leonardo Miguel Brizuela
const PROJECTS_DATA = [
  {
    id: "siga",
    title: "Si.G.A — Sistema de Gestión de Animales",
    shortDesc: "Plataforma clínica integral para entidades y centros veterinarios con historias clínicas, trazabilidad y reportes.",
    category: "software",
    image: "assets/images/siga.jpg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST API"],
    featured: true,
    githubUrl: "https://github.com/brixtar/siga1-modern",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, estuve viendo el proyecto Si.G.A (Gestión Veterinaria) en tu portfolio y me gustaría hacerte una consulta técnica/comercial.",
    fullDesc: `
      <p><strong>Si.G.A</strong> es una solución de software completa desarrollada para digitalizar y centralizar toda la operativa de clínicas y centros veterinarios. Nació de la necesidad real de sustituir registros en papel y planillas desorganizadas por un sistema seguro, ágil y de fácil adopción.</p>
      
      <h4>🎯 Problema que resuelve</h4>
      <p>Las veterinarias y centros de atención animal pierden tiempo crítico buscando historiales clínicos manuales, sufren desajustes en el stock de medicamentos e insumos, y carecen de métricas claras sobre la atención de sus pacientes.</p>
      
      <h4>🏗️ Arquitectura y Tecnologías</h4>
      <ul>
        <li><strong>Backend:</strong> Desarrollado en Java con Spring Boot, estructurado bajo arquitectura por capas (Controladores, Servicios, Repositorios) con autenticación segura y validaciones de negocio rigurosas.</li>
        <li><strong>Frontend:</strong> Interfaz moderna y reactiva construida en React con TypeScript, priorizando la velocidad de carga y la ergonomía visual del profesional médico.</li>
        <li><strong>Base de Datos:</strong> PostgreSQL para garantizar la integridad referencial de historias clínicas, propietarios y tratamientos.</li>
      </ul>

      <h4>✨ Funcionalidades Clave</h4>
      <ul>
        <li>Ficha médica digital con trazabilidad completa de vacunas, cirugías y visitas.</li>
        <li>Buscador inteligente de pacientes por tutor, chip o especie.</li>
        <li>Panel de control con métricas en tiempo real de consultas diarias y tendencias.</li>
      </ul>
    `
  },
  {
    id: "broadcast",
    title: "Marcadores Deportivos & Broadcast OBS",
    shortDesc: "Suite de overlays en tiempo real para transmisiones deportivas (Fútbol y Básquet estilo NBA con Shot Clock).",
    category: "streaming",
    image: "assets/images/broadcast.jpg",
    tags: ["OBS Studio", "WebSockets", "Node.js", "Inkscape", "Audio Engineering", "Microservicios"],
    featured: true,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, vi tus overlays deportivos en tiempo real para OBS Studio y quisiera consultar por tu suite de transmisión.",
    fullDesc: `
      <p>Sistema profesional de gráficos para transmisiones en vivo vía OBS Studio, creado para jerarquizar el nivel de las transmisiones de partidos locales y ligas regionales con estética televisiva (estilo ESPN / NBA on ABC).</p>
      
      <h4>🎯 El Gran Desafío Técnico Resuelto</h4>
      <p>En el software convencional de marcadores, cuando el operador modificaba el nombre de un equipo o el tanteador en pleno partido, el backend bloqueaba el hilo del cronómetro o congelaba el reloj de posesión (Shot Clock de 24/14 segundos). Diseñé una <strong>arquitectura desacoplada de microservicios con WebSockets</strong> donde el flujo del tiempo es atómico e inmune a las modificaciones de interfaz.</p>
      
      <h4>🎨 Diseño & Sonido Integrado</h4>
      <ul>
        <li><strong>Diseño Vectorial con Inkscape:</strong> Creación de escudos, badges, barras de tanteador y banners con curvas vectoriales limpias optimizadas para resolución 1080p y 4K sin pérdida de nitidez.</li>
        <li><strong>Ingeniería de Audio en OBS:</strong> Configuración de cadenas de audio multicanal, filtros de ecualización, compresor para relatores y balance preciso entre sonido ambiente y música.</li>
        <li><strong>Fuentes Web en OBS (Browser Sources):</strong> Overlays ultralivianos que consumen menos del 2% de CPU durante la transmisión.</li>
      </ul>
    `
  },
  {
    id: "chamisistem",
    title: "ChamiSistem — ERP & Punto de Venta PYME",
    shortDesc: "Sistema comercial de facturación, caja diaria, control de stock por código de barras y gestión de clientes.",
    category: "software",
    image: "assets/images/chamisistem.jpg",
    tags: ["Java", "SQL / MySQL", "Control de Stock", "POS", "Facturación", "Desktop"],
    featured: true,
    githubUrl: "https://github.com/brixtar/sistemadeventa1",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, me interesa el software de facturación e inventario ChamiSistem que vi en tu portfolio.",
    fullDesc: `
      <p><strong>ChamiSistem</strong> es un software de punto de venta (POS) y gestión de inventario concebido a medida de las necesidades comerciales de pequeños y medianos comerciantes de Chamical y la región.</p>
      
      <h4>🎯 Problema que resuelve</h4>
      <p>Muchos comercios locales se enfrentaban a software comercial costoso, sobredimensionado o con suscripciones mensuales imposibles de sostener. ChamiSistem ofrece robustez local, rapidez en caja y control exhaustivo de inventario.</p>
      
      <h4>🛠️ Especificaciones Técnicas</h4>
      <ul>
        <li><strong>Lógica en Java:</strong> Algoritmos rápidos de búsqueda, validación de transacciones en caja y control estricto de caja chica y arqueos diarios.</li>
        <li><strong>Persistencia SQL:</strong> Esquema normalizado para soportar miles de referencias de productos, proveedores, historial de precios y clientes con cuenta corriente.</li>
        <li><strong>Integración con Hardware:</strong> Compatible con lectores ópticos de código de barras e impresoras térmicas de tickets.</li>
      </ul>
    `
  },
  {
    id: "forensic",
    title: "AegisVault & Suite de Peritaje Forense",
    shortDesc: "Metodologías y herramientas de análisis pericial informático, cadena de custodia y verificación de integridad.",
    category: "forense",
    image: "assets/images/forensic.jpg",
    tags: ["Peritaje Forense", "Seguridad Informática", "Criptografía", "Cadena de Custodia", "SHA-256", "Auditoría"],
    featured: true,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, te contacto para una consulta sobre peritaje informático forense / verificación de evidencia digital.",
    fullDesc: `
      <p>Marco de trabajo y utilidades de preservación de evidencia digital basadas en los estándares del Consejo Profesional de Ciencias Informáticas y normativas procesales de auditoría digital.</p>
      
      <h4>🛡️ Capacidades del Perfil Forense</h4>
      <ul>
        <li><strong>Adquisición de Evidencia:</strong> Protocolos de clonación bit a bit utilizando bloqueadores de escritura (write-blockers) para garantizar que la evidencia original jamás sea alterada.</li>
        <li><strong>Verificación Criptográfica:</strong> Generación y comparación instantánea de hashes (MD5, SHA-1, SHA-256) antes y después de cada pericia para certificar la inmutabilidad ante tribunales.</li>
        <li><strong>Cadena de Custodia:</strong> Documentación estricta y cronológica de recepción, análisis, almacenamiento y disposición final de dispositivos electrónicos.</li>
        <li><strong>Auditoría de Software:</strong> Verificación de vulnerabilidades, fuga de datos y trazabilidad en logs del sistema operativo.</li>
      </ul>
    `
  },
  {
    id: "coucou",
    title: "Coucou Desktop Monitor & AI Orchestration",
    shortDesc: "Compañero de escritorio e integración de agentes de IA para supervisión de procesos y permisos en tiempo real.",
    category: "automation",
    image: "assets/images/hero_badge.jpg",
    tags: ["Tauri 2", "Rust", "TypeScript", "Agentes de IA", "Automatización"],
    featured: false,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, me llamó mucho la atención tu proyecto Coucou Desktop Monitor con Tauri y agentes de IA.",
    fullDesc: `
      <p>Exploración y adaptación de entornos de supervisión de agentes inteligentes de codificación (Claude Code, Gemini CLI, Antigravity) para monitorear ejecuciones, permisos y flujos de trabajo autónomos sin abandonar el contexto de desarrollo.</p>
      
      <h4>🚀 Aspectos Técnicos</h4>
      <ul>
        <li>Arquitectura ligera basada en Tauri 2 con backend nativo y frontend reactivo en TypeScript.</li>
        <li>Supervisión de llamadas al sistema y hooks de permisos en tiempo real.</li>
        <li>Optimización de flujos de trabajo para desarrolladores asistidos por IA.</li>
      </ul>
    `
  },
  {
    id: "gmail-ext",
    title: "Gmail Clean Extension & Scripts de Mantenimiento",
    shortDesc: "Extensión para navegador y scripts de automatización para depuración y limpieza masiva de bandejas de entrada.",
    category: "automation",
    image: "assets/images/chamisistem.jpg",
    tags: ["JavaScript", "Chrome Extension API", "DOM Automation", "Scripts"],
    featured: false,
    githubUrl: "https://github.com/brixtar/gmail-delete-extension",
    demoUrl: null,
    whatsappMsg: "Hola Leonardo, quisiera consultarte sobre las herramientas de automatización y scripts para Gmail.",
    fullDesc: `
      <p>Herramienta diseñada para resolver la fricción del desborde de almacenamiento en cuentas de correo electrónico, automatizando la selección, filtrado por antigüedad/peso y eliminación por lotes seguros.</p>
      
      <h4>⚡ Beneficios</h4>
      <ul>
        <li>Reducción del tiempo de mantenimiento manual de horas a minutos.</li>
        <li>Ejecución segura respetando límites de peticiones del proveedor.</li>
      </ul>
    `
  }
];

// Textos e internacionalización ES / EN
const I18N = {
  es: {
    navHome: "Inicio",
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navServices: "Servicios",
    navExperience: "Trayectoria",
    navContact: "Contacto",
    statusAvailable: "Disponible para proyectos & roles técnicos",
    heroRole: "Analista Universitario de Sistemas | Software & Soluciones Integrales",
    heroTagline: "Conecto necesidades reales con soluciones tecnológicas concretas: desarrollo de software robusto, transmisión deportiva en vivo, peritaje informático y soporte técnico de campo.",
    btnProjects: "Explorar Proyectos",
    btnCv: "Descargar CV",
    btnWhatsapp: "WhatsApp Directo",
    filterAll: "Todos",
    filterSoftware: "Software & Sistemas",
    filterStreaming: "Streaming & OBS",
    filterForensic: "Seguridad & Forense",
    filterAutomation: "Automatizaciones",
    statYears: "Años en IT y Soporte",
    statProjects: "Proyectos y Sistemas",
    statHardware: "Equipos Mantenidos",
    statReliability: "Compromiso Técnico",
    btnViewDetails: "Ver Detalles & Arquitectura",
    btnGithubRepo: "Ver Código en GitHub",
    btnLiveDemo: "Ver Demo en Vivo",
    btnConsultWa: "Consultar por este proyecto"
  },
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navSkills: "Skills",
    navServices: "Services",
    navExperience: "Experience",
    navContact: "Contact",
    statusAvailable: "Available for technical roles & projects",
    heroRole: "Systems Analyst | Software Engineer & Technical Solutions",
    heroTagline: "Connecting real-world challenges with solid technical solutions: robust software development, live sports broadcasting, digital forensics, and hands-on IT support.",
    btnProjects: "View Projects",
    btnCv: "Download Resume",
    btnWhatsapp: "Direct WhatsApp",
    filterAll: "All",
    filterSoftware: "Software & Systems",
    filterStreaming: "Streaming & OBS",
    filterForensic: "Security & Forensics",
    filterAutomation: "Automations",
    statYears: "Years in IT & Support",
    statProjects: "Projects & Systems",
    statHardware: "Machines Serviced",
    statReliability: "Technical Reliability",
    btnViewDetails: "View Details & Architecture",
    btnGithubRepo: "View Code on GitHub",
    btnLiveDemo: "Live Demo",
    btnConsultWa: "Inquire via WhatsApp"
  }
};
