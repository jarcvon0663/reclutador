// ========== ONBOARDING CON DRIVER.JS ==========

// Inicializar onboarding
function initOnboarding() {
  // Verificar si es la primera vez que visita
  const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
  
  if (!hasSeenTutorial) {
    // Esperar a que Driver.js esté disponible
    const checkDriver = setInterval(() => {
      // CORRECCIÓN: Verificamos la estructura correcta de Driver.js v1.x
      const driverLoaded = window.driver?.js?.driver || window.driver;
      
      if (driverLoaded) {
        clearInterval(checkDriver);
        setTimeout(() => {
          startTutorial();
          localStorage.setItem('hasSeenTutorial', 'true');
        }, 1000);
      }
    }, 100);
    
    // Timeout de seguridad después de 5 segundos
    setTimeout(() => {
      clearInterval(checkDriver);
    }, 5000);
  }
}

// Obtener pasos del tutorial según el idioma actual
function getTutorialSteps() {
  const lang = window.currentLanguage || 'en';
  
  const steps = {
    en: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Add Technologies',
          description: 'Type the technologies you\'re looking for (like Python, C++, React) and press Enter or comma to add them as tags. The autocomplete will help you!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Technology Tags',
          description: 'Your selected technologies will appear here as tags. Click the × to remove any technology.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Filter by Level',
          description: 'Optionally select the seniority level: Junior, Mid, or Senior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Select Country',
          description: 'Choose a target country to focus your search. This will also load cities for that country.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Search Preview',
          description: 'Here you can see exactly what will be searched on Google before executing the search.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Generate Search',
          description: 'Click here to open the search in Google. The search will be saved in your history automatically.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Search History',
          description: 'All your searches are saved here. You can open, copy, rename, or delete them. Perfect for sharing with your team!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ Need Help?',
          // Usamos HTML dentro de la descripción
            description: `
            Click this button anytime to see this tutorial again. Happy recruiting! 🎉
            <br>
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
            `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    es: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Agregar Tecnologías',
          description: 'Escribe las tecnologías que buscas (como Python, C++, React) y presiona Enter o coma para agregarlas como etiquetas. ¡El autocompletado te ayudará!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Etiquetas de Tecnología',
          description: 'Tus tecnologías seleccionadas aparecerán aquí como etiquetas. Haz clic en la × para eliminar cualquier tecnología.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Filtrar por Nivel',
          description: 'Opcionalmente selecciona el nivel de seniority: Junior, Mid o Senior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Seleccionar País',
          description: 'Elige un país objetivo para enfocar tu búsqueda. Esto también cargará las ciudades de ese país.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Vista Previa',
          description: 'Aquí puedes ver exactamente qué se buscará en Google antes de ejecutar la búsqueda.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Generar Búsqueda',
          description: 'Haz clic aquí para abrir la búsqueda en Google. La búsqueda se guardará automáticamente en tu historial.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Historial de Búsquedas',
          description: 'Todas tus búsquedas se guardan aquí. Puedes abrirlas, copiarlas, renombrarlas o eliminarlas. ¡Perfecto para compartir con tu equipo!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ ¿Necesitas Ayuda?',
          description: `
          Haz clic en este botón en cualquier momento para ver este tutorial de nuevo. ¡Feliz reclutamiento! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    pt: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Adicionar Tecnologias',
          description: 'Digite as tecnologias que você procura (como Python, C++, React) e pressione Enter ou vírgula para adicioná-las como tags. O autocomplete vai ajudar!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Tags de Tecnologia',
          description: 'Suas tecnologias selecionadas aparecerão aqui como tags. Clique no × para remover qualquer tecnologia.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Filtrar por Nível',
          description: 'Opcionalmente selecione o nível de senioridade: Júnior, Mid ou Sênior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Selecionar País',
          description: 'Escolha um país alvo para focar sua busca. Isso também carregará as cidades desse país.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Visualização',
          description: 'Aqui você pode ver exatamente o que será buscado no Google antes de executar a busca.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Gerar Busca',
          description: 'Clique aqui para abrir a busca no Google. A busca será salva automaticamente no seu histórico.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Histórico de Buscas',
          description: 'Todas as suas buscas são salvas aqui. Você pode abri-las, copiá-las, renomeá-las ou excluí-las. Perfeito para compartilhar com sua equipe!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ Precisa de Ajuda?',
          description: `Clique neste botão a qualquer momento para ver este tutorial novamente. Feliz recrutamento! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    fr: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Ajouter des Technologies',
          description: 'Tapez les technologies que vous recherchez (comme Python, C++, React) et appuyez sur Entrée ou virgule pour les ajouter comme tags. L\'autocomplétion vous aidera!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Tags de Technologie',
          description: 'Vos technologies sélectionnées apparaîtront ici comme tags. Cliquez sur le × pour supprimer une technologie.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Filtrer par Niveau',
          description: 'Sélectionnez optionnellement le niveau d\'ancienneté: Junior, Mid ou Senior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Sélectionner un Pays',
          description: 'Choisissez un pays cible pour cibler votre recherche. Cela chargera également les villes de ce pays.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Aperçu',
          description: 'Ici vous pouvez voir exactement ce qui sera recherché sur Google avant d\'exécuter la recherche.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Générer la Recherche',
          description: 'Cliquez ici pour ouvrir la recherche dans Google. La recherche sera sauvegardée automatiquement dans votre historique.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Historique des Recherches',
          description: 'Toutes vos recherches sont sauvegardées ici. Vous pouvez les ouvrir, les copier, les renommer ou les supprimer. Parfait pour partager avec votre équipe!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ Besoin d\'Aide?',
          description: `Cliquez sur ce bouton à tout moment pour revoir ce tutoriel. Bon recrutement! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    de: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Technologien Hinzufügen',
          description: 'Geben Sie die gesuchten Technologien ein (wie Python, C++, React) und drücken Sie Enter oder Komma, um sie als Tags hinzuzufügen. Die Autovervollständigung hilft Ihnen!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Technologie-Tags',
          description: 'Ihre ausgewählten Technologien erscheinen hier als Tags. Klicken Sie auf × um eine Technologie zu entfernen.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Nach Stufe Filtern',
          description: 'Wählen Sie optional die Seniorität: Junior, Mid oder Senior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Land Auswählen',
          description: 'Wählen Sie ein Zielland, um Ihre Suche zu fokussieren. Dies lädt auch die Städte dieses Landes.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Vorschau',
          description: 'Hier können Sie genau sehen, was auf Google gesucht wird, bevor Sie die Suche ausführen.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Suche Generieren',
          description: 'Klicken Sie hier, um die Suche in Google zu öffnen. Die Suche wird automatisch in Ihrem Verlauf gespeichert.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Suchverlauf',
          description: 'Alle Ihre Suchen werden hier gespeichert. Sie können sie öffnen, kopieren, umbenennen oder löschen. Perfekt zum Teilen mit Ihrem Team!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ Brauchen Sie Hilfe?',
          description: `Klicken Sie jederzeit auf diese Schaltfläche, um dieses Tutorial erneut zu sehen. Viel Erfolg beim Recruiting! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    hi: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 प्रौद्योगिकियाँ जोड़ें',
          description: 'वे तकनीकें टाइप करें जिन्हें आप खोज रहे हैं (जैसे Python, C++, React) और उन्हें टैग के रूप में जोड़ने के लिए Enter या अल्पविराम दबाएं। ऑटोकम्प्लीट आपकी मदद करेगा!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ प्रौद्योगिकी टैग',
          description: 'आपकी चयनित तकनीकें यहाँ टैग के रूप में दिखाई देंगी। किसी भी तकनीक को हटाने के लिए × पर क्लिक करें।',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 स्तर से फ़िल्टर करें',
          description: 'वैकल्पिक रूप से सीनियरिटी स्तर चुनें: जूनियर, मिड या सीनियर।',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 देश चुनें',
          description: 'अपनी खोज को केंद्रित करने के लिए एक लक्ष्य देश चुनें। यह उस देश के शहरों को भी लोड करेगा।',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 पूर्वावलोकन',
          description: 'यहाँ आप खोज निष्पादित करने से पहले देख सकते हैं कि Google पर वास्तव में क्या खोजा जाएगा।',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 खोज जनरेट करें',
          description: 'Google में खोज खोलने के लिए यहाँ क्लिक करें। खोज स्वचालित रूप से आपके इतिहास में सहेजी जाएगी।',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 खोज इतिहास',
          description: 'आपकी सभी खोजें यहाँ सहेजी जाती हैं। आप उन्हें खोल सकते हैं, कॉपी कर सकते हैं, नाम बदल सकते हैं या हटा सकते हैं। अपनी टीम के साथ साझा करने के लिए बिल्कुल सही!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ मदद चाहिए?',
          description: `इस ट्यूटोरियल को फिर से देखने के लिए किसी भी समय इस बटन पर क्लिक करें। शुभ भर्ती! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ],
    uk: [
      {
        element: '#step-keywords',
        popover: {
          title: '🎯 Додати Технології',
          description: 'Введіть технології, які ви шукаєте (наприклад Python, C++, React) і натисніть Enter або кому, щоб додати їх як теги. Автодоповнення допоможе вам!',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#tagsContainer',
        popover: {
          title: '🏷️ Теги Технологій',
          description: 'Ваші вибрані технології з\'являться тут як теги. Натисніть × щоб видалити будь-яку технологію.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-seniority',
        popover: {
          title: '📊 Фільтр за Рівнем',
          description: 'За бажанням виберіть рівень сеніоріті: Junior, Mid або Senior.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-country',
        popover: {
          title: '🌍 Вибрати Країну',
          description: 'Виберіть цільову країну для фокусування пошуку. Це також завантажить міста цієї країни.',
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '#step-preview',
        popover: {
          title: '👀 Попередній Перегляд',
          description: 'Тут ви можете побачити, що саме буде шукатись у Google перед виконанням пошуку.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnSubmit',
        popover: {
          title: '🚀 Згенерувати Пошук',
          description: 'Натисніть тут, щоб відкрити пошук у Google. Пошук буде автоматично збережено у вашій історії.',
          side: 'top',
          align: 'center'
        }
      },
      {
        element: '#step-history',
        popover: {
          title: '📚 Історія Пошуків',
          description: 'Всі ваші пошуки зберігаються тут. Ви можете відкривати, копіювати, перейменовувати або видаляти їх. Ідеально для спільного використання з командою!',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#btnHelp',
        popover: {
          title: '❓ Потрібна Допомога?',
          description: `Натисніть цю кнопку в будь-який час, щоб переглянути цей посібник знову. Успішного рекрутингу! 🎉
          <br>
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width: 100%; border-radius: 8px; margin-top: 5px;" alt="Cat typing">
          `,
          side: 'bottom',
          align: 'end'
        }
      }
    ]
  };
  
  return steps[lang] || steps['en'];
}

// Iniciar tutorial
function startTutorial() {
  // CORRECCIÓN: Detectar la referencia correcta a la función driver
  const driver = window.driver?.js?.driver || window.driver;

  // Verificar que Driver.js esté cargado
  if (!driver) {
    console.error('Driver.js no está cargado correctamente');
    showToast('Tutorial not available. Please reload the page.');
    return;
  }
  
  if (!driverObj) {
    // CORRECCIÓN: Usamos la referencia 'driver' que definimos arriba
    driverObj = driver({
      showProgress: true,
      steps: getTutorialSteps(),
      nextBtnText: '→',
      prevBtnText: '←',
      doneBtnText: '✓',
      progressText: '{{current}} / {{total}}',
      overlayColor: 'rgba(0, 0, 0, 0.7)',
      // Driver.js v1 usa 'animate' en lugar de 'smoothScroll' a veces, 
      // pero mantenemos tu config por si acaso, v1 ignora props viejas sin error.
      animate: true, 
      allowClose: true,
      onDestroyStarted: () => {
        if (driverObj) {
          driverObj.destroy();
        }
      }
    });
  } else {
    // Actualizar pasos por si cambió el idioma
    driverObj.setSteps(getTutorialSteps());
  }
  
  driverObj.drive();
}

// Exponer funciones globalmente para acceso desde traductor.js
window.driverObj = driverObj;
window.getTutorialSteps = getTutorialSteps;