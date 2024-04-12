import { Input, NavbarItem } from "@nextui-org/react";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { Result } from "../types/results";
import Link from "next/link";

interface Props {
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  games: Result[] | undefined;
  queryGame: string;
  error: Error | null;
  setQueryGame: React.Dispatch<React.SetStateAction<string>>;
}

function InputSearchGames({
  handleSearchInputChange,
  games,
  queryGame,
  error,
  setQueryGame
}: Props) {
  
  return (
    <NavbarItem className="relative flex-grow">
      <form id="searchgames">
        <Input
          name="searchgames"
          onChange={handleSearchInputChange}
          defaultValue=""
          type="text"
          placeholder="Buscar"
          variant="flat"
          size="md"
          startContent={<IconSearch color="gray" />}
          color="secondary"
        />
      </form>
      { games && queryGame ? (
        <div
          className="w-80 rounded-md absolute z-50 overflow-hidden
             flex flex-col bg-white dark:bg-galactic mx-auto"
        >
          {games?.map((game) => (
            <Link
              href={`/game/${game.slug}`}
              key={game.id}
              className="flex justify-between items-center p-3 border-b border-sulphur"
              onClick={() => setQueryGame("")}
            >{game.background_image ?
              <Image
                src={game.background_image}
                alt={`Imagen de ${game.name}`}
                height={50}
                width={50}
              /> : ''}
              <span className="text-xs">{game.name}</span>
              <IconArrowRight />
            </Link>
          ))}
        </div>
      ) : "" || error ? (
        "No se han encontra resultados 😥"
      ) : (
        ""
      )}
    </NavbarItem>
  );
}

export default InputSearchGames;
