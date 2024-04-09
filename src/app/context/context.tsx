import { Dispatch, SetStateAction, createContext, useCallback, useContext, useState } from "react";
import { Results } from "../types/results";
import { useGetAllGames } from "../data/get-games";
import { request } from "../constants/request";

interface ContextType {
  data: Results[] | undefined;
  getGames: (path: keyof typeof request) => void;
  isFetching: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setGenre: Dispatch<SetStateAction<string[]>>;
}

const MyContext = createContext<ContextType>({
  data: [],
  getGames: (path: keyof typeof request) => {},
  isFetching: false || true,
  page: 1,
  setPage: () => {},
  setGenre: (value: SetStateAction<string[]>) => {}
});

const GamesProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  const [filterQuery, setFilterQuery] = useState(
    request["best-games"].fetchUrl
  );
  const [genre, setGenre] = useState<string[]>([])
  const { data, isFetching, page, setPage } = useGetAllGames(filterQuery);

  const getGames = useCallback(
    (path: keyof typeof request) => {
      setFilterQuery(request[path].fetchUrl);
    },
    [filterQuery]
  );

  return (
    <MyContext.Provider
      value={{ data, getGames, isFetching, page, setPage, setGenre }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useGameFiltered = () => {
  return useContext(MyContext);
};

export { GamesProvider, useGameFiltered };
