document.addEventListener('DOMContentLoaded', function () {
   const descubrimiento = document.getElementById('descubrimiento');
   const especifiqueContainer = document.getElementById('especifique-container');


   descubrimiento.addEventListener('change', function () {
       if (descubrimiento.value === 'otro') {
           especifiqueContainer.style.display = 'block';
       } else {
           especifiqueContainer.style.display = 'none';
       }
   });
});