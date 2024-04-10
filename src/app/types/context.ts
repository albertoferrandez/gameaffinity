import { Dispatch, SetStateAction } from "react";
import { IGames } from "./results";

export interface ContextType {
  data: IGames | undefined;
  isFetching: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  filterByGenre: string[];
  filterByPlatform: number[];
  setFilterByOrder: Dispatch<SetStateAction<string>>;
  setFilterByGenre: Dispatch<SetStateAction<string[]>>;
  setFilterByPlatform: Dispatch<SetStateAction<number[]>>;
}
