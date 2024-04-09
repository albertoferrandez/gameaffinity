import { Dispatch, SetStateAction } from "react";
import { Response } from "./results";

export interface ContextType {
  data: Response[] | undefined;
  isFetching: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  filterByGenre: string[];
  filterByPlatform: number[];
  setFilterByOrder: Dispatch<SetStateAction<string>>;
  setFilterByGenre: Dispatch<SetStateAction<string[]>>;
  setFilterByPlatform: Dispatch<SetStateAction<number[]>>;
}
