// traductor.js - Sistema de internacionalización mejorado

// Objeto de traducciones
const i18n = {
  en: {
    title: "X-Ray Recruiter",
    keywords: "Technologies / Keywords",
    keywordsHint: "(Press Enter or comma to add)",
    keywordsPlaceholder: "Type and press Enter or comma to add",
    tagsPlaceholder: "Technologies will appear here...",
    seniority: "Seniority (optional)",
    selectLevel: "-- Any level --",
    country: "Target country",
    anyCountry: "🌎 Any country",
    city: "City (optional)",
    allCities: "-- All cities --",
    onlyEnglish: "Only profiles with English proficiency",
    exclude: "Exclude words (e.g., Junior, Freelance)",
    excludePlaceholder: "Words to exclude (comma separated)",
    previewLabel: "Search preview:",
    previewEmpty: "Add at least one technology to start...",
    submit: "Generate search",
    history: "Search history",
    historySearchPlaceholder: "Search in history...",
    noHistory: "No saved searches",
    open: "Open",
    copy: "Copy",
    rename: "Rename",
    delete: "Delete"
  },
  es: {
    title: "X-Ray Recruiter",
    keywords: "Tecnologías / Palabras clave",
    keywordsHint: "(Presiona Enter o coma para agregar)",
    keywordsPlaceholder: "Escribe y presiona Enter o coma para agregar",
    tagsPlaceholder: "Las tecnologías aparecerán aquí...",
    seniority: "Nivel / Seniority (opcional)",
    selectLevel: "-- Cualquier nivel --",
    country: "País objetivo",
    anyCountry: "🌎 Cualquier país",
    city: "Ciudad (opcional)",
    allCities: "-- Todas las ciudades --",
    onlyEnglish: "Solo perfiles con inglés",
    exclude: "Excluir palabras (ej: Junior, Freelance)",
    excludePlaceholder: "Palabras a excluir (separadas por coma)",
    previewLabel: "Vista previa de la búsqueda:",
    previewEmpty: "Agrega al menos una tecnología para comenzar...",
    submit: "Generar búsqueda",
    history: "Historial de búsquedas",
    historySearchPlaceholder: "Buscar en historial...",
    noHistory: "No hay búsquedas guardadas",
    open: "Abrir",
    copy: "Copiar",
    rename: "Renombrar",
    delete: "Eliminar"
  },
  pt: {
    title: "X-Ray Recruiter",
    keywords: "Tecnologias / Palavras-chave",
    keywordsHint: "(Pressione Enter ou vírgula para adicionar)",
    keywordsPlaceholder: "Digite e pressione Enter ou vírgula para adicionar",
    tagsPlaceholder: "As tecnologias aparecerão aqui...",
    seniority: "Nível / Senioridade (opcional)",
    selectLevel: "-- Qualquer nível --",
    country: "País alvo",
    anyCountry: "🌎 Qualquer país",
    city: "Cidade (opcional)",
    allCities: "-- Todas as cidades --",
    onlyEnglish: "Apenas perfis com inglês",
    exclude: "Excluir palavras (ex: Júnior, Freelancer)",
    excludePlaceholder: "Palavras a excluir (separadas por vírgula)",
    previewLabel: "Visualização da busca:",
    previewEmpty: "Adicione pelo menos uma tecnologia para começar...",
    submit: "Gerar busca",
    history: "Histórico de buscas",
    historySearchPlaceholder: "Buscar no histórico...",
    noHistory: "Nenhuma busca salva",
    open: "Abrir",
    copy: "Copiar",
    rename: "Renomear",
    delete: "Excluir"
  },
  hi: {
    title: "एक्स-रे रिक्रूटर",
    keywords: "प्रौद्योगिकियाँ / कीवर्ड",
    keywordsHint: "(जोड़ने के लिए Enter या अल्पविराम दबाएं)",
    keywordsPlaceholder: "टाइप करें और जोड़ने के लिए Enter या अल्पविराम दबाएं",
    tagsPlaceholder: "प्रौद्योगिकियाँ यहाँ दिखाई देंगी...",
    seniority: "सीनियरिटी (वैकल्पिक)",
    selectLevel: "-- कोई भी स्तर --",
    country: "लक्ष्य देश",
    anyCountry: "🌎 कोई भी देश",
    city: "शहर (वैकल्पिक)",
    allCities: "-- सभी शहर --",
    onlyEnglish: "केवल अंग्रेज़ी जानने वाले प्रोफाइल्स",
    exclude: "शब्द हटाएं (जैसे जूनियर, फ्रीलांस)",
    excludePlaceholder: "हटाने के लिए शब्द (अल्पविराम से अलग)",
    previewLabel: "खोज पूर्वावलोकन:",
    previewEmpty: "शुरू करने के लिए कम से कम एक तकनीक जोड़ें...",
    submit: "खोज जनरेट करें",
    history: "खोज इतिहास",
    historySearchPlaceholder: "इतिहास में खोजें...",
    noHistory: "कोई सहेजी गई खोज नहीं",
    open: "खोलें",
    copy: "कॉपी करें",
    rename: "नाम बदलें",
    delete: "हटाएं"
  },
  uk: {
    title: "X-Ray Recruiter",
    keywords: "Технології / Ключові слова",
    keywordsHint: "(Натисніть Enter або кому, щоб додати)",
    keywordsPlaceholder: "Введіть та натисніть Enter або кому, щоб додати",
    tagsPlaceholder: "Технології з'являться тут...",
    seniority: "Рівень / Сеніоріті (необов'язково)",
    selectLevel: "-- Будь-який рівень --",
    country: "Цільова країна",
    anyCountry: "🌎 Будь-яка країна",
    city: "Місто (необов'язково)",
    allCities: "-- Усі міста --",
    onlyEnglish: "Лише профілі з англійською",
    exclude: "Виключити слова (напр: Junior, Freelance)",
    excludePlaceholder: "Слова для виключення (через кому)",
    previewLabel: "Попередній перегляд пошуку:",
    previewEmpty: "Додайте принаймні одну технологію для початку...",
    submit: "Згенерувати пошук",
    history: "Історія пошуків",
    historySearchPlaceholder: "Шукати в історії...",
    noHistory: "Немає збережених пошуків",
    open: "Відкрити",
    copy: "Копіювати",
    rename: "Перейменувати",
    delete: "Видалити"
  },
  fr: {
    title: "X-Ray Recruiter",
    keywords: "Technologies / Mots-clés",
    keywordsHint: "(Appuyez sur Entrée ou virgule pour ajouter)",
    keywordsPlaceholder: "Tapez et appuyez sur Entrée ou virgule pour ajouter",
    tagsPlaceholder: "Les technologies apparaîtront ici...",
    seniority: "Niveau / Ancienneté (optionnel)",
    selectLevel: "-- N'importe quel niveau --",
    country: "Pays cible",
    anyCountry: "🌎 N'importe quel pays",
    city: "Ville (optionnel)",
    allCities: "-- Toutes les villes --",
    onlyEnglish: "Uniquement les profils avec anglais",
    exclude: "Exclure des mots (ex: Junior, Freelance)",
    excludePlaceholder: "Mots à exclure (séparés par des virgules)",
    previewLabel: "Aperçu de la recherche:",
    previewEmpty: "Ajoutez au moins une technologie pour commencer...",
    submit: "Générer la recherche",
    history: "Historique des recherches",
    historySearchPlaceholder: "Rechercher dans l'historique...",
    noHistory: "Aucune recherche enregistrée",
    open: "Ouvrir",
    copy: "Copier",
    rename: "Renommer",
    delete: "Supprimer"
  },
  de: {
    title: "X-Ray Recruiter",
    keywords: "Technologien / Schlüsselwörter",
    keywordsHint: "(Enter oder Komma drücken zum Hinzufügen)",
    keywordsPlaceholder: "Tippen und Enter oder Komma drücken zum Hinzufügen",
    tagsPlaceholder: "Technologien werden hier erscheinen...",
    seniority: "Stufe / Seniorität (optional)",
    selectLevel: "-- Beliebige Stufe --",
    country: "Zielland",
    anyCountry: "🌎 Beliebiges Land",
    city: "Stadt (optional)",
    allCities: "-- Alle Städte --",
    onlyEnglish: "Nur Profile mit Englisch",
    exclude: "Wörter ausschließen (z.B. Junior, Freelance)",
    excludePlaceholder: "Auszuschließende Wörter (durch Komma getrennt)",
    previewLabel: "Suchvorschau:",
    previewEmpty: "Fügen Sie mindestens eine Technologie hinzu...",
    submit: "Suche generieren",
    history: "Suchverlauf",
    historySearchPlaceholder: "Im Verlauf suchen...",
    noHistory: "Keine gespeicherten Suchen",
    open: "Öffnen",
    copy: "Kopieren",
    rename: "Umbenennen",
    delete: "Löschen"
  }
};

// Idiomas disponibles con banderas
const locales = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' }
];

// Función para buscar índice por código
function indexOfCode(code) {
  return locales.findIndex(l => l.code === code);
}

// Detectar idioma del navegador
function detectBrowserLanguage() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  const primary = nav.toLowerCase().split('-')[0];
  const languageMap = {
    'en': 'en', 'es': 'es', 'pt': 'pt', 'fr': 'fr',
    'de': 'de', 'hi': 'hi', 'uk': 'uk', 'ua': 'uk', 'ukr': 'uk'
  };
  return languageMap[primary] || 'en';
}

// --- CORRECCIÓN CRÍTICA ---
// Determinamos el índice ANTES de que cargue el DOM.
// Esto lee tu localStorage inmediatamente cuando el script se ejecuta.
const savedLocale = localStorage.getItem('localeCode');
let initialIndex = 0;

if (savedLocale) {
  const foundIndex = indexOfCode(savedLocale);
  if (foundIndex !== -1) {
    initialIndex = foundIndex;
  }
} else {
  // Si no hay nada guardado, usamos el del navegador
  const detected = detectBrowserLanguage();
  const detectedIndex = indexOfCode(detected);
  if (detectedIndex !== -1) {
    initialIndex = detectedIndex;
  }
}

// Asignamos el índice inicial correcto desde el principio
let currentLocaleIndex = initialIndex;

// Exponer idioma actual para el tutorial (getter dinámico)
Object.defineProperty(window, 'currentLanguage', {
  get: function() {
    return locales[currentLocaleIndex].code;
  }
});

// Aplicar traducciones al DOM
function applyTranslations() {
  const lang = locales[currentLocaleIndex].code;
  
  // Guardar preferencia inmediatamente
  localStorage.setItem('localeCode', lang);
  
  // Establecer idioma en HTML
  document.documentElement.lang = lang;

  // Validar que i18n existe (como confirmaste que sí existe)
  if (typeof i18n !== 'undefined' && i18n[lang]) {
    // Traducir textos
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Traducir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang][key]) {
        el.placeholder = i18n[lang][key];
      }
    });
  }

  // Actualizar botón (si existe en el DOM)
  const btn = document.getElementById('btnLang');
  if (btn) {
    btn.textContent = locales[currentLocaleIndex].flag;
    btn.title = locales[currentLocaleIndex].name;
  }
}

// Exponer función globalmente
window.applyTranslations = applyTranslations;

// Cambiar idioma (Cíclico)
function switchLang() {
  currentLocaleIndex = (currentLocaleIndex + 1) % locales.length;
  applyTranslations();
  
  // Actualizar tutorial si está activo
  if (typeof window.driverObj !== 'undefined' && window.getTutorialSteps) {
    // Actualizamos los pasos con el nuevo idioma
    if (window.driverObj.isActive && window.driverObj.isActive()) {
       // Si Driver.js v1 permite reconfigurar al vuelo:
       // window.driverObj.setConfig({ steps: window.getTutorialSteps() });
       // Si no, a veces es mejor cerrar y reabrir o simplemente dejar que el próximo paso tome el texto nuevo si es dinámico.
    } else {
       window.driverObj.setSteps(window.getTutorialSteps());
    }
  }
}

// Inicialización final
document.addEventListener('DOMContentLoaded', () => {
  const btnLang = document.getElementById('btnLang');
  if (btnLang) {
    btnLang.addEventListener('click', switchLang);
  }
  
  // Aplicar traducciones apenas el DOM esté listo
  // (Usará el currentLocaleIndex que ya cargamos correctamente arriba)
  applyTranslations();
});