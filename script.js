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
