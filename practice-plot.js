const svgNamespace = 'http://www.w3.org/2000/svg';
const colors = ['var(--plot-first)', 'var(--plot-second)', 'var(--plot-third)'];
const dashes = ['', '8 4', '2 4'];
const tickNumber = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 });

function addSvg(parent, tag, attributes, text) {
  const child = document.createElementNS(svgNamespace, tag);
  for (const [key, value] of Object.entries(attributes)) child.setAttribute(key, value);
  if (text !== undefined) child.textContent = text;
  parent.append(child);
  return child;
}

function ticksFor(values, bars) {
  const minimum = Math.min(...values, ...(bars ? [0] : []));
  const maximum = Math.max(...values, ...(bars ? [0] : []));
  const roughStep = (maximum - minimum || 1) / 5;
  const power = 10 ** Math.floor(Math.log10(roughStep));
  const step = ([1, 2, 2.5, 5, 10].find(size => size >= roughStep / power) ?? 10) * power;
  const start = Math.floor(minimum / step);
  const end = Math.ceil(maximum / step);
  return Array.from({ length: end - start + 1 }, (_, index) => (start + index) * step);
}

function plotTable({ xLabel, yLabel, x, series, markers }) {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = 'View graph data as a table';
  const table = document.createElement('table');
  const header = table.createTHead().insertRow();
  for (const label of [xLabel, ...series.map(line => line.name ?? yLabel)]) {
    const column = document.createElement('th');
    column.scope = 'col';
    column.textContent = label;
    header.append(column);
  }
  const body = table.createTBody();
  x.forEach((value, index) => {
    const row = body.insertRow();
    row.insertCell().textContent = value;
    for (const line of series) {
      const measurement = line.values[index];
      row.insertCell().textContent = markers?.open === index
        ? measurement + ' (open); ' + markers.point + ' (filled)'
        : measurement;
    }
  });
  details.append(summary, table);
  return details;
}

export function renderPracticePlot(plot) {
  const { xLabel, yLabel, x, series, type, markers } = plot;
  const visual = document.createElement('figure');
  visual.className = 'practice-plot';
  const svg = addSvg(visual, 'svg', { viewBox: '0 0 560 308', role: 'img' });
  addSvg(svg, 'title', {}, yLabel + ' versus ' + xLabel);
  const left = 83;
  const right = 530;
  const top = 18;
  const bottom = 240;
  const bar = type === 'bar';
  const numeric = typeof x[0] === 'number' && !bar;
  const position = index => numeric
    ? left + 10 + (right - left - 20) * (x[index] - x[0]) / (x.at(-1) - x[0])
    : left + (right - left) * (index + .5) / x.length;
  const allY = series.flatMap(line => line.values);
  if (markers) allY.push(markers.point);
  const ticks = ticksFor(allY, bar);
  const low = ticks[0];
  const high = ticks.at(-1);
  const yPosition = value => bottom - (bottom - top) * (value - low) / (high - low);

  for (const tick of ticks) {
    const y = yPosition(tick);
    addSvg(svg, 'line', {
      x1: left, x2: right, y1: y, y2: y,
      stroke: tick === 0 ? 'currentColor' : 'var(--plot-grid)'
    });
    addSvg(svg, 'text', { x: left - 9, y: y + 5, 'text-anchor': 'end' }, tickNumber.format(tick));
  }
  addSvg(svg, 'path', {
    d: 'M ' + left + ' ' + top + ' V ' + bottom + ' H ' + right,
    fill: 'none', stroke: 'currentColor'
  });
  x.forEach((value, index) => {
    const px = position(index);
    addSvg(svg, 'line', { x1: px, x2: px, y1: bottom, y2: bottom + 5, stroke: 'currentColor' });
    addSvg(svg, 'text', { x: px, y: bottom + 23, 'text-anchor': 'middle' }, value);
  });
  addSvg(svg, 'text', { x: (left + right) / 2, y: 297, 'text-anchor': 'middle' }, xLabel);
  addSvg(svg, 'text', {
    x: -(top + bottom) / 2, y: 19, transform: 'rotate(-90)', 'text-anchor': 'middle'
  }, yLabel);

  series.forEach((line, seriesIndex) => {
    const color = colors[seriesIndex];
    if (type === 'line') {
      addSvg(svg, 'polyline', {
        points: line.values.map((value, index) => position(index) + ',' + yPosition(value)).join(' '),
        fill: 'none', stroke: color, 'stroke-width': 2.5, 'stroke-dasharray': dashes[seriesIndex]
      });
    }
    line.values.forEach((value, index) => {
      const cx = position(index);
      const cy = yPosition(value);
      if (bar) {
        const width = Math.min(68, (right - left) / x.length * .55);
        addSvg(svg, 'rect', { x: cx - width / 2, y: cy, width, height: yPosition(0) - cy, fill: color });
      } else {
        addSvg(svg, 'circle', {
          cx, cy, r: 4, fill: markers?.open === index ? 'var(--plot-paper)' : color, stroke: color, 'stroke-width': 2
        });
      }
    });
    if (markers) {
      addSvg(svg, 'circle', { cx: position(markers.open), cy: yPosition(markers.point), r: 4, fill: color });
    }
  });

  if (series.length > 1) {
    const legend = document.createElement('figcaption');
    for (const [index, line] of series.entries()) {
      const item = document.createElement('span');
      const swatch = document.createElement('i');
      swatch.style.color = colors[index];
      swatch.style.borderTopStyle = ['solid', 'dashed', 'dotted'][index];
      item.append(swatch, line.name);
      legend.append(item);
    }
    visual.append(legend);
  }
  visual.append(plotTable(plot));
  return visual;
}
