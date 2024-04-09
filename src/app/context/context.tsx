import { createContext, useContext, useEffect, useState } from "react";
import { useGetAllGames } from "../data/get-games";
import { request } from "../constants/request";
import { ContextType } from "../types/context";

const MyContext = createContext<ContextType>({
  data: [],
  isFetching: false || true,
  page: 1,
  setPage: () => {},
  filterByGenre: [],
  filterByPlatform: [],
  setFilterByOrder: () => {},
  setFilterByGenre: () => {},
  setFilterByPlatform: () => {},
});

const GamesProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  const [filterByOrder, setFilterByOrder] = useState(
    request["best-games"].fetchUrl
  );
  const [filterByGenre, setFilterByGenre] = useState<string[]>([]);
  const [filterByPlatform, setFilterByPlatform] = useState<number[]>([]);

  const [filterQuery, setFilterQuery] = useState(
    request["best-games"].fetchUrl
  );
  const { data, isFetching, page, setPage } = useGetAllGames(filterQuery);

  useEffect(() => {
    let newFilterQuery = `${filterByOrder}`;
    if (filterByGenre.length > 0) {
      newFilterQuery += `&genres=${filterByGenre.join(",")}`;
    }
    if (filterByPlatform.length > 0) {
      newFilterQuery += `&platforms=${filterByPlatform.join(",")}`;
    }
    setFilterQuery(newFilterQuery);
  }, [filterByOrder, filterByGenre, filterByPlatform]);

  return (
    <MyContext.Provider
      value={{
        data,
        isFetching,
        page,
        setPage,
        setFilterByOrder,
        setFilterByGenre,
        filterByGenre,
        setFilterByPlatform,
        filterByPlatform,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useGameFiltered = () => {
  return useContext(MyContext);
};

export { GamesProvider, useGameFiltered };
