// ============================================================================
// DATOS DE PROYECTOS & SISTEMA DE INTERNACIONALIZACIÓN (ES / EN)
// Leonardo Miguel Brizuela — Analista de Sistemas & Solucionador Tecnológico
// ============================================================================

const PROJECTS_DATA = [
  {
    id: "siga",
    category: "software",
    image: "assets/images/siga.jpg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST API"],
    featured: true,
    githubUrl: "https://github.com/brixtar/siga1-modern",
    demoUrl: null,
    title: {
      es: "Si.G.A — Sistema de Gestión de Animales",
      en: "Si.G.A — Veterinary Clinic & Animal Management System"
    },
    shortDesc: {
      es: "Plataforma clínica integral para entidades y centros veterinarios con historias clínicas, trazabilidad y reportes.",
      en: "Comprehensive clinical platform for veterinary clinics and animal welfare centers with medical records, tracking, and analytics."
    },
    whatsappMsg: {
      es: "Hola Leonardo, estuve viendo el proyecto Si.G.A (Gestión Veterinaria) en tu portfolio y me gustaría hacerte una consulta técnica/comercial.",
      en: "Hi Leonardo, I reviewed your Si.G.A (Veterinary Management) project on your portfolio and would like to ask a technical/business question."
    },
    fullDesc: {
      es: `
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
      `,
      en: `
        <p><strong>Si.G.A</strong> is a full-stack clinical software solution designed to digitize and centralize operations in veterinary clinics and animal hospitals. It was built to solve the real-world friction of paper records and scattered spreadsheets with an intuitive, resilient system.</p>
        
        <h4>🎯 Problem Solved</h4>
        <p>Veterinary staff waste critical hours looking up paper health cards, encounter inventory mismatches on medicines and surgical supplies, and lack real-time visibility into clinical patient history.</p>
        
        <h4>🏗️ Architecture & Technologies</h4>
        <ul>
          <li><strong>Backend:</strong> Developed in Java with Spring Boot, structured with clean layered architecture (Controllers, Services, Repositories), secure authentication, and strict business validation rules.</li>
          <li><strong>Frontend:</strong> Modern reactive interface built in React with TypeScript, optimized for fast rendering and visual ergonomics for practitioners.</li>
          <li><strong>Database:</strong> PostgreSQL to guarantee relational integrity across medical files, pet owners, and ongoing treatments.</li>
        </ul>

        <h4>✨ Key Features</h4>
        <ul>
          <li>Digital medical files with complete tracking of vaccinations, surgeries, and clinical checkups.</li>
          <li>Smart search for patients by guardian, microchip, or species.</li>
          <li>Executive dashboard with real-time metrics on daily appointments and clinical trends.</li>
        </ul>
      `
    }
  },
  {
    id: "broadcast",
    category: "streaming",
    image: "assets/images/broadcast.jpg",
    tags: ["OBS Studio", "WebSockets", "Node.js", "Inkscape", "Audio Engineering", "Microservicios"],
    featured: true,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    title: {
      es: "Marcadores Deportivos & Broadcast OBS",
      en: "Live Sports Scoreboards & OBS Broadcast Suite"
    },
    shortDesc: {
      es: "Suite de overlays en tiempo real para transmisiones deportivas (Fútbol y Básquet estilo NBA con Shot Clock).",
      en: "Real-time graphic overlay suite for live sports broadcasts (Football and NBA-style Basketball with Shot Clock)."
    },
    whatsappMsg: {
      es: "Hola Leonardo, vi tus overlays deportivos en tiempo real para OBS Studio y quisiera consultar por tu suite de transmisión.",
      en: "Hi Leonardo, I checked out your real-time sports overlays for OBS Studio and would like to inquire about your broadcast suite."
    },
    fullDesc: {
      es: `
        <p>Sistema profesional de gráficos para transmisiones en vivo vía OBS Studio, creado para jerarquizar el nivel de las transmisiones de partidos locales y ligas regionales con estética televisiva (estilo ESPN / NBA on ABC).</p>
        
        <h4>🎯 El Gran Desafío Técnico Resuelto</h4>
        <p>En el software convencional de marcadores, cuando el operador modificaba el nombre de un equipo o el tanteador en pleno partido, el backend bloqueaba el hilo del cronómetro o congelaba el reloj de posesión (Shot Clock de 24/14 segundos). Diseñé una <strong>arquitectura desacoplada de microservicios con WebSockets</strong> donde el flujo del tiempo es atómico e inmune a las modificaciones de interfaz.</p>
        
        <h4>🎨 Diseño & Sonido Integrado</h4>
        <ul>
          <li><strong>Diseño Vectorial con Inkscape:</strong> Creación de escudos, badges, barras de tanteador y banners con curvas vectoriales limpias optimizadas para resolución 1080p y 4K sin pérdida de nitidez.</li>
          <li><strong>Ingeniería de Audio en OBS:</strong> Configuración de cadenas de audio multicanal, filtros de ecualización, compresor para relatores y balance preciso entre sonido ambiente y música.</li>
          <li><strong>Fuentes Web en OBS (Browser Sources):</strong> Overlays ultralivianos que consumen menos del 2% de CPU durante la transmisión.</li>
        </ul>
      `,
      en: `
        <p>Professional live graphics system for OBS Studio, created to elevate regional league broadcasts with national-network television aesthetics (style of ESPN / NBA on ABC).</p>
        
        <h4>🎯 Core Technical Challenge Solved</h4>
        <p>In standard scoreboard tools, whenever an operator edited a team name or updated points during live gameplay, the main thread froze the timer or stalled the 24s/14s Shot Clock. I designed a <strong>decoupled microservices architecture using WebSockets</strong> where clock timing runs atomically and is completely immune to UI alterations.</p>
        
        <h4>🎨 Integrated Vector Design & Audio Engineering</h4>
        <ul>
          <li><strong>Vector Graphics with Inkscape:</strong> Custom badges, score bars, and TV bugs designed with clean vector mathematics, crisp in both 1080p and 4K broadcasts.</li>
          <li><strong>Audio Engineering in OBS:</strong> Multi-track routing, vocal compression/limiting for commentators, and calibrated ducking between ambient stadium mics and soundtrack.</li>
          <li><strong>Web Overlays (Browser Sources):</strong> Ultra-lightweight DOM rendering consuming under 2% CPU during high-intensity live streaming.</li>
        </ul>
      `
    }
  },
  {
    id: "chamisistem",
    category: "software",
    image: "assets/images/chamisistem.jpg",
    tags: ["Java", "SQL / MySQL", "Control de Stock", "POS", "Facturación", "Desktop"],
    featured: true,
    githubUrl: "https://github.com/brixtar/sistemadeventa1",
    demoUrl: null,
    title: {
      es: "ChamiSistem — ERP & Punto de Venta PYME",
      en: "ChamiSistem — Retail POS & Inventory ERP"
    },
    shortDesc: {
      es: "Sistema comercial de facturación, caja diaria, control de stock por código de barras y gestión de clientes.",
      en: "Commercial billing system, daily cash closings, barcode inventory management, and customer account tracking."
    },
    whatsappMsg: {
      es: "Hola Leonardo, me interesa el software de facturación e inventario ChamiSistem que vi en tu portfolio.",
      en: "Hi Leonardo, I am interested in the ChamiSistem billing and inventory POS software featured on your portfolio."
    },
    fullDesc: {
      es: `
        <p><strong>ChamiSistem</strong> es un software de punto de venta (POS) y gestión de inventario concebido a medida de las necesidades comerciales de pequeños y medianos comerciantes de Chamical y la región.</p>
        
        <h4>🎯 Problema que resuelve</h4>
        <p>Muchos comercios locales se enfrentaban a software comercial costoso, sobredimensionado o con suscripciones mensuales imposibles de sostener. ChamiSistem ofrece robustez local, rapidez en caja y control exhaustivo de inventario.</p>
        
        <h4>🛠️ Especificaciones Técnicas</h4>
        <ul>
          <li><strong>Lógica en Java:</strong> Algoritmos rápidos de búsqueda, validación de transacciones en caja y control estricto de caja chica y arqueos diarios.</li>
          <li><strong>Persistencia SQL:</strong> Esquema normalizado para soportar miles de referencias de productos, proveedores, historial de precios y clientes con cuenta corriente.</li>
          <li><strong>Integración con Hardware:</strong> Compatible con lectores ópticos de código de barras e impresoras térmicas de tickets.</li>
        </ul>
      `,
      en: `
        <p><strong>ChamiSistem</strong> is a Point of Sale (POS) and inventory control software tailored specifically to the operational reality of small and medium retailers.</p>
        
        <h4>🎯 Problem Solved</h4>
        <p>Local businesses often face overpriced software bloated with unnecessary features or recurring cloud subscriptions they cannot sustain. ChamiSistem delivers local robustness, instant checkout, and dependable inventory governance.</p>
        
        <h4>🛠️ Technical Specifications</h4>
        <ul>
          <li><strong>Java Core Logic:</strong> Fast search indexing, transaction validation, and automated daily cash reconciliation.</li>
          <li><strong>SQL Persistence:</strong> Normalized schema designed to handle thousands of product SKUs, suppliers, historical pricing, and customer debt ledger accounts.</li>
          <li><strong>Hardware Integration:</strong> Direct support for optical barcode scanners and thermal receipt printers.</li>
        </ul>
      `
    }
  },
  {
    id: "forensic",
    category: "forense",
    image: "assets/images/forensic.jpg",
    tags: ["Peritaje Forense", "Seguridad Informática", "Criptografía", "Cadena de Custodia", "SHA-256", "Auditoría"],
    featured: true,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    title: {
      es: "AegisVault & Suite de Peritaje Forense",
      en: "AegisVault & Digital Forensic Suite"
    },
    shortDesc: {
      es: "Metodologías y herramientas de análisis pericial informático, cadena de custodia y verificación de integridad.",
      en: "Methodologies and forensic inspection toolset for digital evidence acquisition, chain of custody, and cryptographic verification."
    },
    whatsappMsg: {
      es: "Hola Leonardo, te contacto para una consulta sobre peritaje informático forense / verificación de evidencia digital.",
      en: "Hi Leonardo, I am contacting you regarding a digital forensics / court evidence verification inquiry."
    },
    fullDesc: {
      es: `
        <p>Marco de trabajo y utilidades de preservación de evidencia digital basadas en los estándares del Consejo Profesional de Ciencias Informáticas y normativas procesales de auditoría digital.</p>
        
        <h4>🛡️ Capacidades del Perfil Forense</h4>
        <ul>
          <li><strong>Adquisición de Evidencia:</strong> Protocolos de clonación bit a bit utilizando bloqueadores de escritura (write-blockers) para garantizar que la evidencia original jamás sea alterada.</li>
          <li><strong>Verificación Criptográfica:</strong> Generación y comparación instantánea de hashes (MD5, SHA-1, SHA-256) antes y después de cada pericia para certificar la inmutabilidad ante tribunales.</li>
          <li><strong>Cadena de Custodia:</strong> Documentación estricta y cronológica de recepción, análisis, almacenamiento y disposición final de dispositivos electrónicos.</li>
          <li><strong>Auditoría de Software:</strong> Verificación de vulnerabilidades, fuga de datos y trazabilidad en logs del sistema operativo.</li>
        </ul>
      `,
      en: `
        <p>Digital evidence preservation framework and utilities aligned with the official standards of the Professional Council of Computer Sciences (CPCIR) and procedural judicial requirements.</p>
        
        <h4>🛡️ Forensic Analyst Capabilities</h4>
        <ul>
          <li><strong>Evidence Acquisition:</strong> Bit-by-bit imaging protocols utilizing hardware/software write-blockers to ensure zero alteration of original digital media.</li>
          <li><strong>Cryptographic Verification:</strong> Instant computation and validation of cryptographic hashes (MD5, SHA-1, SHA-256) before and after handling to guarantee evidentiary integrity.</li>
          <li><strong>Chain of Custody:</strong> Rigorous chronological documentation detailing device intake, storage conditions, forensic examination, and court custody delivery.</li>
          <li><strong>Software Auditing:</strong> Log anomaly analysis, unauthorized data exfiltration inspection, and system tampering detection.</li>
        </ul>
      `
    }
  },
  {
    id: "coucou",
    category: "automation",
    image: "assets/images/hero_badge.jpg",
    tags: ["Tauri 2", "Rust", "TypeScript", "Agentes de IA", "Automatización"],
    featured: false,
    githubUrl: "https://github.com/brixtar",
    demoUrl: null,
    title: {
      es: "Coucou Desktop Monitor & AI Orchestration",
      en: "Coucou Desktop Monitor & AI Orchestration"
    },
    shortDesc: {
      es: "Compañero de escritorio e integración de agentes de IA para supervisión de procesos y permisos en tiempo real.",
      en: "Desktop companion and AI agent integration for real-time permission supervision and automated process telemetry."
    },
    whatsappMsg: {
      es: "Hola Leonardo, me llamó mucho la atención tu proyecto Coucou Desktop Monitor con Tauri y agentes de IA.",
      en: "Hi Leonardo, I was very intrigued by your Coucou Desktop Monitor project built with Tauri and AI agents."
    },
    fullDesc: {
      es: `
        <p>Exploración y adaptación de entornos de supervisión de agentes inteligentes de codificación (Claude Code, Gemini CLI, Antigravity) para monitorear ejecuciones, permisos y flujos de trabajo autónomos sin abandonar el contexto de desarrollo.</p>
        
        <h4>🚀 Aspectos Técnicos</h4>
        <ul>
          <li>Arquitectura ligera basada en Tauri 2 con backend nativo y frontend reactivo en TypeScript.</li>
          <li>Supervisión de llamadas al sistema y hooks de permisos en tiempo real.</li>
          <li>Optimización de flujos de trabajo para desarrolladores asistidos por IA.</li>
        </ul>
      `,
      en: `
        <p>Supervision and companion cockpit for autonomous AI coding agents (Claude Code, Gemini CLI, Antigravity) to monitor process lifecycles, execution sandboxing, and background jobs within a unified developer view.</p>
        
        <h4>🚀 Technical Architecture</h4>
        <ul>
          <li>Ultra-light desktop architecture built on Tauri 2 with Rust backend performance and TypeScript UI responsiveness.</li>
          <li>System call tracking and dynamic permission consent hooks in real time.</li>
          <li>Workflow friction reduction for AI-pair-programming developers.</li>
        </ul>
      `
    }
  },
  {
    id: "gmail-ext",
    category: "automation",
    image: "assets/images/chamisistem.jpg",
    tags: ["JavaScript", "Chrome Extension API", "DOM Automation", "Scripts"],
    featured: false,
    githubUrl: "https://github.com/brixtar/gmail-delete-extension",
    demoUrl: null,
    title: {
      es: "Gmail Clean Extension & Scripts de Mantenimiento",
      en: "Gmail Clean Extension & Maintenance Automation"
    },
    shortDesc: {
      es: "Extensión para navegador y scripts de automatización para depuración y limpieza masiva de bandejas de entrada.",
      en: "Browser extension and automation scripts for high-volume inbox cleanup, filtering, and storage recovery."
    },
    whatsappMsg: {
      es: "Hola Leonardo, quisiera consultarte sobre las herramientas de automatización y scripts para Gmail.",
      en: "Hi Leonardo, I'd like to ask you about your browser automation tools and maintenance scripts."
    },
    fullDesc: {
      es: `
        <p>Herramienta diseñada para resolver la fricción del desborde de almacenamiento en cuentas de correo electrónico, automatizando la selección, filtrado por antigüedad/peso y eliminación por lotes seguros.</p>
        
        <h4>⚡ Beneficios</h4>
        <ul>
          <li>Reducción del tiempo de mantenimiento manual de horas a minutos.</li>
          <li>Ejecución segura respetando límites de peticiones del proveedor.</li>
        </ul>
      `,
      en: `
        <p>Browser utility developed to eliminate email storage quota bottlenecks by automating multi-criteria search, age/size filtering, and rate-safe batch cleanups.</p>
        
        <h4>⚡ Core Benefits</h4>
        <ul>
          <li>Reduces manual mailbox maintenance from hours of repetitive clicking to minutes.</li>
          <li>Throttled batch processing respecting Google Workspace API and DOM limits safely.</li>
        </ul>
      `
    }
  }
];

// ============================================================================
// DICCIONARIO BILINGÜE COMPLETO (100% DE LA WEB)
// ============================================================================
const I18N = {
  es: {
    // Barra de navegación
    navHome: "Inicio",
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navServices: "Servicios",
    navSkills: "Habilidades",
    navExperience: "Trayectoria",
    navContact: "Contacto",
    btnWhatsappNav: "WhatsApp",

    // Hero Section
    statusAvailable: "Disponible para proyectos & roles técnicos",
    heroGreeting: "Hola, soy",
    heroRole: "Analista Universitario de Sistemas | Software & Soluciones Integrales",
    heroTagline: "Conecto necesidades reales con soluciones tecnológicas concretas: desarrollo de software robusto, transmisión deportiva en vivo, peritaje informático y soporte técnico de campo.",
    btnProjects: "Explorar Proyectos",
    btnCv: "📄 Descargar CV",
    btnWhatsappHero: "💬 Hablar por WhatsApp",
    statYears: "Años en IT y Soporte",
    statProjects: "Proyectos y Sistemas",
    statHardware: "Computadoras y Equipos Mantenidos",
    statReliability: "Compromiso Técnico",
    metaRole: "Analista de Sistemas | UNLaR",
    tagForensic: "Forense",
    tagRealtime: "Tiempo Real",

    // Sobre Mí (4 Pilares)
    aboutTag: "FILOSOFÍA & CAPACIDADES",
    aboutTitle: "Más que código: Criterio, Hardware y Personas",
    aboutSubtitle: "Un sistema informático no vive en el vacío: requiere entender al usuario, cuidar la integridad de los datos, afinar el hardware y asegurar que no falle en momentos críticos.",
    pillar1Title: "Desarrollo de Software",
    pillar1Desc: "Sólida base en Java, Spring Boot, bases de datos SQL (MySQL, PostgreSQL) y aplicaciones web con React. Arquitecturas limpias y persistencia confiable.",
    pillar2Title: "Streaming & Multimedia",
    pillar2Desc: "Configuración avanzada de OBS Studio, microservicios en tiempo real con WebSockets para marcadores deportivos, balance de audio y diseño vectorial con Inkscape.",
    pillar3Title: "Seguridad & Peritaje Forense",
    pillar3Desc: "Titulado como Perito Informático Forense (CPCIR). Preservación de evidencia digital, cadena de custodia, verificación de hashes criptográficos (SHA-256) y certificación ESET.",
    pillar3Tag1: "Peritaje Judicial",
    pillar3Tag2: "Cadena Custodia",
    pillar3Tag3: "Auditoría",
    pillar4Title: "Soporte & Trato Humano",
    pillar4Desc: "Mantenimiento de computadoras, redes LAN, reparación de celulares y coordinación docente en PAMI. Empatía, paciencia y capacidad de traducir la tecnología a lenguaje humano.",
    pillar4Tag1: "Reparación Celulares",
    pillar4Tag2: "Redes LAN",
    pillar4Tag3: "Docencia PAMI",
    pillar4Tag4: "Help Desk",

    // Proyectos
    projectsTag: "PORTFOLIO TÉCNICO",
    projectsTitle: "Soluciones Reales Construidas",
    projectsSubtitle: "Proyectos aplicados con foco en resolver problemas de negocio, eventos deportivos en directo y auditoría de datos.",
    filterAll: "Todos",
    filterSoftware: "Software & Sistemas",
    filterStreaming: "Streaming & OBS",
    filterForensic: "Seguridad & Forense",
    filterAutomation: "Automatizaciones",
    btnViewDetails: "Ver Detalles & Arquitectura",
    btnGithubRepo: "Ver Código en GitHub",
    btnLiveDemo: "Ver Demo en Vivo",
    btnConsultWa: "Consultar por este proyecto",

    // Servicios
    servicesTag: "SERVICIOS & VALOR AGREGADO",
    servicesTitle: "¿Cómo puedo sumar a tu equipo o proyecto?",
    servicesSubtitle: "Un abanico de servicios técnicos con rigor analítico, criterio práctico y compromiso de entrega.",
    serv1Title: "Desarrollo de Software y Sistemas de Gestión",
    serv1Desc: "Diseño y construcción de software a medida para comercios, clínicas e instituciones. Lógica robusta en Java, bases de datos normalizadas y paneles web intuitivos.",
    serv1Feat1: "Sistemas ERP, control de inventario y punto de venta (POS)",
    serv1Feat2: "Historias clínicas, turneros y trazabilidad de pacientes",
    serv1Feat3: "Desarrollo de APIs REST seguras e integración de bases de datos",
    serv2Title: "Producción Técnica de Streaming & Broadcast Deportivo",
    serv2Desc: "Puesta a punto completa para transmisiones de partidos de fútbol, básquetbol y eventos institucionales con calidad televisiva.",
    serv2Feat1: "Overlays interactivos con marcadores en tiempo real (reloj y shot clock)",
    serv2Feat2: "Diseño gráfico vectorial de escudos y gráficos con Inkscape",
    serv2Feat3: "Configuración y mezcla de audio multicanal sin retardos ni acoples",
    serv3Title: "Soporte Técnico Especializado, Hardware y Redes",
    serv3Desc: "Mantenimiento preventivo y correctivo para mantener la infraestructura tecnológica operativa al 100%.",
    serv3Feat1: "Reparación de computadoras de escritorio, notebooks y redes LAN",
    serv3Feat2: "Diagnóstico y reparación de teléfonos celulares y dispositivos móviles",
    serv3Feat3: "Instalación de sistemas operativos, copias de seguridad y securización",
    serv4Title: "Peritaje Informático Forense & Auditoría",
    serv4Desc: "Asesoramiento técnico legal y pericial para la preservación y análisis de evidencia digital con rigor judicial.",
    serv4Feat1: "Adquisición forense con bloqueadores de escritura y verificación SHA-256",
    serv4Feat2: "Protocolos estrictos de cadena de custodia para tribunales",
    serv4Feat3: "Auditoría de integridad de bases de datos y registros de actividad",

    // Habilidades / Arsenal Técnico
    skillsTag: "ARSENAL TÉCNICO",
    skillsTitle: "Tecnologías, Herramientas & Habilidades",
    skillsSubtitle: "Herramientas que manejo con criterio técnico para transformar ideas en sistemas funcionales.",
    cat1Title: "Lenguajes de Programación",
    skillJavaSpecialty: "Java (Especialidad)",
    cat2Title: "Frameworks & Datos",
    cat3Title: "Streaming & Multimedia",
    skillVectorial: "Inkscape (Vectorial)",
    skillAudioMixer: "Audio Mixer & EQ",
    skillRealtime: "WebSockets Tiempo Real",
    skillOverlays: "Overlays Deportivos",
    skillStreamingPlatform: "Transmisión YouTube/FB",
    cat4Title: "Hardware, Soporte & Redes",
    skillMobileRepair: "Reparación Celulares (Cenedi)",
    skillPcMaintenance: "Mantenimiento de PC",
    skillHelpDesk: "Help Desk & Tickets",
    skillElecDiag: "Diagnóstico Electrónico",
    skillBackups: "Backups & Clonado",
    cat5Title: "Seguridad & Peritaje",
    skillForensicOfficial: "Perito Forense (CPCIR)",
    skillChainCustody: "Cadena de Custodia",
    skillCrypto: "Criptografía SHA-256",
    skillMobileSec: "Seguridad Móvil (ESET)",
    skillSafeBrowsing: "Navegación Segura",
    skillLogAudit: "Auditoría de Logs",
    cat6Title: "Gestión & Comunicación",
    skillTeachingPami: "Docencia & PAMI",
    skillAgileScrum: "Scrum / Metodologías Ágiles",
    skillOfficeAdv: "Excel & Word Avanzado (INAP)",
    skillCustCare: "Atención al Cliente",
    skillInventory: "Control de Inventario",

    // Trayectoria & Educación
    expTag: "TRAYECTORIA & ESTUDIOS",
    expTitle: "Experiencia y Educación Formal",
    expSubtitle: "Una trayectoria forjada con estudio universitario, certificaciones oficiales y experiencia en el campo real.",
    role1: "Coordinador del Programa de Alfabetización Digital",
    period1: "Dic 2025 — Presente",
    org1: "PAMI (Instituto Nacional de Servicios Sociales para Jubilados y Pensionados)",
    desc1: "Diseño e impartición de talleres prácticos para personas mayores, facilitando la inclusión digital, el uso seguro de aplicaciones móviles, trámites online y protección contra fraudes informáticos.",
    role2: "Operador de Depósito, Stock & Caja",
    period2: "Feb 2024 — Presente",
    org2: "Minimarket Chamical",
    desc2: "Gestión de inventarios con más de 200 referencias diarias, reduciendo discrepancias en un 40%. Arqueos de caja diarios con 100% de precisión y atención directa al cliente.",
    role3: "Analista Universitario en Sistemas de Información",
    period3: "Titulado — Septiembre 2024",
    org3: "Universidad Nacional de La Rioja (UNLaR) — Sede Chamical",
    desc3: "Formación integral en modelado de datos relacionales, arquitectura de software, algoritmos avanzados, programación orientada a objetos (Java) y análisis de requerimientos organizacionales. (Licenciatura en curso).",
    role4: "Perito Informático Forense Oficial",
    period4: "Certificación Oficial — 2023",
    org4: "Consejo Profesional de Ciencias Informáticas de La Rioja (CPCIR)",
    desc4: "Habilitación profesional para la investigación forense digital, análisis de dispositivos de almacenamiento, recolección de indicios informáticos y emisión de informes periciales válidos ante la justicia.",
    role5: "Prensa, Difusión y Soporte Técnico Informático",
    period5: "Marzo 2020 — Marzo 2023",
    org5: "Concejo Deliberante de Chamical",
    desc5: "Mantenimiento preventivo y correctivo de más de 20 computadoras e impresoras (reduciendo tiempos de inactividad en un 80%), soporte a usuarios de distintas áreas legislativas y gestión de comunicación digital institucional.",
    role6: "Operador Técnico Sistema SINALIC & Tránsito",
    period6: "Diciembre 2019 — Marzo 2020",
    org6: "Municipalidad de Chamical",
    desc6: "Procesamiento de licencias de conducir con 99% de precisión bajo el Sistema Nacional de Licencias de Conducir (SINALIC), aplicando protocolos de confidencialidad y resguardo de datos ciudadanos.",

    // Contacto
    contactTag: "CONECTEMOS",
    contactTitle: "Hablemos de tu Proyecto o Vacante",
    contactSubtitle: "Estoy disponible para contrataciones remotas, proyectos de software a medida, transmisiones en vivo y consultoría técnica.",
    contactChannelsTitle: "Canales de Comunicación Directa",
    contactChannelsSubtitle: "Respondé en cuestión de minutos. Si necesitas una consulta técnica o coordinar una entrevista, no dudes en escribirme.",
    channelWaLabel: "WhatsApp Directo",
    btnWaWrite: "Escribir",
    channelEmailLabel: "Correo Electrónico",
    btnCopy: "Copiar",
    channelLinkedinLabel: "LinkedIn Profesional",
    btnLinkedin: "Ver Perfil",
    channelGithubLabel: "GitHub Oficial",
    btnGithub: "Ver Repos",
    channelLocationLabel: "Ubicación & Modalidad",
    channelLocationVal: "Chamical, La Rioja, Argentina (Remoto)",
    channelLocationBadge: "100% ONLINE",
    btnDownloadCvFull: "📄 Descargar CV Completo en PDF",
    formTitle: "Enviame un mensaje directo",
    formNameLabel: "Tu Nombre o Empresa",
    formNamePlaceholder: "Ej: Roberto Gómez / Empresa X",
    formEmailLabel: "Tu Correo Electrónico",
    formEmailPlaceholder: "nombre@correo.com",
    formMsgLabel: "Mensaje o Detalle del Proyecto",
    formMsgPlaceholder: "Contame qué necesitas o la propuesta que tienes...",
    formBtnSubmit: "🚀 Enviar Mensaje",

    // Footer
    footerCopy: "© 2026 Leonardo Miguel Brizuela. Analista de Sistemas & Solucionador Tecnológico."
  },

  en: {
    // Navigation bar
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navServices: "Services",
    navSkills: "Skills",
    navExperience: "Experience",
    navContact: "Contact",
    btnWhatsappNav: "WhatsApp",

    // Hero Section
    statusAvailable: "Available for projects & technical roles",
    heroGreeting: "Hi, I'm",
    heroRole: "Systems Analyst | Software & Comprehensive Tech Solutions",
    heroTagline: "Connecting real-world requirements with solid technical solutions: robust software development, live sports broadcasting, digital forensics, and hands-on IT support.",
    btnProjects: "Explore Projects",
    btnCv: "📄 Download Resume",
    btnWhatsappHero: "💬 Chat on WhatsApp",
    statYears: "Years in IT & Support",
    statProjects: "Projects & Systems",
    statHardware: "Computers & Systems Serviced",
    statReliability: "Technical Commitment",
    metaRole: "Systems Analyst | UNLaR",
    tagForensic: "Forensics",
    tagRealtime: "Real-Time",

    // About Me (4 Pillars)
    aboutTag: "PHILOSOPHY & CAPABILITIES",
    aboutTitle: "More Than Code: Judgement, Hardware & People",
    aboutSubtitle: "A technology system does not live in a vacuum: it requires understanding the user, protecting data integrity, fine-tuning hardware, and ensuring mission-critical reliability.",
    pillar1Title: "Software Development",
    pillar1Desc: "Solid foundation in Java, Spring Boot, SQL databases (MySQL, PostgreSQL), and modern web applications with React. Clean layered architecture and dependable persistence.",
    pillar2Title: "Streaming & Multimedia",
    pillar2Desc: "Advanced OBS Studio production, real-time microservices with WebSockets for sports scoreboards, calibrated audio engineering, and vector design with Inkscape.",
    pillar3Title: "Security & Digital Forensics",
    pillar3Desc: "Certified Digital Forensic Analyst (CPCIR). Digital evidence preservation, strict chain of custody, cryptographic hash verification (SHA-256), and ESET cybersecurity certification.",
    pillar3Tag1: "Court Forensics",
    pillar3Tag2: "Chain of Custody",
    pillar3Tag3: "Auditing",
    pillar4Title: "IT Support & Human Touch",
    pillar4Desc: "Computer maintenance, LAN networks, smartphone repairs, and digital teaching coordination at PAMI. Empathy, patience, and the ability to explain tech in clear human terms.",
    pillar4Tag1: "Phone Repair",
    pillar4Tag2: "LAN Networks",
    pillar4Tag3: "PAMI Teaching",
    pillar4Tag4: "Help Desk",

    // Projects
    projectsTag: "TECHNICAL PORTFOLIO",
    projectsTitle: "Real-World Built Solutions",
    projectsSubtitle: "Applied software and engineering projects built to solve business challenges, live sporting events, and data integrity audits.",
    filterAll: "All",
    filterSoftware: "Software & Systems",
    filterStreaming: "Streaming & OBS",
    filterForensic: "Security & Forensics",
    filterAutomation: "Automations",
    btnViewDetails: "View Details & Architecture",
    btnGithubRepo: "View Code on GitHub",
    btnLiveDemo: "Live Demo",
    btnConsultWa: "Inquire via WhatsApp",

    // Services
    servicesTag: "SERVICES & ADDED VALUE",
    servicesTitle: "How Can I Add Value to Your Team or Project?",
    servicesSubtitle: "A diverse spectrum of technical services delivered with analytical rigor, practical judgement, and commitment to delivery.",
    serv1Title: "Software Development & Management Systems",
    serv1Desc: "Custom software design and construction for businesses, veterinary clinics, and public bodies. Robust Java logic, normalized databases, and intuitive dashboards.",
    serv1Feat1: "ERP systems, barcode inventory management, and Point of Sale (POS)",
    serv1Feat2: "Electronic medical records, appointments, and patient traceability",
    serv1Feat3: "Secure RESTful API development and multi-engine database integration",
    serv2Title: "Technical Streaming Production & Sports Broadcast",
    serv2Desc: "Full turn-key technical setup for live football, basketball, and institutional streaming with national network television aesthetic standards.",
    serv2Feat1: "Interactive real-time scoreboard overlays (match clock and 24s/14s shot clock)",
    serv2Feat2: "Scalable vector graphics, team badges, and TV banners crafted in Inkscape",
    serv2Feat3: "Multichannel audio routing, noise suppression, and zero-latency mix balance",
    serv3Title: "Specialized IT Field Support, Hardware & Networking",
    serv3Desc: "Preventive and corrective technical maintenance ensuring your infrastructure operates at 100% capacity.",
    serv3Feat1: "Desktop PC, laptop, and structured LAN/WLAN troubleshooting and repair",
    serv3Feat2: "Smartphone and mobile hardware diagnosis, display, and motherboard service",
    serv3Feat3: "Operating system deployment, automated backups, and system hardening",
    serv4Title: "Digital Forensic Analysis & Security Auditing",
    serv4Desc: "Legal-technical advisory and digital evidence triage conducted with judicial court admissibility standards.",
    serv4Feat1: "Bit-stream forensic disk acquisition with write-blockers and SHA-256 hashes",
    serv4Feat2: "Strict court-admissible chain of custody protocols and formal reporting",
    serv4Feat3: "Database integrity auditing, unauthorized access inspection, and log forensics",

    // Skills
    skillsTag: "TECHNICAL ARSENAL",
    skillsTitle: "Technologies, Tools & Core Skills",
    skillsSubtitle: "Battle-tested tools and frameworks I apply with engineering judgement to transform requirements into working systems.",
    cat1Title: "Programming Languages",
    skillJavaSpecialty: "Java (Core Specialty)",
    cat2Title: "Frameworks & Databases",
    cat3Title: "Streaming & Multimedia",
    skillVectorial: "Inkscape (Vector Design)",
    skillAudioMixer: "Audio Mixer & Multi-EQ",
    skillRealtime: "WebSockets Real-Time",
    skillOverlays: "Sports Overlays",
    skillStreamingPlatform: "YouTube / FB Streaming",
    cat4Title: "Hardware, Support & Networks",
    skillMobileRepair: "Smartphone Repair (Cenedi)",
    skillPcMaintenance: "PC Maintenance & Repair",
    skillHelpDesk: "Help Desk & Ticketing",
    skillElecDiag: "Electronic Diagnostics",
    skillBackups: "Backups & Disk Cloning",
    cat5Title: "Security & Forensics",
    skillForensicOfficial: "Digital Forensic Expert (CPCIR)",
    skillChainCustody: "Chain of Custody",
    skillCrypto: "SHA-256 Cryptography",
    skillMobileSec: "Mobile Security (ESET)",
    skillSafeBrowsing: "Safe Web Browsing",
    skillLogAudit: "Log Auditing & Triage",
    cat6Title: "Management & Communication",
    skillTeachingPami: "Teaching & PAMI Literacy",
    skillAgileScrum: "Scrum / Agile Methodologies",
    skillOfficeAdv: "Advanced Excel & Word (INAP)",
    skillCustCare: "Client Care & Communication",
    skillInventory: "Inventory & Warehouse Control",

    // Experience
    expTag: "CAREER & EDUCATION",
    expTitle: "Professional Experience & Formal Education",
    expSubtitle: "A career forged through formal university study, official certifications, and extensive hands-on field experience.",
    role1: "Digital Literacy Program Coordinator",
    period1: "Dec 2025 — Present",
    org1: "PAMI (National Social Services Institute for Retirees and Pensioners)",
    desc1: "Designing and leading practical digital inclusion workshops for senior citizens: safe mobile device operation, online administrative procedures, and cyber fraud prevention.",
    role2: "Warehouse, Inventory & POS Cashier Operator",
    period2: "Feb 2024 — Present",
    org2: "Minimarket Chamical",
    desc2: "Inventory management across 200+ daily product lines, reducing discrepancies by 40%. Daily cash balance closings with 100% precision and direct customer service.",
    role3: "University Systems Analyst Degree",
    period3: "Graduated — September 2024",
    org3: "National University of La Rioja (UNLaR) — Chamical Campus",
    desc3: "Comprehensive academic training in relational data modeling, software engineering architecture, advanced algorithms, object-oriented programming (Java), and business requirements analysis. (Licenciatura degree in progress).",
    role4: "Official Judicial Digital Forensic Expert",
    period4: "Official Certification — 2023",
    org4: "Professional Council of Computer Sciences of La Rioja (CPCIR)",
    desc4: "Legally sanctioned professional license for digital investigation, electronic media acquisition, chain of custody verification, and formal court expert testimony.",
    role5: "Press, Public Relations & Technical IT Support",
    period5: "March 2020 — March 2023",
    org5: "City Council of Chamical",
    desc5: "Preventive and corrective maintenance for 20+ desktop computers and network printers (slashing system downtime by 80%), user helpdesk support across legislative offices, and institutional digital communication.",
    role6: "Technical Operator — SINALIC National Driving License System",
    period6: "December 2019 — March 2020",
    org6: "Municipality of Chamical",
    desc6: "Issuance and verification of official driver's licenses with 99% accuracy under the SINALIC national framework, enforcing data protection and civic privacy protocols.",

    // Contact
    contactTag: "LET'S CONNECT",
    contactTitle: "Let's Discuss Your Project or Opportunity",
    contactSubtitle: "Available for remote software roles, bespoke systems development, live sports streaming production, and technical consulting.",
    contactChannelsTitle: "Direct Communication Channels",
    contactChannelsSubtitle: "I typically reply within minutes. Feel free to message me for a technical consultation or an interview.",
    channelWaLabel: "Direct WhatsApp",
    btnWaWrite: "Chat",
    channelEmailLabel: "Email Address",
    btnCopy: "Copy",
    channelLinkedinLabel: "Professional LinkedIn",
    btnLinkedin: "View Profile",
    channelGithubLabel: "Official GitHub",
    btnGithub: "View Repos",
    channelLocationLabel: "Location & Work Mode",
    channelLocationVal: "Chamical, La Rioja, Argentina (Remote)",
    channelLocationBadge: "100% REMOTE",
    btnDownloadCvFull: "📄 Download Full Resume (PDF)",
    formTitle: "Send Me a Direct Message",
    formNameLabel: "Your Name or Company",
    formNamePlaceholder: "E.g., John Doe / Acme Inc.",
    formEmailLabel: "Your Email Address",
    formEmailPlaceholder: "name@company.com",
    formMsgLabel: "Message or Project Description",
    formMsgPlaceholder: "Tell me about your requirements or what you'd like to collaborate on...",
    formBtnSubmit: "🚀 Send Message",

    // Footer
    footerCopy: "© 2026 Leonardo Miguel Brizuela. Systems Analyst & Technology Problem Solver."
  }
};
