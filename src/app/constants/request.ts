import { getActualDate } from "../helpers/getActualDate";

const URL_API = "https://api.rawg.io/api/games?key=";
const API_KEY = "2a3d2cb97f9e4d59a7512ddc6d015c7b";
const API_KEY_2 = "6b803ece93244e46a53d12a4ec8fe265";
const DEFAULT_URL = `${URL_API}${API_KEY_2}&page_size=15&dates=1960-01-01,${getActualDate()}`;

export const request = {
  "best-games": {
    fetchUrl: `${DEFAULT_URL}&ordering=-metacritic`,
  },
  "worst-games": {
    fetchUrl: `${DEFAULT_URL}&ordering=metacritic`,
  },
  "last-games-released": {
    fetchUrl: `${DEFAULT_URL}&ordering=-released`,
  },
  "oldest-games-released": {
    fetchUrl: `${DEFAULT_URL}&ordering=released`,
  },
};
