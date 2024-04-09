"use client";

import { useGameFiltered } from "../context/context";
import Games from "./Games";
import GamesFetching from "./GamesFetching";

function HomePage() {
  const { data, isFetching, page, setPage} = useGameFiltered();

  return (
    <>
      {isFetching ? (
        <GamesFetching />
      ) : (
        <Games
          data={data}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
}

export default HomePage;
