"use client";
import { Button, Dropdown, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useGameFiltered } from "../context/context";
import { request } from "../constants/request";

function OrderFilterMobile() {
  const { setPage, page, setFilterByOrder } = useGameFiltered();
  const [order, setOrder] = useState<keyof typeof request>("best-games");

  const handleOrder = () => {
    if (order !== undefined) {
      setFilterByOrder(request[order].fetchUrl);
      if (page === 1) {
        return;
      } else {
        setPage(1);
      }
    }
  };

  useEffect(() => {
    handleOrder();
  }, [order]);

  return (
    <div className="block md:hidden lg:hidden">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Ordenar</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
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
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default OrderFilterMobile;
