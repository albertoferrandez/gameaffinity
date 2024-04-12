import React from 'react'
import { platforms } from '../constants/platforms';

interface Props {
  handleGetPlatforms: (platform: number) => void
}

function FilterByPlatformsCheckboxGroup({ handleGetPlatforms }: Props) {
  
  return (
    <article className="flex flex-col gap-1 w-full ml-2">
      <div className="flex flex-col gap-1 text-gray-100">
        <div className="grid grid-cols-3 gap-2 mt-2">
          {platforms?.map((platforms) => (
            
              <label
                key={platforms.slug}
                htmlFor={platforms.slug}
                className="checkbox-filters-genre-platforms"
              >
                <input
                  id={platforms.slug}
                  type="checkbox"
                  value={platforms.name}
                  onClick={() => handleGetPlatforms(platforms.id)}
                  className="absolute -z-50"
                />
                {platforms.name}
              </label>
            
          ))}
        </div>
      </div>
    </article>
  );
}

export default FilterByPlatformsCheckboxGroup
