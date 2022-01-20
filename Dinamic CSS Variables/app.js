const root = document.documentElement;


function changeValue(id, value) {
  const suffix = (id != 'color' ? '%' : '');

  root.style.setProperty(`--${id}`, value + suffix); 
}