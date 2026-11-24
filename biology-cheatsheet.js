export async function mountCheatsheet(container, {
  url = './biology-cheatsheet-notes.html?v=3',
  panelCount = 9,
  initialUnit = '2',
} = {}) {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = './biology-cheatsheet.css';

  const styleReady = new Promise((resolve, reject) => {
    stylesheet.addEventListener('load', resolve, { once: true });
    stylesheet.addEventListener('error', reject, { once: true });
    document.head.append(stylesheet);
  });
  const notesRequest = fetch(url, { cache: 'no-cache' });
  const [response] = await Promise.all([notesRequest, styleReady]);
  if (!response.ok) throw new Error('Cannot load Quick Review Notes');

  const notes = document.createElement('template');
  notes.innerHTML = await response.text();
  const units = Array.from(notes.content.querySelectorAll('article[data-unit]'));
  const initial = units.find((unit) => unit.dataset.unit === initialUnit);
  if (units.length !== panelCount || !initial) throw new Error('Incomplete Quick Review Notes');

  const menu = document.createElement('nav');
  menu.className = 'biology-unit-menu';
  menu.setAttribute('aria-label', 'Quick Review Notes units');

  const content = document.createElement('div');
  content.className = 'biology-unit-content';

  const buttons = units.map((unit) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = unit.dataset.label || (unit.dataset.unit === 'intro' ? 'Cover & Experiments' : 'Unit ' + unit.dataset.unit);
    button.setAttribute('aria-controls', unit.id);
    menu.append(button);
    content.append(unit);
    return button;
  });

  function selectUnit(selected) {
    units.forEach((unit, index) => {
      unit.hidden = unit !== selected;
      buttons[index].setAttribute('aria-pressed', String(!unit.hidden));
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => selectUnit(units[index]));
  });
  selectUnit(initial);
  container.replaceChildren(menu, content);
}

export { mountCheatsheet as mountBiologyCheatsheet };
