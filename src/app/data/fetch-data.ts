import { Game } from "../types/game";
import { IGames, Result } from "../types/results";

export const fetchGamesBySearch = async (search: string): Promise<Result[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}${process.env.NEXT_PUBLIC_API_KEY}` +
      `&search=${search}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
  const data = await response.json();

  if (response.ok) {
    return data.results;
  } else {
    throw new Error("Error al obtener los juegos");
  }
};

export const fetchAllGames = async (
  filterQuery: string,
  page: number
): Promise<IGames> => {
  let url = filterQuery + `&page=${page}`;

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  } else {
    throw new Error("Error al obtener los juegos");
  }
};

export const fetchGamesBySlug = async (slug: string): Promise<Game> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/${slug}${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      mode: "cors",
    }
  );
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Error al obtener los juegos");
  }
};
