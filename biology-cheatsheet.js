export async function mountBiologyCheatsheet(container) {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = './biology-cheatsheet.css';

  const styleReady = new Promise((resolve, reject) => {
    stylesheet.addEventListener('load', resolve, { once: true });
    stylesheet.addEventListener('error', reject, { once: true });
    document.head.append(stylesheet);
  });
  const notesRequest = fetch('./biology-cheatsheet-notes.html?v=2', { cache: 'no-cache' });
  const [response] = await Promise.all([notesRequest, styleReady]);
  if (!response.ok) throw new Error('Cannot load AP Biology notes');

  const notes = document.createElement('template');
  notes.innerHTML = await response.text();
  const units = Array.from(notes.content.querySelectorAll('article[data-unit]'));
  if (units.length !== 9) throw new Error('Incomplete AP Biology notes');

  const menu = document.createElement('nav');
  menu.className = 'biology-unit-menu';
  menu.setAttribute('aria-label', 'Cheatsheet units');

  const content = document.createElement('div');
  content.className = 'biology-unit-content';

  const buttons = units.map((unit) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = unit.dataset.unit === 'intro' ? 'Cover & Experiments' : 'Unit ' + unit.dataset.unit;
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
  selectUnit(units.find((unit) => unit.dataset.unit === '2'));
  container.replaceChildren(menu, content);
}
