import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import React from "react";
import { useGameFiltered } from "../context/context";
import FilterByGenreCheckboxGroup from "./FilterByGenreCheckboxGroup";
import FilterByPlatformsCheckboxGroup from "./FilterByPlatformsCheckboxGroup";

function FiltersSidebar() {
  const { setFilterByGenre, filterByGenre, setFilterByPlatform, filterByPlatform } = useGameFiltered();

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
  }

  return (
    <aside className="min-w-64 p-4">
      <h3 className="font-bold text-xs">FILTROS:</h3>
      <Accordion
        itemClasses={{ title: "text-xs text-gray-100" }}
        defaultExpandedKeys={["1", "2"]}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Géneros"
          className="text-white"
        >
          <FilterByGenreCheckboxGroup handleGetGenres={handleGetGenres}/>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Plataforma">
          <FilterByPlatformsCheckboxGroup  handleGetPlatforms={handleGetPlatforms} />
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default FiltersSidebar;
