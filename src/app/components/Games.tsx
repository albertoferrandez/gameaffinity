"use client";
import React, { Dispatch, SetStateAction } from "react";
import { IGames, Result } from "../types/results";
import { Card, Pagination, Image } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  data: IGames | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Games({ data, page, setPage }: Props) {
  return (
    <section className="md:mt-6 mt-0">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 place-content-center p-4">
        {data?.results.map((game: Result) => (
          <Link href={`game/${game.slug}`} key={game.id}>
            <Card className="md:w-[200px] md:h-[300px] w-[150px] h-[250px] bg-slate-100 dark:bg-transparent">
              <Image
                isZoomed
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover aspect-video rounded-none"
                src={game.background_image || ""}
              />
              <div
                className="flex justify-center w-full bg-slate-100 dark:bg-transparent 
                gap-2 items-center dark:text-sulphur text-shadow-planet 
                text-xs text-pretty p-2"
              >
                <h4>{game.name}</h4>
              </div>
            </Card>
          </Link>
        ))}
      </ul>

      <div className="flex justify-center mx-auto mt-4">
        <Pagination
          total={Math.ceil(data!.count / 15)}
          initialPage={1}
          page={page}
          color="warning"
          onChange={(newPage) => setPage(newPage)}
        />
      </div>
    </section>
  );
}

export default Games;
