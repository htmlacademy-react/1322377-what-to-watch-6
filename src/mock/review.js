import {nanoid} from "nanoid";
import {loremIpsum} from "lorem-ipsum";

import {getRandomArrayItem, getRandomDate, count, getRandomInt} from "../utils/common";

const NAMES = [
  `Kylie Jenner`,
  `Kanye West`,
  `Lebron James`,
  `Dwayne Johnson`,
  `Rush Limbaugh`,
  `Ellen Degeneres`,
  `Elton John`,
  `Ariana Grande`,
  `Ryan Reynolds`,
  `Taylor Swift`,
  `Mark Wahlberg`,
  `Ben Affleck`,
  `Vin Diesel`,
  `Drake`,
  `Jackie Chan`,
  `Travis Scott`,
  `Sebastian Vettel`
];

export const generateReview = () => {
  return {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: getRandomArrayItem(NAMES)
    },
    rating: getRandomInt(10, 100) / 10,
    comment: loremIpsum({count: getRandomInt(1, 3), units: `paragraphs`}),
    date: getRandomDate()
  };
};

export const generateReviews = (itemsCount = 40) => count(itemsCount)
  .reduce((acc) => {
    acc = [...acc, generateReview()];
    return acc;
  }, []);
