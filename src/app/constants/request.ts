import { getActualDate } from "../helpers/getActualDate";

const DEFAULT_URL = `${process.env.NEXT_PUBLIC_URL_API}${process.env.NEXT_PUBLIC_API_KEY}&page_size=15&dates=1960-01-01,${getActualDate()}`;

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
