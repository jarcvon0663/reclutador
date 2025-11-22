// Tecnologías comunes para autocompletado
const commonTechs = [
  '.NET', 'A/B Testing', 'ACE', 'ActiveJob', 'ActiveMQ', 'ActiveStorage', 'Actor Model', 'AdonisJS', 'AI',
  'Airflow', 'Akka', 'Akka HTTP', 'Alpakka', 'Alpine.js', 'Amethyst', 'Android SDK', 'Anaconda',
  'Ansible', 'Apache', 'Apache Camel', 'Apache Wicket', 'API Platform', 'Apollo Client', 'ArangoDB',
  'Arm64', 'ASP.NET', 'ASP.NET Core', 'ASP.NET MVC', 'Astro', 'AsyncAPI', 'Autotools', 'AWS',
  'AWS Kinesis', 'Axum', 'Backbone.js', 'Bash', 'Beego', 'Bevy', 'BigQuery', 'Bigtable', 'BLAS',
  'Blazor', 'Blazor Server', 'Blazor WebAssembly', 'Blockchain', 'Bluesky', 'Bootstrap', 'Bottle',
  'Buffalo', 'C', 'C Libs (libuv)', 'C#', 'C++', 'C++ Boost', 'CakePHP', 'Capacitor', 'Capybara',
  'Cats Effect', 'CEF', 'Celery', 'Cassandra', 'CesiumJS', 'Chart.js', 'Chef', 'Chi', 'CMake',
  'Cloud Run', 'Cloudflare', 'CloudFront', 'Clojure', 'Closure', 'CMake', 'CodeIgniter', 'ColdFusion',
  'Combine', 'Composer', 'Conan', 'Concourse', 'Consul', 'Connexion', 'Coroutines', 'CPU Arch',
  'CPPRESTSDK', 'CryEngine', 'CSV', 'CUDA', 'D3.js', 'Dagger', 'Data Science', 'DataMapper', 'Datadog',
  'DBT', 'Deep Learning', 'Deno', 'Diesel', 'Django', 'Docker', 'Doctrine ORM', 'Dropwizard',
  'Druid', 'DSP', 'Echo', 'EC2', 'Electron', 'Electron.NET', 'Elasticsearch', 'Elixir', 'Ember.js',
  'Entity Framework', 'Erlang', 'ETL', 'Express', 'F2PY', 'Falcon', 'FastAPI', 'Fasthttp', 'Feature Flags',
  'Fiber', 'Figma', 'Firebase', 'Flask', 'FLAP', 'Flash', 'Flutter', 'Fortran', 'Fortran2008',
  'FPGA', 'Frontity', 'GA4', 'Gatsby', 'GCC Toolchain', 'GCP', 'GCS', 'Gensim', 'Git', 'GitLab CI',
  'GLSL', 'Gluon', 'Go', 'Go-Kit', 'GORM (Go)', 'GCP', 'GraalVM', 'Grafana', 'Gradle',
  'GraphQL', 'Gridsome', 'gRPC C++', 'grpc-go', 'Guice', 'Gunicorn', 'Gulp', 'Hadoop', 'HAF',
  'HAProxy', 'Hanami', 'Hasura', 'HDF5', 'HikariCP', 'Highcharts', 'Hilt', 'HLS', 'HTML5',
  'HTTP/2', 'Hybrid Apps', 'Hyper', 'IaC', 'IBM MQ', 'ICPC', 'ICU', 'InfluxDB', 'InVision',
  'Intel Fortran', 'Ionic', 'IPython', 'Istio', 'JAX', 'Jakarta EE', 'Java', 'Java EE', 'JavaFX',
  'JavaServer Faces', 'Java Servlets', 'Jenkins', 'Jetpack Compose', 'JQuery', 'JRuby', 'JSON',
  'Jupyter', 'JupyterLab', 'JUnit', 'Kafka', 'Kafka Streams Scala', 'K6', 'Keras', 'Kotlin', 'Ktor',
  'LangChain', 'Lagom', 'LaunchDarkly', 'Leaflet', 'Less', 'libevent', 'Libuv', 'LightGBM',
  'Lift', 'Linkerd', 'Linux', 'Lit', 'LitElement', 'LLMOps', 'Load Balancer', 'Looker', 'Looker Studio',
  'LPWAN', 'Lumen', 'Lua', 'Machine Learning', 'MAUI', 'MariaDB', 'Marshmallow', 'Material UI',
  'Materialize', 'MATLAB', 'Maven', 'Memcached', 'Metabase', 'METAL', 'Microservices', 'Micronaut',
  'MLflow', 'MobX', 'MongoDB', 'Mono', 'Monix', 'MPI', 'MySQL', 'NATS', 'NancyFX', 'Neo4j',
  'NestJS', 'NetCDF', 'New Relic', 'Next.js', 'NextAuth', 'Nginx', 'Nix', 'Node.js', 'NPM',
  'Nuxt.js', 'Object Storage', 'Odoo', 'OkHttp', 'ONNX', 'OpenACC', 'OpenAI API', 'OpenCV',
  'OpenFaaS', 'OpenID Connect', 'OpenMP', 'OpenResty', 'OpenShift', 'OpenSSL', 'OpenStack',
  'OpenTelemetry', 'OpenTelemetry Collector', 'OpenVPN', 'OpsGenie', 'ORM', 'ORMAlchemy', 'OW',
  'OWASP', 'OWASP ZAP', 'PaaS', 'Padrino', 'Parcel', 'Peewee', 'PHPMailer', 'Phalcon', 'Phusion Passenger',
  'Pinecone', 'Play Framework', 'Playwright', 'PnPM', 'Poco', 'Pod Security', 'Podman', 'POSIX Threads',
  'PostGIS', 'PostgreSQL', 'Postman', 'Power BI', 'PowerShell', 'Preact', 'Prisma', 'Protobuf', 'Protobuf C++',
  'ProtoBuf', 'Python', 'PyQt', 'Pydantic', 'Pyramid', 'Quarkus', 'Quicksight', 'Quarkus', 'QML',
  'QT', 'RabbitMQ', 'RabbitMQ Streams', 'Rancher', 'React', 'React Native', 'React Query', 'Redis',
  'Redux', 'RedShift', 'Remix', 'Render', 'Repo Management', 'Report Server', 'REST API', 'RESTful', 'Retrofit',
  'RISC-V', 'Roda', 'Rocket', 'Ruby', 'Ruby on Rails', 'Rust', 'RxJava', 'RxKotlin', 'S3',
  'Salesforce', 'Sanic', 'SAP', 'Scala', 'Scikit-learn', 'Scalatra', 'Scrapy', 'Scrum', 'SeaORM',
  'Segment', 'Sequelize', 'Sentry', 'Sentry.io', 'Service Mesh', 'ServiceNow', 'SFTP', 'Shell', 'SignalR',
  'Sketch', 'Slack API', 'Slim', 'SLURM', 'Skaffold', 'Sklearn', 'Slick', 'Slim', 'Snowflake',
  'Socket.IO', 'Socket Programming', 'Sodium', 'SOA', 'Solidity', 'Solid.js', 'SonarQube', 'Sonic',
  'SOP', 'Spark', 'Spark Scala', 'Splunk', 'Spring', 'Spring Boot', 'Spring Cloud', 'Spring MVC',
  'SQL', 'SQLite', 'SQS', 'SST', 'Stencil', 'Stripe', 'StrongSwan', 'Svelte', 'Swagger',
  'Swift', 'SwiftUI', 'SystemVerilog', 'Tableau', 'Tailwind CSS', 'TanStack Query', 'Tasmota', 'TCP/IP',
  'Terraform', 'Thrift', 'TimescaleDB', 'Tide', 'Tokio', 'Traefik', 'Trunk', 'Triton', 'Tritium',
  'Turbopack', 'Twisted', 'TypeORM', 'TypeScript', 'Ubuntu', 'UI/UX', 'UNIX', 'Unity', 'Unreal Engine',
  'Uvicorn', 'Vaadin', 'Vagrant', 'Varnish', 'Vault', 'Vector Databases', 'Verilog', 'Vert.x',
  'VHDL', 'Vite', 'VPC', 'Vue.js', 'Vulkan', 'WAF', 'WASM', 'Wasm-bindgen', 'Web Components',
  'Webpack', 'WinForms', 'WireGuard', 'WPF', 'wxWidgets', 'XML', 'Xamarin', 'XGBoost', 'Yeoman',
  'Yew', 'ZIO', 'Zig', 'Zsh', 'Zulip'
];

// Estado global
let selectedTechs = [];
let history = [];
let countriesData = [];
let driverObj = null;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  loadCountriesFromJSON();
  loadHistory();
  initTheme();
  setupEventListeners();
  initOnboarding();
});

// Configurar todos los event listeners
function setupEventListeners() {
  const keywordsInput = document.getElementById('keywords');
  const suggestionsDiv = document.getElementById('suggestions');
  const form = document.getElementById('searchForm');

  // Autocompletado de tecnologías
  keywordsInput.addEventListener('input', handleKeywordInput);
  keywordsInput.addEventListener('keydown', handleKeywordKeydown);
  
  // Cerrar sugerencias al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.input-with-suggestions')) {
      suggestionsDiv.classList.remove('active');
    }
  });

  // Actualizar preview en cambios
  ['nivel', 'ciudad', 'pais', 'ingles', 'excluir'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', updatePreview);
      if (id === 'excluir') {
        element.addEventListener('input', updatePreview);
      }
    }
  });

  // Submit del formulario
  form.addEventListener('submit', handleSubmit);

  // Búsqueda en historial
  document.getElementById('historySearch').addEventListener('input', filterHistory);

  // Tema
  document.getElementById('btnTheme').addEventListener('click', toggleTheme);
  
  // Botón de ayuda/tutorial
  document.getElementById('btnHelp').addEventListener('click', startTutorial);
}

// Manejo del input de keywords
function handleKeywordInput(e) {
  const value = e.target.value.trim();
  const suggestionsDiv = document.getElementById('suggestions');
  
  if (value.length >= 2) {
    const matches = commonTechs.filter(tech => 
      tech.toLowerCase().includes(value.toLowerCase()) &&
      !selectedTechs.includes(tech)
    );
    showSuggestions(matches);
  } else {
    suggestionsDiv.classList.remove('active');
  }
}

// Manejo de teclas en keywords
function handleKeywordKeydown(e) {
  const keywordsInput = document.getElementById('keywords');
  const suggestionsDiv = document.getElementById('suggestions');
  
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    const value = keywordsInput.value.trim();
    if (value) {
      addTech(value);
      keywordsInput.value = '';
      suggestionsDiv.classList.remove('active');
    }
  }
}

// Mostrar sugerencias de autocompletado
function showSuggestions(matches) {
  const suggestionsDiv = document.getElementById('suggestions');
  
  if (matches.length === 0) {
    suggestionsDiv.classList.remove('active');
    return;
  }

  suggestionsDiv.innerHTML = matches
    .slice(0, 8)
    .map(tech => `<div class="suggestion-item" onclick="addTechFromSuggestion('${tech.replace(/'/g, "\\'")}')">${tech}</div>`)
    .join('');
  suggestionsDiv.classList.add('active');
}

// Agregar tech desde sugerencia (para evitar problemas con comillas)
function addTechFromSuggestion(tech) {
  addTech(tech);
  document.getElementById('keywords').value = '';
  document.getElementById('suggestions').classList.remove('active');
}

// Agregar tecnología
function addTech(tech) {
  tech = tech.replace(/,/g, '').trim();
  
  if (!tech) return;
  
  // Evitar duplicados
  if (selectedTechs.some(t => t.toLowerCase() === tech.toLowerCase())) {
    showToast('Esta tecnología ya está agregada');
    return;
  }
  
  selectedTechs.push(tech);
  renderTechs();
  updatePreview();
}

// Eliminar tecnología
function removeTech(tech) {
  selectedTechs = selectedTechs.filter(t => t !== tech);
  renderTechs();
  updatePreview();
}

// Renderizar tags de tecnologías
function renderTechs() {
  const container = document.getElementById('tagsContainer');
  
  if (selectedTechs.length === 0) {
    container.innerHTML = '<span class="tags-placeholder" data-i18n="tagsPlaceholder">Technologies will appear here...</span>';
    // Re-traducir si es necesario
    if (window.applyTranslations) {
      window.applyTranslations();
    }
    return;
  }

  container.innerHTML = selectedTechs
    .map(tech => `
      <span class="tag">
        ${escapeHtml(tech)}
        <span class="tag-remove" onclick="removeTech('${escapeHtml(tech).replace(/'/g, "\\'")}')" title="Remove">×</span>
      </span>
    `)
    .join('');
}

// Construir query de búsqueda
function buildSearchQuery() {
  if (selectedTechs.length === 0) return null;

  let parts = ['site:linkedin.com/in'];
  
  // Agregar tecnologías con comillas para búsqueda exacta
  selectedTechs.forEach(tech => {
    parts.push(`"${tech}"`);
  });

  // Nivel/Seniority
  const nivel = document.getElementById('nivel').value.trim();
  if (nivel) {
    parts.push(nivel);
  }

  // Ciudad
  const ciudad = document.getElementById('ciudad').value.trim();
  if (ciudad) {
    parts.push(`"${ciudad}"`);
  }

  // Palabras a excluir
  const excluir = document.getElementById('excluir').value
    .split(',')
    .map(w => w.trim())
    .filter(w => w)
    .map(w => `-"${w}"`);
  
  if (excluir.length > 0) {
    parts = parts.concat(excluir);
  }

  // Inglés
  if (document.getElementById('ingles').checked) {
    parts.push('("English" OR "Fluent" OR "B2" OR "C1" OR "Advanced English" OR "Bilingual")');
  }

  return parts.join(' ');
}

// Construir URL de búsqueda
function buildSearchURL() {
  const query = buildSearchQuery();
  if (!query) return null;

  // Codificar correctamente la query para URL
  const encodedQuery = encodeURIComponent(query);
  let url = `https://www.google.com/search?q=${encodedQuery}`;

  // Agregar filtros de país si está seleccionado
  const pais = document.getElementById('pais').value;
  if (pais) {
    url += `&gl=${pais.toLowerCase()}&cr=country${pais}`;
  }

  return url;
}

// Actualizar vista previa
function updatePreview() {
  const query = buildSearchQuery();
  const previewDiv = document.getElementById('previewQuery');
  const submitBtn = document.getElementById('btnSubmit');

  if (query) {
    previewDiv.textContent = query;
    submitBtn.disabled = false;
  } else {
    previewDiv.setAttribute('data-i18n', 'previewEmpty');
    previewDiv.textContent = 'Add at least one technology to start...';
    submitBtn.disabled = true;
    
    // Re-traducir
    if (window.applyTranslations) {
      window.applyTranslations();
    }
  }
}

// Manejo del submit del formulario
function handleSubmit(e) {
  e.preventDefault();
  
  const url = buildSearchURL();
  
  if (!url) {
    showToast('Add at least one technology');
    return;
  }

  // Crear objeto de búsqueda para guardar
  const searchData = {
    url: url,
    query: buildSearchQuery(),
    techs: [...selectedTechs],
    nivel: document.getElementById('nivel').value,
    ciudad: document.getElementById('ciudad').value,
    pais: document.getElementById('pais').value,
    date: new Date().toISOString(),
    name: selectedTechs.join(' + ') + (document.getElementById('nivel').value ? ' (' + document.getElementById('nivel').value + ')' : '')
  };

  saveToHistory(searchData);
  
  // Abrir en nueva pestaña
  window.open(url, '_blank', 'noopener,noreferrer');
  showToast('Search generated successfully!');
}

// Guardar en historial
function saveToHistory(data) {
  // Evitar duplicados por URL
  history = history.filter(item => item.url !== data.url);
  
  // Agregar al inicio
  history.unshift(data);
  
  // Mantener solo los últimos 20
  history = history.slice(0, 20);
  
  localStorage.setItem('searchHistory', JSON.stringify(history));
  renderHistory();
}

// Cargar historial desde localStorage
function loadHistory() {
  try {
    const saved = localStorage.getItem('searchHistory');
    history = saved ? JSON.parse(saved) : [];
    renderHistory();
  } catch (error) {
    console.error('Error loading history:', error);
    history = [];
  }
}

// Renderizar historial
function renderHistory(filteredHistory = null) {
  const list = document.getElementById('historyList');
  const items = filteredHistory || history;

  if (items.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p data-i18n="noHistory">No saved searches</p>
      </div>
    `;
    if (window.applyTranslations) {
      window.applyTranslations();
    }
    return;
  }

  list.innerHTML = items.map((item, index) => `
    <div class="history-item">
      <div class="history-item-header">
        <div class="history-title" onclick="window.open('${escapeHtml(item.url)}', '_blank', 'noopener,noreferrer')">
          ${escapeHtml(item.name || item.query)}
        </div>
        <div class="history-date">${formatDate(item.date)}</div>
      </div>
      <div class="history-query">${escapeHtml(item.query)}</div>
      <div class="history-actions">
        <button class="btn-small btn-secondary" onclick="openSearch(${index})">
          <i class="fas fa-external-link-alt"></i> <span data-i18n="open">Open</span>
        </button>
        <button class="btn-small btn-info" onclick="copySearchURL(${index})">
          <i class="fas fa-copy"></i> <span data-i18n="copy">Copy</span>
        </button>
        <button class="btn-small btn-warning" onclick="renameHistory(${index})">
          <i class="fas fa-edit"></i> <span data-i18n="rename">Rename</span>
        </button>
        <button class="btn-small btn-danger" onclick="deleteHistory(${index})">
          <i class="fas fa-trash"></i> <span data-i18n="delete">Delete</span>
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.applyTranslations) {
    window.applyTranslations();
  }
}

// Abrir búsqueda del historial
function openSearch(index) {
  if (history[index]) {
    window.open(history[index].url, '_blank', 'noopener,noreferrer');
  }
}

// Copiar URL de búsqueda al portapapeles
function copySearchURL(index) {
  if (!history[index]) return;
  
  const url = history[index].url;
  
  // Intentar copiar usando la API moderna del portapapeles
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        showToast('URL copied to clipboard!');
      })
      .catch(err => {
        console.error('Error copying to clipboard:', err);
        fallbackCopyToClipboard(url);
      });
  } else {
    // Fallback para navegadores más antiguos
    fallbackCopyToClipboard(url);
  }
}

// Método alternativo de copiar para navegadores antiguos
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToast('URL copied to clipboard!');
    } else {
      showToast('Could not copy URL');
    }
  } catch (err) {
    console.error('Fallback: Could not copy text:', err);
    showToast('Error copying URL');
  }
  
  document.body.removeChild(textArea);
}

// Renombrar búsqueda en historial
function renameHistory(index) {
  if (!history[index]) return;
  
  const newName = prompt('Enter a new name for this search:', history[index].name);
  if (newName && newName.trim()) {
    history[index].name = newName.trim();
    localStorage.setItem('searchHistory', JSON.stringify(history));
    renderHistory();
    showToast('Name updated successfully!');
  }
}

// Eliminar búsqueda del historial
function deleteHistory(index) {
  if (confirm('Delete this search from history?')) {
    history.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    renderHistory();
    showToast('Search deleted');
  }
}

// Filtrar historial
function filterHistory(e) {
  const searchTerm = e.target.value.toLowerCase();
  
  if (!searchTerm) {
    renderHistory();
    return;
  }
  
  const filtered = history.filter(item => 
    (item.name || '').toLowerCase().includes(searchTerm) ||
    item.query.toLowerCase().includes(searchTerm) ||
    (item.techs || []).some(tech => tech.toLowerCase().includes(searchTerm))
  );
  
  renderHistory(filtered);
}

// Formatear fecha de manera relativa
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  return date.toLocaleDateString();
}

// Cargar países desde JSON
function loadCountriesFromJSON() {
  const paisSelect = document.getElementById('pais');

  fetch('paises_ciudades.json')
    .then(response => response.json())
    .then(data => {
      countriesData = data;
      
      // Ordenar alfabéticamente
      countriesData.sort((a, b) => a.name.localeCompare(b.name));

      // Poblar el select
      countriesData.forEach(pais => {
        const option = document.createElement('option');
        option.value = pais.code;
        option.textContent = pais.name;
        paisSelect.appendChild(option);
      });

      // Cargar país guardado
      const savedCountry = localStorage.getItem('defaultCountry');
      if (savedCountry) {
        paisSelect.value = savedCountry;
        loadCitiesForCountry(savedCountry);
      }

      // Event listener para cambio de país
      paisSelect.addEventListener('change', () => {
        const selected = paisSelect.value;
        if (selected) {
          localStorage.setItem('defaultCountry', selected);
          loadCitiesForCountry(selected);
        } else {
          document.getElementById('ciudad').innerHTML = '<option value="" data-i18n="allCities">-- All cities --</option>';
          if (window.applyTranslations) {
            window.applyTranslations();
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading countries:', error);
      showToast('Error loading countries list');
    });
}

// Cargar ciudades para un país
function loadCitiesForCountry(countryCode) {
  const ciudadSelect = document.getElementById('ciudad');
  const country = countriesData.find(p => p.code === countryCode);
  
  if (!country) {
    ciudadSelect.innerHTML = '<option value="">-- All cities --</option>';
    return;
  }
  
  const cities = country.cities || [];
  
  if (cities.length > 0) {
    ciudadSelect.innerHTML = '<option value="" data-i18n="allCities">-- All cities --</option>' +
      cities.map(city => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`).join('');
  } else {
    ciudadSelect.innerHTML = '<option value="" data-i18n="allCities">-- All cities --</option>';
  }
  
  // Re-traducir opciones
  if (window.applyTranslations) {
    window.applyTranslations();
  }
}

// Mostrar toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const messageSpan = document.getElementById('toastMessage');
  
  messageSpan.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Inicializar tema
function initTheme() {
  const saved = localStorage.getItem('theme');
  const btn = document.getElementById('btnTheme');
  
  if (saved === 'dark') {
    document.body.classList.add('dark');
    btn.querySelector('i').className = 'fas fa-sun';
  } else {
    btn.querySelector('i').className = 'fas fa-moon';
  }
}

// Toggle tema claro/oscuro
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  const btn = document.getElementById('btnTheme');
  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  btn.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Utilidad para escapar HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}