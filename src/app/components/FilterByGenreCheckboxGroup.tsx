import { CheckboxGroup, Checkbox } from '@nextui-org/react';
import React from 'react'
import { genres } from '../constants/genres';

interface Props {
  handleGetGenres: (genre: string) => void;
}

function FilterByGenreCheckboxGroup({ handleGetGenres }: Props) {
  return (
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
  );
}

export default FilterByGenreCheckboxGroup
