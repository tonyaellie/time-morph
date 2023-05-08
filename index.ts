export type UnitOfTime =
  | 'ms'
  | 'sec'
  | 'min'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';

export type Duration = {
  unit: UnitOfTime;
  duration: number;
}

const CONVERSION_FACTORS: Record<UnitOfTime, number> = {
  ms: 1,
  sec: 1000,
  min: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 365,
};

export const convertTime = (input: {
  duration: number;
  from: UnitOfTime;
  to?: UnitOfTime;
}): number => {
  const inputMs = input.duration * CONVERSION_FACTORS[input.from];
  return input.to ? inputMs / CONVERSION_FACTORS[input.to] ?? 0 : inputMs;
};

export default convertTime;

export const setMorphInterval = (callback: () => void, duration: Duration) => {
  return window.setInterval(
    callback,
    convertTime({ duration: duration.duration, from: duration.unit })
  );
}

export const setMorphTimeout = (callback: () => void, duration: Duration) => {
  return window.setTimeout(
    callback,
    convertTime({ duration: duration.duration, from: duration.unit })
  );
};
