// 📊 Actualiza la barra de progreso
function actualizarProgreso() {
  const casillas = document.querySelectorAll('input[type="checkbox"]');
  const total = casillas.length;
  let marcadas = 0;

  casillas.forEach(c => {
    if (c.checked) marcadas++;
  });

  const porcentaje = Math.round((marcadas / total) * 100);
  document.getElementById('barraProgreso').style.width = porcentaje + '%';
  document.getElementById('porcentajeProgreso').textContent = porcentaje + '% cursado';
}

// 🔓 Desbloquea materias específicas por ID
function desbloquear(ids) {
  ids.forEach(function(id) {
    const bloque = document.getElementById(id);
    if (bloque && bloque.classList.contains('bloqueada')) {
      bloque.classList.remove('bloqueada');
      const input = bloque.querySelector('input');
      if (input) input.disabled = false;
      bloque.style.opacity = '1';
      bloque.style.cursor = 'pointer';
      bloque.style.color = '#000';
      bloque.style.borderLeft = '6px solid ' + getColorPorClase(bloque.className);
    }
  });
}

// 🌈 Retorna color por clase de materia
function getColorPorClase(clase) {
  if (clase.includes('finanzas')) return '#c9b89a';
  if (clase.includes('alimentos')) return '#97cfa3';
  if (clase.includes('idiomas')) return '#a1a9d3';
  if (clase.includes('cultura')) return '#d6aac6';
  if (clase.includes('gestion')) return '#ddb08c';
  if (clase.includes('tecnologia')) return '#8ac8d3';
  if (clase.includes('general')) return '#c0a98f';
  if (clase.includes('pasantia')) return '#b1a586';
  return '#aaa'; // color de respaldo
}
