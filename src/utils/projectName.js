export function projectName(title) {
  return title.split(/\s+[\u2013\u2014-]\s+/)[0];
}
