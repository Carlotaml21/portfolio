// =============================================================
//  BILINGUAL CONTENT  (ES / EN)
// =============================================================
// All portfolio copy lives here. To edit a sentence, find its key
// and update it in both languages.

export const content = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Skills",
      education: "Formación",
      contact: "Contacto",
    },

    hero: {
      greeting: "Hola, soy",
      role: "SAP Integration Consultant",
      tagline:
        "De las aulas a la integración SAP. Consultora junior especializada en SAP BTP Integration Suite, construyendo iFlows robustos entre S/4HANA y sistemas externos.",
      ctaContact: "Contacto",
      ctaCv: "Descargar CV",
    },

    about: {
      title: "Sobre mí",
      lead: "Consultora SAP Integration Junior con experiencia real en SAP BTP Integration Suite.",
      paragraphs: [
        "Mi camino no es el habitual, y eso es justo lo que aporto. Empecé como maestra de Educación Infantil, donde aprendí a explicar lo complejo de forma sencilla, a organizarme bajo presión y a no rendirme hasta que algo funciona. Después di el salto al desarrollo full stack y, de ahí, al mundo SAP.",
        "Hoy trabajo en Capgemini como consultora SAP, diseñando y manteniendo iFlows en Integration Suite: integraciones de S/4HANA con sistemas externos vía REST, SOAP/XML e IDoc, con transformaciones en Groovy, XSLT y message mappings.",
        "Mi base de desarrollo (React, Java, SQL) me da una ventaja a la hora de entender APIs, depurar payloads y resolver incidencias. Soy autodidacta, meticulosa y me motiva aprender cada día algo nuevo de la plataforma.",
      ],
      facts: [
        { value: "2", label: "proyectos cliente (Consum, Leprino)" },
        { value: "3", label: "landscapes (Dev/QA/Prod)" },
        { value: "2024", label: "salto al mundo tech" },
        { value: "B2", label: "inglés (Cambridge FCE)" },
      ],
    },

    experience: {
      title: "Experiencia",
      items: [
        {
          role: "SAP Consultant",
          company: "Capgemini",
          period: "2025 – Actualidad",
          place: "Langreo, Asturias",
          bullets: [
            "Diseño y desarrollo de iFlows en SAP BTP Integration Suite, cubriendo escenarios S/4HANA ↔ sistemas externos con adaptadores REST (JSON), SOAP/XML e IDoc.",
            "Transformaciones de datos con Groovy, XSLT, message mappings y value mappings según los requisitos de cada cliente.",
            "Monitorización de flujos en Integration Suite Operations, resolución de incidencias y análisis de causa raíz de mensajes fallidos.",
            "Ciclos de pruebas de API con Postman: validación de endpoints REST y verificación de payloads antes del despliegue a producción.",
            "Soporte al transporte y ciclo de vida de iFlows entre los entornos Dev / QA / Producción.",
          ],
          projects: [
            {
              name: "Consum",
              stack: "SAP BTP Integration Suite",
              desc: "Mantenimiento y soporte de iFlows existentes, resolución de incidencias y ajustes de mappings en producción.",
            },
            {
              name: "Leprino Foods",
              stack: "SAP PI/PO",
              desc: "Monitorización del procesamiento de mensajes y seguimiento de errores en el Integration Engine; experiencia directa con la arquitectura PI/PO junto a BTP.",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "Tecnologías con las que trabajo a diario y herramientas de apoyo.",
      groups: [
        {
          name: "SAP & Integración",
          items: [
            "SAP BTP",
            "Integration Suite (Cloud Integration)",
            "iFlows",
            "Adaptador REST",
            "Adaptador SOAP",
            "Adaptador IDoc",
            "Groovy",
            "XSLT",
            "Message Mapping",
            "Value Mapping",
            "OData",
            "SAP PI/PO",
            "Postman",
          ],
        },
        {
          name: "Desarrollo",
          items: ["JavaScript", "React", "Java", "Spring Boot", "Node.js", "SQL"],
        },
        {
          name: "Herramientas & Otros",
          items: ["Git", "Figma", "UI/UX", "Herramientas de IA"],
        },
      ],
      certsTitle: "Certificaciones",
      certs: ["SAP BTP Administrator"],
      langsTitle: "Idiomas",
      langs: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Cambridge FCE (B2)" },
      ],
    },

    education: {
      title: "Formación",
      items: [
        {
          title: "SAP Training Program (120h)",
          place: "Capgemini",
          year: "2025",
          tags: ["ABAP", "BTP", "UI5", "OData", "Integration Suite"],
        },
        {
          title: "Programación de Aplicaciones Web y Bases de Datos",
          place: "Universidad de Oviedo",
          year: "2025",
          tags: ["Node.js", "SQL", "React", "JWT"],
        },
        {
          title: "Desarrollo Web Full Stack",
          place: "Factoría F5",
          year: "2024 – 2025",
          tags: ["JavaScript", "React", "Java", "SQL", "Git", "Spring Boot", "Figma"],
        },
        {
          title: "Desarrollo Web Full Stack (150h)",
          place: "Udemy",
          year: "2024",
          tags: [],
        },
        {
          title: "Grado en Maestra de Educación Infantil",
          place: "Universidad de Oviedo",
          year: "2018 – 2022",
          tags: [],
        },
      ],
    },

    contact: {
      title: "¿Hablamos?",
      lead: "Estoy abierta a oportunidades como consultora SAP Integration. Escríbeme y te respondo encantada.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Ubicación",
      ctaCv: "Descargar CV (PDF)",
    },

    footer: {
      built: "Hecho con React + Vite",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },

    hero: {
      greeting: "Hi, I'm Carlota",
      role: "SAP Integration Consultant",
      tagline:
        "From the classroom to SAP integration. Junior consultant specialized in SAP BTP Integration Suite, building robust iFlows between S/4HANA and external systems.",
      ctaContact: "Contact",
      ctaCv: "Download CV",
    },

    about: {
      title: "About me",
      lead: "Junior SAP Integration Consultant with hands-on experience in SAP BTP Integration Suite.",
      paragraphs: [
        "My path isn't the usual one — and that's exactly what I bring. I started as an Early Childhood teacher, where I learned to explain complex things simply, to stay organized under pressure, and to keep going until something works. Then I moved into full stack development, and from there into the SAP world.",
        "Today I work at Capgemini as an SAP consultant, designing and maintaining iFlows in Integration Suite: S/4HANA integrations with external systems via REST, SOAP/XML and IDoc, with data transformations in Groovy, XSLT and message mappings.",
        "My development background (React, Java, SQL) gives me an edge when it comes to understanding APIs, debugging payloads and resolving incidents. I'm self-taught, detail-oriented, and driven to learn something new about the platform every day.",
      ],
      facts: [
        { value: "2", label: "client projects (Consum, Leprino)" },
        { value: "3", label: "landscapes (Dev/QA/Prod)" },
        { value: "2024", label: "jump into tech" },
        { value: "B2", label: "English (Cambridge FCE)" },
      ],
    },

    experience: {
      title: "Experience",
      items: [
        {
          role: "SAP Consultant",
          company: "Capgemini",
          period: "2025 – Present",
          place: "Langreo, Asturias",
          bullets: [
            "Designed and developed iFlows in SAP BTP Integration Suite, covering S/4HANA ↔ external-system scenarios using REST (JSON), SOAP/XML and IDoc adapters.",
            "Implemented data transformations with Groovy, XSLT, message mappings and value mappings to meet client-specific requirements.",
            "Monitored flows in Integration Suite Operations, resolved incidents and performed root-cause analysis on failed message processing.",
            "Contributed to API testing cycles with Postman: validating REST endpoints and verifying payloads prior to production deployment.",
            "Supported iFlow transport and lifecycle management across Dev / QA / Production landscapes.",
          ],
          projects: [
            {
              name: "Consum",
              stack: "SAP BTP Integration Suite",
              desc: "Maintenance and support of existing iFlows, incident resolution and mapping adjustments in production.",
            },
            {
              name: "Leprino Foods",
              stack: "SAP PI/PO",
              desc: "Monitored message processing and tracked errors in the Integration Engine; gained hands-on exposure to PI/PO architecture alongside BTP.",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies I work with daily and supporting tools.",
      groups: [
        {
          name: "SAP & Integration",
          items: [
            "SAP BTP",
            "Integration Suite (Cloud Integration)",
            "iFlows",
            "REST adapter",
            "SOAP adapter",
            "IDoc adapter",
            "Groovy",
            "XSLT",
            "Message Mapping",
            "Value Mapping",
            "OData",
            "SAP PI/PO",
            "Postman",
          ],
        },
        {
          name: "Development",
          items: ["JavaScript", "React", "Java", "Spring Boot", "Node.js", "SQL"],
        },
        {
          name: "Tools & Other",
          items: ["Git", "Figma", "UI/UX", "AI Tools"],
        },
      ],
      certsTitle: "Certifications",
      certs: ["SAP BTP Administrator"],
      langsTitle: "Languages",
      langs: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Cambridge FCE (B2)" },
      ],
    },

    education: {
      title: "Education",
      items: [
        {
          title: "SAP Training Program (120h)",
          place: "Capgemini",
          year: "2025",
          tags: ["ABAP", "BTP", "UI5", "OData", "Integration Suite"],
        },
        {
          title: "Web Application and Database Programming",
          place: "University of Oviedo",
          year: "2025",
          tags: ["Node.js", "SQL", "React", "JWT"],
        },
        {
          title: "Full Stack Web Development",
          place: "Factoría F5",
          year: "2024 – 2025",
          tags: ["JavaScript", "React", "Java", "SQL", "Git", "Spring Boot", "Figma"],
        },
        {
          title: "Full Stack Web Development (150h)",
          place: "Udemy",
          year: "2024",
          tags: [],
        },
        {
          title: "Bachelor's Degree in Early Childhood Education",
          place: "University of Oviedo",
          year: "2018 – 2022",
          tags: [],
        },
      ],
    },

    contact: {
      title: "Let's talk",
      lead: "I'm open to opportunities as an SAP Integration consultant. Drop me a line — I'll be happy to reply.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      ctaCv: "Download CV (PDF)",
    },

    footer: {
      built: "Built with React + Vite",
      rights: "All rights reserved.",
    },
  },
};
