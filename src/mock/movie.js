import {nanoid} from "nanoid";
import {loremIpsum} from "lorem-ipsum";

import {getRandomArrayItem, getRandomDate, count, getRandomInt} from "../utils/common";
import {generateReviews} from "./review";
import {Genre} from "../const";

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

const VIDEO_LINKS = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
];
const CELEBRITIES = [
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

export const generateFilm = () => {
  const randomFilm = getRandomArrayItem(FILMS);
  const {name, posterImage} = randomFilm;

  const genreValues = Object.values(Genre).filter((genre) => genre !== Genre.ALL_GENRES);
  return {
    id: nanoid(),
    name,
    posterImage,
    videoLink: getRandomArrayItem(VIDEO_LINKS),
    genre: getRandomArrayItem(getRandomArrayItem(genreValues)),
    releaseDate: getRandomDate(),
    description: loremIpsum({count: getRandomInt(1, 3), units: `paragraphs`}),
    rating: getRandomInt(10, 100) / 10,
    scoresCount: getRandomInt(10, 100) * 10,
    runTime: getRandomInt(9, 27) * 10, // минут
    isFavorite: !!getRandomInt(0, 1),
    director: getRandomArrayItem(CELEBRITIES),
    starring: count(getRandomInt(1, 10)).reduce((acc) => {
      acc.push(getRandomArrayItem(CELEBRITIES));
      return acc;
    }, []),
    _reviews: generateReviews(5) // временное поле
  };
};

export const generateFilms = (itemsCount = 40) => count(itemsCount)
  .reduce((acc) => {
    acc = [...acc, generateFilm()];
    return acc;
  }, []);
