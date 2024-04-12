import React from "react";
import { genres } from "../constants/genres";

interface Props {
  handleGetGenres: (genre: string) => void;
}

function FilterByGenreCheckboxGroup({ handleGetGenres }: Props) {
  return (
    <article className="flex flex-col gap-1 w-full ml-2">
      <div className="flex flex-col gap-1 text-gray-100">
        <div className="grid grid-cols-3 gap-2 mt-2">
          {genres?.map((genre) => (
              <label
                id={genre.slug}
                key={genre.slug}
                htmlFor={genre.id.toString()}
                className="checkbox-filters-genre-platforms"
              >
                <input
                  id={genre.id.toString()}
                  type="checkbox"
                  value={genre.name}
                  onClick={() => handleGetGenres(genre.slug)}
                  className="absolute -z-50"
                />
                {genre.name}
              </label>
            
          ))}
        </div>
      </div>
    </article>
  );
}

export default FilterByGenreCheckboxGroup;
