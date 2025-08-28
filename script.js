function setLanguage(lang) {
  document.querySelectorAll('[data-es]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
// Inicializar en español por defecto
setLanguage('es');
