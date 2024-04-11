import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchAllGames } from "./data/fetch-data";
import HomePage from "./components/HomePage";
import MainLayout from './components/MainLayout';

export default async function Home() {

  const queryClient = new QueryClient()

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </HydrationBoundary>
    </>
  )
}
