"use client";
import { useGetGameBySlug } from "@/app/data/get-games";
import { Chip, Image } from "@nextui-org/react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Page({ params }: { params: { slug: string } }) {
  const { data, isFetching } = useGetGameBySlug(params.slug);

  return (
    <section className="flex justify-center mt-12">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div>
          <Link
            href={"/"}
            className="text-xs inline-flex items-center gap-2 text-sulphur"
          >
            <IconArrowNarrowLeft />
            Home
          </Link>

          <h1 className="text-2xl font-extrabold mt-4">{data?.name}</h1>
        </div>

        {isFetching && "Loading..."}

        <div className="grid grid-cols-2 mt-12">
          <div>
            <Image
              alt={`Cover image of ${data?.name}`}
              src={data?.background_image || ""}
              height={400}
              width={350}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Titulo original:</span>
              <span className="text-sm font-bold text-slate-100 ">
                {data?.name_original || "No disponible"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Año:</span>
              <span className="text-sm font-bol text-slate-100">
                {data?.released.toString() || "No disponible"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Desarrolladores:</span>
              <span className="text-sm font-bol text-slate-100">
                {data?.developers.map((dev) => (
                  <span key={dev.name}>{dev.name}</span>
                ))}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Género:</span>
              <span className="text-sm font-bol text-slate-100 flex gap-2">
                {data?.genres.map((genre) => (
                  <Chip as={"span"} color="default" size="sm" key={genre.name}>
                    {genre.name}
                  </Chip>
                ))}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Grupos:</span>
              <span className="text-sm font-bol text-slate-100 flex gap-2 flex-wrap">
                {data?.tags.map((tags) => (
                  <Chip as={"span"} color="default" size="sm" key={tags.name}>
                    {tags.name}
                  </Chip>
                ))}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xs text-slate-300">Plataformas:</span>
              <span className="text-sm font-bol text-slate-100 flex gap-2">
                {data?.platforms.map((p) => (
                  <Chip
                    as={"span"}
                    color="default"
                    size="sm"
                    key={p.platform.id}
                  >
                    {p.platform.name}
                  </Chip>
                ))}
              </span>
            </p>

            <p className="flex gap-2">
              <span className="text-xs text-slate-300">Sinopsis:</span>
              <span className="text-sm font-bold text-slate-100 text-pretty">
                {data?.description_raw}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
