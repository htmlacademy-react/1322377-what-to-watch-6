import moment from 'moment';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (arr) => arr[getRandomInt(0, arr.length - 1)];

export const count = (number) => {
  const res = [];
  for (let i = 0; i < number; i++) {
    res.push(i);
  }

  return res;
};

export const getRandomDate = (start = `1970-01-01`, end = moment()) => {
  const unixStart = moment(start).unix();
  const unixEnd = moment(end).unix();
  const randomUnix = (unixStart + Math.random() * (unixEnd - unixStart));
  return moment.unix(randomUnix).toISOString();
};

export const convertKebabToCamel = (str) => str.replace(/-(.)/g, (g) => g[1].toUpperCase());
