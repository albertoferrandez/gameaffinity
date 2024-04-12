"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useGameFiltered } from '../context/context';
import { request } from '../constants/request';

function OrderFilterDesktop() {

  const { setPage, page, setFilterByOrder } = useGameFiltered()
  const [order, setOrder] = useState<keyof typeof request>("best-games");

  const handleOrder = () => {
    if (order !== undefined) {
      setFilterByOrder(request[order].fetchUrl);
      if(page === 1) {
        return
      } else {
        setPage(1)
      }
    }
  };

  useEffect(() => {
    handleOrder()
  }, [order])

  return (
    <>
      <div className="md:flex flex-row gap-2 p-4 hidden">
        <Button
          id="best-games"
          className={`button-filters
        ${order === "best-games" ? "active" : ""}`}
          onClick={() => setOrder("best-games")}
        >
          Mejor valoración
        </Button>
        <Button
          className={`button-filters 
        ${order === "worst-games" ? "active" : ""}`}
          onClick={() => setOrder("worst-games")}
        >
          Peor valoración
        </Button>
        <Button
          className={`button-filters 
        ${order === "last-games-released" ? "active" : ""}`}
          onClick={() => setOrder("last-games-released")}
        >
          Mas nuevos
        </Button>
        <Button
          className={`button-filters
        ${order === "oldest-games-released" ? "active" : ""}`}
          onClick={() => setOrder("oldest-games-released")}
        >
          Mas antiguos
        </Button>
      </div>

      <Dropdown className="block md:hidden lg:hidden bg-galactic">
        <DropdownTrigger>
          <Button variant="bordered" className="text-sulphur">
            Ordenar
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem textValue="filtro por mejor valorados">
            <Button
              id="best-games"
              className={`button-filters ${
                order === "best-games" ? "active" : ""
              }`}
              onClick={() => setOrder("best-games")}
            >
              Mejor valoración
            </Button>
          </DropdownItem>
          <DropdownItem textValue="filtro por peor valorados">
            <Button
              className={`button-filters ${
                order === "worst-games" ? "active" : ""
              }`}
              onClick={() => setOrder("worst-games")}
            >
              Peor valoración
            </Button>
          </DropdownItem>
          <DropdownItem textValue="filtro por mas nuevos">
            <Button
              className={`button-filters ${
                order === "last-games-released" ? "active" : ""
              }`}
              onClick={() => setOrder("last-games-released")}
            >
              Mas nuevos
            </Button>
          </DropdownItem>
          <DropdownItem textValue="filtro por mas antiguos">
            <Button
              className={`button-filters ${
                order === "oldest-games-released" ? "active" : ""
              }`}
              onClick={() => setOrder("oldest-games-released")}
            >
              Mas antiguos
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default OrderFilterDesktop
