document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('select-origen');
  const campoEspecifique = document.getElementById('campo-especifique');
  const form = document.getElementById('form-contacto');

  select.addEventListener('change', () => {
    if (select.value === 'otro') {
      campoEspecifique.style.display = 'block';
    } else {
      campoEspecifique.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
    form.reset();
    campoEspecifique.style.display = 'none';
  });
});
