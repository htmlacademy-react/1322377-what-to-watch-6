import {nanoid} from "nanoid";
import {getRandomArrayItem, getRandomDate, count} from "../utils/common";

const FILMS = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    posterImage: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    posterImage: `img/macbeth.jpg`,
  },
  {
    name: `Aviator`,
    posterImage: `img/aviator.jpg`,
  },
  {
    name: `We need to talk about Kevin`,
    posterImage: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    name: `What We Do in the Shadows`,
    posterImage: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    name: `Revenant`,
    posterImage: `img/revenant.jpg`,
  },
  {
    name: `Johnny English`,
    posterImage: `img/johnny-english.jpg`,
  },
  {
    name: `Shutter Island`,
    posterImage: `img/shutter-island.jpg`,
  },
  {
    name: `Pulp Fiction`,
    posterImage: `img/pulp-fiction.jpg`,
  },
  {
    name: `No Country for Old Men`,
    posterImage: `img/no-country-for-old-men.jpg`,
  },
  {
    name: `Snatch`,
    posterImage: `img/snatch.jpg`,
  },
  {
    name: `Moonrise Kingdom`,
    posterImage: `img/moonrise-kingdom.jpg`,
  },
  {
    name: `Seven Years in Tibet`,
    posterImage: `img/seven-years-in-tibet.jpg`,
  },
  {
    name: `Midnight Special`,
    posterImage: `img/midnight-special.jpg`,
  },
  {
    name: `War of the Worlds`,
    posterImage: `img/war-of-the-worlds.jpg`,
  },
  {
    name: `Dardjeeling Limited`,
    posterImage: `img/dardjeeling-limited.jpg`,
  },
  {
    name: `Orlando`,
    posterImage: `img/orlando.jpg`,
  },
  {
    name: `Mindhunter`,
    posterImage: `img/mindhunter.jpg`,
  },
];
const GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

export const generateFilm = () => {
  const randomFilm = getRandomArrayItem(FILMS);
  const {name, posterImage} = randomFilm;
  return {
    id: nanoid(),
    name,
    posterImage,
    genre: getRandomArrayItem(GENRES),
    releaseDate: getRandomDate(),
  };
};

export const generateFilms = (itemsCount = 40) => count(itemsCount)
  .reduce((acc) => {
    acc = [...acc, generateFilm()];
    return acc;
  }, []);
