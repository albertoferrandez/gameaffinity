"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useGetGamesBySearch } from "../data/get-games";
import debounce from "just-debounce-it";
import InputSearchGames from "./InputSearchGames";

function Header() {
  const [queryGame, setQueryGame] = useState<string>("");
  const { games, error } = useGetGamesBySearch(queryGame);

  const searchGame = useCallback(
    debounce((searchValue: string) => {
      setQueryGame(searchValue);
    }, 800), 
    [queryGame] 
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
          <Link href={"/"}>
           <p className="font-bold text-2xl text-sulphur">gameaffinity</p>
          </Link>
        </NavbarBrand>
    
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <InputSearchGames
          handleSearchInputChange={handleSearchInputChange}
          setQueryGame={setQueryGame}
          games={games}
          queryGame={queryGame}
          error={error}
        />
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
