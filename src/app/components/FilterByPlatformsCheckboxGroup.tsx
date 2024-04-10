import { CheckboxGroup, Checkbox } from '@nextui-org/react';
import React from 'react'
import { platforms } from '../constants/platforms';

interface Props {
  handleGetPlatforms: (platform: number) => void
}

function FilterByPlatformsCheckboxGroup({ handleGetPlatforms }: Props) {
  return (
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
  );
}

export default FilterByPlatformsCheckboxGroup
