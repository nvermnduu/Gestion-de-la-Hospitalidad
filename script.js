function desbloquear(ids) {
  ids.forEach(function(id) {
    const bloque = document.getElementById(id);
    if (bloque) {
      bloque.classList.remove('bloqueada');
      const input = bloque.querySelector('input');
      if (input) input.disabled = false;
      bloque.style.opacity = '1';
      bloque.style.color = '#000';
      bloque.style.borderLeft = '4px solid #8ca9e0';
      bloque.style.cursor = 'default';
    }
  });
}
