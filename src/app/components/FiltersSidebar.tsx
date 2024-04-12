import React from "react";
import { useGameFiltered } from "../context/context";
import FilterByGenreCheckboxGroup from "./FilterByGenreCheckboxGroup";
import FilterByPlatformsCheckboxGroup from "./FilterByPlatformsCheckboxGroup";

function FiltersSidebar() {
  const {
    setFilterByGenre,
    filterByGenre,
    setFilterByPlatform,
    filterByPlatform,
  } = useGameFiltered();

  const handleGetGenres = (genre: string) => {
    if (filterByGenre.includes(genre)) {
      const deleteFilter = filterByGenre.filter((g) => g !== genre);
      setFilterByGenre([...deleteFilter]);
    } else {
      setFilterByGenre([...filterByGenre, genre]);
    }
  };

  const handleGetPlatforms = (platform: number) => {
    if (filterByPlatform.includes(platform)) {
      const deleteFilter = filterByPlatform.filter((p) => p !== platform);
      setFilterByPlatform([...deleteFilter]);
    } else {
      setFilterByPlatform([...filterByPlatform, platform]);
    }
  };

  return (
    <aside className="min-w-[375px] p-4 lg:block md:hidden hidden">
      <h3 className="font-bold text-xs">FILTROS:</h3>

      <details open className="ml-2 mt-4">
        <summary className="text-xs text-sulphur uppercase my-2 flex justify-between items-center pr-4 cursor-pointer">
          Genero
        </summary>
        <FilterByGenreCheckboxGroup handleGetGenres={handleGetGenres} />
      </details>

      <details open className="ml-2 mt-4">
        <summary className="text-xs text-sulphur uppercase my-2 flex justify-between items-center pr-4 cursor-pointer">
          Plataformas
        </summary>
        <FilterByPlatformsCheckboxGroup
          handleGetPlatforms={handleGetPlatforms}
        />
      </details>
    </aside>
  );
}

export default FiltersSidebar;
