"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
} from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useGetGamesBySearch } from "../data/get-games";
import debounce from "just-debounce-it";

function Header() {
  const [queryGame, setQueryGame] = useState<string>("");
  const { games, error } = useGetGamesBySearch(queryGame);

  const searchGame = useCallback(
    debounce((searchValue: string) => {
      setQueryGame(searchValue);
    }, 800), 
    [] 
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    
    const searchValue = event.target.value.toLowerCase();
    searchGame(searchValue);
  };

  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        base: "bg-pecan dark:bg-shadow-planet flex",
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-2xl text-sulphur">gameaffinity</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          {games && queryGame ? (
            <div
              className="w-full rounded-md absolute z-50 overflow-hidden
             flex flex-col bg-white dark:bg-slate-900"
            >
              {games?.map((game) => (
                <span key={game.id}>{game.name}</span>
              ))}
            </div>
          ) : "" || error ? (
            "No se han encontra resultados 😥"
          ) : (
            ""
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="dark:text-sulphur text-shadow-planet">
            Iniciar Sesión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            className="dark:text-sulphur text-shadow-planet"
            href="#"
            variant="flat"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
