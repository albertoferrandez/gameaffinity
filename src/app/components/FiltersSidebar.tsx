import { Accordion, AccordionItem, CheckboxGroup, Checkbox } from '@nextui-org/react';
import React from 'react'
import { genres } from '../constants/genres';

function FiltersSidebar() {
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
                >
                  {genre.name}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Plataforma">
          2
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Puntuación">
          3
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default FiltersSidebar
