import { getActualDate } from "../helpers/getActualDate";
import { Results } from "../types/results";

const URL_API = "https://api.rawg.io/api/games?key=";
const API_KEY = "2a3d2cb97f9e4d59a7512ddc6d015c7b";
const API_KEY_2 = "a54dbb1ed57c447282e7f82d83cdea79";
const DEFAULT_URL = `${URL_API}${API_KEY_2}&page_size=15`;

export const fetchGamesBySearch = async (
  search: string
): Promise<Results[]> => {
  const response = await fetch(URL_API + API_KEY_2 + `&search=${search}`, {
    method: "GET",
    mode: "cors",
  });
  const data = await response.json();

  if (response.ok) {
    return data.results;
  } else {
    throw new Error("Error al obtener los juegos");
  }
};

export const fetchAllGames = async (filterQuery: string, page: number): Promise<Results[]> => {
  const response = await fetch(
    filterQuery + `&page=${page}`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  if (response.ok) {
    const data = await response.json();

    return data.results;
  } else {
    throw new Error("Error al obtener los juegos");
  }
};
