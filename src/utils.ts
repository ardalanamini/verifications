export function range(start: number = 0, stop: number = start, step: number = 1) {
  const length = Math.max(Math.ceil((stop - start) / step), 0);
  let range = [];

  for (let i = 0; i < length; i++, start += step) {
    range.push(start);
  }

  return range;
};
