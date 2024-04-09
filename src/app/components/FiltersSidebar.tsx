import {
  Accordion,
  AccordionItem,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import React from "react";
import { genres } from "../constants/genres";
import { useGameFiltered } from "../context/context";
import { platforms } from "../constants/platforms";

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
        defaultExpandedKeys={["1", "2", "3"]}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Géneros"
          className="text-white"
        >
          <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
              className="gap-1 text-gray-100"
              orientation="vertical"
              color="warning"
            >
              {genres?.map((genre) => (
                <Checkbox
                  value={genre.name}
                  key={genre.id}
                  classNames={{ label: "text-gray-100 text-xs" }}
                  onClick={() => handleGetGenres(genre.slug)}
                >
                  {genre.name}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Plataforma">
          <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
              className="gap-1 text-gray-100"
              orientation="vertical"
              color="warning"
            >
              {platforms?.map((platform) => (
                <Checkbox
                  value={platform.name}
                  key={platform.id}
                  classNames={{ label: "text-gray-100 text-xs" }}
                  onClick={() => handleGetPlatforms(platform.id)}
                >
                  {platform.name}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Puntuación">
          3
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default FiltersSidebar;
