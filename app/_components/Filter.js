"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams(); // 2
  const router = useRouter(); // 4
  const pathname = usePathname(); // 5

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); // 1

    params.set("capacity", filter); // 3
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // 6
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button filter="large" active={activeFilter} handleFilter={handleFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ children, filter, activeFilter, handleFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
