import {ActionType} from "./actions";
import {Genre} from "../const";
import {generateFilms} from "../mock/movie";

const initialState = {
  movies: generateFilms(),
  genre: Genre.ALL_GENRES,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      return {...state, genre: action.payload};
    }
    case ActionType.LOAD_MOVIES: {
      return {...state, movies: action.payload};
    }
    default:
      return state;
  }
};

export {appStore};
