i18next.init({
  lng: 'es', // el idioma por defecto
  resources: {
    en: { // las traducciones en inglés
      translation: {
        "title": "Jessica miller",
        "text": "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
      }
    },
    es: { // las traducciones en español
      translation: {
        "title": "Jessica miller",
        "text": "Richard fue contratado para crear una identidad corporativa. Estuvimos muy satisfechos con el trabajo realizado. Tiene mucha experiencia y se preocupa mucho por las necesidades del cliente. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
      }
    }
  }
}, function(err, t) {
  // inicializado y listo para usar
  var title = document.querySelector('[data-testimonials-title]');
  var text = document.querySelector('[data-testimonials-text]');
  title.textContent = i18next.t('title');
  text.textContent = i18next.t('text');
  alert( 'hola');
});