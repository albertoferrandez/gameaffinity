"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { Results } from '../types/results'
import { Card, Pagination, Image } from "@nextui-org/react";
import Link from 'next/link';

interface Props {
  data: Results[] | undefined
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

function Games({ data, page, setPage }: Props) {

  return (
    <section className="mt-6">
      <h3></h3>

      <ul className="grid grid-cols-3 gap-3 place-content-center p-4">
        {data &&
          data?.map((game) => (
            <Link href={`game/${game.slug}`} key={game.id}>
              <Card className="w-[200px] h-[300px] bg-slate-100 dark:bg-dark">
                <Image
                  isZoomed
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover aspect-video rounded-none"
                  src={game.background_image}
                />
                <div
                  className="flex justify-center w-full bg-slate-100 dark:bg-black 
                gap-2 items-center dark:text-sulphur text-shadow-planet text-xs text-pretty p-2"
                >
                  <h4>{game.name}</h4>
                </div>
              </Card>
            </Link>
          ))}
      </ul>

      <div className="flex justify-center mx-auto mt-4">
        <Pagination
          total={56}
          initialPage={1}
          page={page}
          color="warning"
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </section>
  );
}

export default Games
