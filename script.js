const iaList = [
  {
    nombre: "Photomath",
    url: "https://photomath.com",
    categorias: ["Matemáticas", "Educación", "Secundaria"],
    descripcion: "Escanea ecuaciones matemáticas con la cámara del celular y resuelve paso a paso. Ideal para estudiantes de secundaria."
  },
  {
    nombre: "MathGPT",
    url: "https://www.mathful.com",
    categorias: ["Matemáticas", "Cálculo", "Álgebra", "Educación"],
    descripcion: "Resuelve problemas matemáticos en texto o imagen, incluyendo álgebra, geometría, cálculo y más. Ofrece explicaciones detalladas."
  },
  {
    nombre: "Symbolab",
    url: "https://www.symbolab.com",
    categorias: ["Matemáticas", "Educación", "Paso a paso"],
    descripcion: "Motor matemático online que resuelve ecuaciones paso a paso, desde aritmética hasta cálculo avanzado."
  },
  {
    nombre: "QANDA",
    url: "https://www.qanda.ai",
    categorias: ["Matemáticas", "Educación", "Tutoría IA"],
    descripcion: "App que resuelve problemas escaneados y ofrece tutoría IA. Usa modelos entrenados para dar soluciones explicadas al instante."
  },
  {
    nombre: "Wolfram|Alpha",
    url: "https://www.wolframalpha.com",
    categorias: ["Matemáticas", "Ciencia", "Datos", "Educación avanzada"],
    descripcion: "Motor de conocimiento computacional. Resuelve desde ecuaciones hasta comparaciones de datos y ciencia aplicada."
  },
  {
    nombre: "SageMath",
    url: "https://www.sagemath.org",
    categorias: ["Matemáticas", "Universitario", "Código abierto"],
    descripcion: "Sistema matemático de código abierto para álgebra, cálculo simbólico, gráficos, matrices y más."
  },
  {
    nombre: "Desmos",
    url: "https://www.desmos.com",
    categorias: ["Matemáticas", "Gráficos", "Visualización"],
    descripcion: "Calculadora gráfica interactiva para trazar funciones matemáticas. Muy útil para visualizar conceptos."
  },
  {
    nombre: "ChatGPT",
    url: "https://chat.openai.com",
    categorias: ["Asistente", "Redacción", "Educación", "Programación"],
    descripcion: "IA conversacional para resolver dudas, escribir textos, programar y más. Gratis con funciones avanzadas."
  },
  {
    nombre: "Perplexity AI",
    url: "https://www.perplexity.ai",
    categorias: ["Investigación", "Búsqueda", "Asistente"],
    descripcion: "Asistente conversacional con búsqueda web en tiempo real y fuentes citadas. Útil para investigación rápida y confiable."
  },
  {
    nombre: "Google Bard",
    url: "https://bard.google.com",
    categorias: ["Asistente", "Contenido", "Respuestas actualizadas"],
    descripcion: "Genera respuestas actualizadas conectadas a la web. Ideal para tareas, búsquedas y redacción básica."
  },
  {
    nombre: "Grammarly",
    url: "https://www.grammarly.com",
    categorias: ["Escritura", "Estilo", "Corrección"],
    descripcion: "Corrige ortografía, gramática y estilo en tiempo real. Perfecto para redacción profesional o académica."
  },
  {
    nombre: "DeepL Translator",
    url: "https://www.deepl.com/translator",
    categorias: ["Traducción", "Estilo", "Escritura"],
    descripcion: "Traductor avanzado que mejora la redacción y estilo. Compatible con múltiples idiomas."
  },
  {
    nombre: "Canva AI",
    url: "https://www.canva.com",
    categorias: ["Diseño", "Imágenes", "Creatividad"],
    descripcion: "Generación de imágenes, diseño de contenido y edición con IA. Incluye herramientas como Magic Resize y eliminación de fondo."
  },
  {
    nombre: "Leonardo AI",
    url: "https://www.leonardo.ai",
    categorias: ["Arte generativo", "Diseño", "Creatividad"],
    descripcion: "Plataforma para crear arte con IA. Ideal para concept art y diseño visual, con créditos diarios gratuitos."
  },
  {
    nombre: "Runway ML",
    url: "https://runwayml.com",
    categorias: ["Video", "Edición IA", "Creatividad"],
    descripcion: "Edita videos con efectos, elimina fondos y genera escenas nuevas. Muy usado en contenido visual moderno."
  },
  {
    nombre: "Pictory",
    url: "https://pictory.ai",
    categorias: ["Video", "Contenido", "Redes"],
    descripcion: "Transforma texto en videos automáticos, agrega subtítulos y resúmenes. Ideal para marketing de contenidos."
  },
  {
    nombre: "MyLens AI",
    url: "https://mylens.ai/ai-timeline",
    categorias: ["Líneas del tiempo", "Estudio", "Historia", "Documentos"],
    descripcion: "Extrae automáticamente eventos importantes de PDFs, textos o videos. Genera líneas del tiempo en español. Ideal para estudiantes e investigadores."
  },
  {
    nombre: "Venngage Timeline Generator",
    url: "https://venngage.com/features/timeline-maker",
    categorias: ["Presentaciones", "Líneas del tiempo", "Visual"],
    descripcion: "Permite crear líneas del tiempo atractivas visualmente con plantillas. Aunque su interfaz está en inglés, admite contenido en español sin problemas."
  },
  {
    nombre: "EdrawMax AI Timeline",
    url: "https://www.edrawmax.com/app/ai-timeline/",
    categorias: ["Líneas del tiempo", "Organización", "Educación"],
    descripcion: "Crea diagramas y cronologías interactivas con IA. Soporta idioma español. Bueno para presentaciones escolares o laborales."
  },
  {
    nombre: "Simplified - AI Presentation Maker",
    url: "https://simplified.com/ai-presentation-maker/timeline",
    categorias: ["Presentaciones", "Educación", "PowerPoint"],
    descripcion: "Genera presentaciones y líneas del tiempo en formato diapositiva. Soporta texto en español. Muy útil para estudiantes y docentes."
  },
  {
    nombre: "Lucidchart (Timeline Maker)",
    url: "https://lucidchart.com/pages/examples/timeline-maker",
    categorias: ["Diagramas", "Educación", "Líneas del tiempo"],
    descripcion: "Permite diseñar timelines visuales. Aunque la interfaz es en inglés, se puede usar en español. Muy útil para visualizar procesos históricos."
  },
  {
    nombre: "Timeline GPT (YesChat)",
    url: "https://yeschat.ai",
    categorias: ["Investigación", "Historia", "Cronologías"],
    descripcion: "Conversación con IA para generar líneas del tiempo detalladas. Funciona bien en español. Útil para clases de historia o presentaciones."
  },
  {
    nombre: "Tome AI",
    url: "https://tome.app/",
    categorias: ["Presentaciones", "IA creativa", "Educación"],
    descripcion: "Genera presentaciones con contenido e imágenes automáticamente. Admite idioma español. Perfecto para resúmenes de temas educativos."
  },
  {
    nombre: "SlidesAI.io",
    url: "https://slidesai.io/",
    categorias: ["Presentaciones", "PowerPoint", "Educación"],
    descripcion: "Transforma texto en diapositivas. Soporta idioma español. Ideal para crear presentaciones a partir de resúmenes o guías de estudio."
  },
  {
    nombre: "Magicslides",
    url: "https://www.magicslides.app/",
    categorias: ["Presentaciones", "Educación", "Resúmenes"],
    descripcion: "Extensión para Google Slides que crea diapositivas con IA en español. Muy buena para estudiantes que trabajan con Google Docs."
  },
  {
    nombre: "Gama IA",
    url: "https://www.gama.ai",
    categorias: ["Presentaciones", "Educación", "Negocios", "Visual"],
    descripcion: "Crea presentaciones profesionales a partir de un texto breve. Funciona muy bien en español. Ideal para estudiar, exponer o hacer presentaciones rápidas y visuales."
  }
];

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');

function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function mostrarResultados() {
  const texto = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  resultsDiv.innerHTML = '';

  const filtrados = iaList.filter((ia) => {
    const nombreMatch = ia.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(texto);
    const descripcionMatch = ia.descripcion.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(texto);
    const categoriasMatch = ia.categorias.some((categoria) => categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(texto));
    return nombreMatch || descripcionMatch || categoriasMatch;
  });

  filtrados.forEach((ia) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${ia.nombre}</h3><p>${ia.descripcion}</p>`;
    card.onclick = () => mostrarModal(ia);
    resultsDiv.appendChild(card);
  });
}

function mostrarModal(ia) {
  modalTitle.innerText = ia.nombre;
  modalDesc.innerText = ia.descripcion;
  const modalContent = document.querySelector('.modal-content');
  // Eliminar botón anterior si existe
  const oldButton = modalContent.querySelector('button:not(:first-of-type)');
  if (oldButton) oldButton.remove();
  // Crear nuevo botón para abrir la página de la IA
  const openButton = document.createElement('button');
  openButton.innerText = 'Abrir página de ' + ia.nombre;
  openButton.onclick = () => {
    window.open(ia.url, '_blank');
  };
  modalContent.appendChild(openButton);
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

searchInput.addEventListener('input', mostrarResultados);
window.addEventListener('load', mostrarResultados);