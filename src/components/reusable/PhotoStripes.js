// Brand stripes that used to be baked into the section photos, redrawn as vector bands that sit on top of
// the photo (a bit wider than the old ones so they hide them). The overlay is an <img> whose SVG has the
// same aspect ratio as the photo, so passing the photo's own object-fit / object-position / transform
// classes keeps the stripes locked to the picture at any crop.
// A band is { top: [x0, x1], bottom: [x0, x1], y: [yTop, yBottom], fill } in photo pixels (x at y[0] and y[1]).

const grad = (id, stops, dir = "h") =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="${dir === "h" ? 1 : 0}" y2="${dir === "h" ? 0 : 1}">${stops
    .map(([o, c, op]) => `<stop offset="${o}" stop-color="${c}"${op != null ? ` stop-opacity="${op}"` : ""}/>`)
    .join("")}</linearGradient>`;

function build(p) {
  const defs = [];
  const shapes = [];
  p.bands.forEach((b, i) => {
    let fill = b.fill;
    if (Array.isArray(b.fill)) {
      defs.push(grad(`g${i}`, b.fill, b.dir));
      fill = `url(#g${i})`;
    }
    const pts = `${b.top[0]},${b.y[0]} ${b.top[1]},${b.y[0]} ${b.bottom[1]},${b.y[1]} ${b.bottom[0]},${b.y[1]}`;
    if (b.glow) {
      defs.push(`<filter id="f${i}" x="-60%" y="-5%" width="220%" height="110%"><feGaussianBlur stdDeviation="${b.glow}"/></filter>`);
      shapes.push(`<polygon points="${pts}" fill="${b.glowFill ?? (Array.isArray(b.fill) ? b.fill[0][1] : b.fill)}" opacity="0.6" filter="url(#f${i})"/>`);
    }
    shapes.push(`<polygon points="${pts}" fill="${fill}"${b.opacity != null ? ` opacity="${b.opacity}"` : ""}/>`);
  });
  let body = shapes.join("");
  if (p.clip) {
    defs.push(`<clipPath id="clip"><polygon points="${p.clip}"/></clipPath>`);
    body = `<g clip-path="url(#clip)">${body}</g>`;
  }
  if (p.fade) {
    const [y0, y1] = p.fade;
    defs.push(`<linearGradient id="fadeG" gradientUnits="userSpaceOnUse" x1="0" y1="${y0}" x2="0" y2="${y1}"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>`);
    defs.push(`<mask id="fade" maskUnits="userSpaceOnUse" x="0" y="0" width="${p.w}" height="${p.h}"><rect width="${p.w}" height="${y0}" fill="#fff"/><rect y="${y0}" width="${p.w}" height="${y1 - y0}" fill="url(#fadeG)"/></mask>`);
    body = `<g mask="url(#fade)">${body}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${p.w} ${p.h}"><defs>${defs.join("")}</defs>${body}</svg>`;
}

const PRESETS = {
  // sec11 desktop: silver + gold diagonal between the light panel and the workshop photo
  sec11: {
    w: 1024,
    h: 576,
    bands: [
      { top: [552, 586], bottom: [335, 371], y: [0, 576], fill: [[0, "#dcdad6"], [0.45, "#cfcdc9"], [0.62, "#9b9894"], [0.85, "#bdbbb6"], [1, "#d6d3ce"]] },
      { top: [585, 615], bottom: [368, 398], y: [0, 576], fill: [[0, "#c4a06b"], [1, "#b08a58"]] },
    ],
  },
  // sec3 desktop: silver + gold bands that end behind the car's windscreen
  sec3: {
    w: 1024,
    h: 768,
    clip: "740,0 900,0 900,150 845,147 830,137 815,127 800,118 785,113 770,109 740,106",
    bands: [
      { top: [803, 824], bottom: [760, 781], y: [0, 125], dir: "v", fill: [[0, "#7f786b"], [1, "#928674"]] },
      { top: [839, 863], bottom: [796, 820], y: [0, 125], dir: "v", fill: [[0, "#6e5430"], [1, "#86673a"]] },
    ],
  },
  // sec2 desktop: thin gold edge line along the cut of the engine photo
  sec2: {
    w: 1600,
    h: 1069,
    fade: [700, 800],
    bands: [{ top: [967, 986], bottom: [684, 704], y: [108, 800], dir: "v", fill: [[0, "#d9bf8a"], [0.5, "#c2a06c"], [1, "#b99660"]] }],
  },
};

export default function PhotoStripes({ preset, className = "object-cover", style }) {
  const p = PRESETS[preset];
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(build(p))}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`} style={style} />
  );
}
