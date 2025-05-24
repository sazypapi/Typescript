"use client";
import React from "react";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);
  // useEffect(() => {
  //   if (!searchParams.get("search")) {
  //     setSearch("");
  //   }
  // }, [searchParams.get("search")]);
  const searchValue = searchParams.get("search");

  useEffect(() => {
  if (!searchValue) {
    setSearch("");
  }
}, [searchValue]);
  return (
    <div>
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        type="search"
        placeholder="search products..."
        className="max-w-xs dark:bg:muted"
      />
    </div>
  );
}

export default NavSearch;
