document.addEventListener('DOMContentLoaded', () => {
  const selectOrigen = document.getElementById('select-origen');
  const campoEspecifique = document.getElementById('campo-especifique');
  const formulario = document.getElementById('form-contacto');
  const confirmacion = document.getElementById('confirmacion');

  // Mostrar/ocultar campo "Especifique"
  selectOrigen.addEventListener('change', () => {
    if (selectOrigen.value === 'otro') {
      campoEspecifique.style.display = 'block';
    } else {
      campoEspecifique.style.display = 'none';
    }
  });

  // Mostrar mensaje al enviar el formulario
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene recarga

    confirmacion.style.display = 'block';

    // Opcional: ocultar mensaje después de unos segundos
    setTimeout(() => {
      confirmacion.style.display = 'none';
    }, 4000);

    formulario.reset(); // Limpia campos
    campoEspecifique.style.display = 'none';
  });
});
