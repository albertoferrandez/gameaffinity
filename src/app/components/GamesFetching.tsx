import { Card, Skeleton } from "@nextui-org/react";

function GamesFetching() {
  return (
    <section className="mt-6">
      <h3></h3>

      <div className="grid grid-cols-3 gap-3 place-content-center p-4">
        {Array.from({ length: 15 }, (_, i) => (
          <Card
            className="w-[200px] h-[300px] space-y-5 p-4 dark:bg-purple-emperor bg-south"
            radius="lg"
            key={i}
          >
            <Skeleton className="rounded-lg">
              <div className="h-full rounded-lg"></div>
            </Skeleton>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default GamesFetching;
