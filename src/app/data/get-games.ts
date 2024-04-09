"use client"
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchAllGames, fetchGamesBySearch } from './fetch-data';
import { useState } from "react";

export function useGetGamesBySearch(search :string) {

  const { data: games, error } = useQuery({
    queryKey: ["games", search],
    queryFn: async () => fetchGamesBySearch(search),
    refetchOnWindowFocus: false,
    enabled: !!search,
  });
  
  return {
    games,
    error
  }
}

export function useGetAllGames(filterQuery: string) {
  const [page, setPage] = useState(1);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["games",filterQuery, page],
    queryFn: () => fetchAllGames(filterQuery, page),
    refetchOnWindowFocus: false,
    enabled: !!filterQuery,
    placeholderData: keepPreviousData
  });

  return {
    data,
    refetch,
    isFetching,
    page,
    setPage
  };
}


