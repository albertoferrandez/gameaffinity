"use client";

import FiltersSidebar from "./FiltersSidebar";
import OrderFilterDesktop from "./OrderFilterDesktop";
import OrderFilterMobile from './OrderFilterMobile';

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section
      id="all-games"
      className="flex min-h-[90dvh] justify-center gap-4 mt-12"
    >
      <div className="flex">
        <FiltersSidebar />

        <main className="p-4">
          <OrderFilterDesktop />
          {children}
        </main>
      </div>
    </section>
  );
}

export default MainLayout;
