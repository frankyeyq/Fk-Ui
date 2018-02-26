function hsv2rgb(h, s, v) {
  s = s / 100;
  v = v / 100;
  let i = Math.floor(h / 60);
  let f = h / 60 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  let mod = i % 6;
  let r = 0;
  let g = 0;
  let b = 0;
  switch (mod) {
    case 0:
      [r, g, b] = [v, t, p];
      break;
    case 1:
      [r, g, b] = [q, v, p];
      break;
    case 2:
      [r, g, b] = [p, v, t];
      break;
    case 3:
      [r, g, b] = [p, q, v];
      break;
    case 4:
      [r, g, b] = [t, p, v];
      break;
    default:
      [r, g, b] = [v, p, q];
      break;
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function rgb2hex(rgbArray) {
  function hexOne(value) {
    if (value <= 16) {
      return '0' + value.toString(16);
    } else {
      return value.toString(16);
    }
  }
  return rgbArray.map(hexOne);
}

export {
  hsv2rgb,
  rgb2hex
}
