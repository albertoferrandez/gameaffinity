"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { GamesProvider } from "./context/context";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GamesProvider>
        <NextUIProvider>
          <ReactQueryDevtools />
          {children}
        </NextUIProvider>
      </GamesProvider>
    </QueryClientProvider>
  );
}
