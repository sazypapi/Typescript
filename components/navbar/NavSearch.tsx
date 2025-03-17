import React from "react";
import { Input } from "../ui/input";

function NavSearch() {
  return (
    <div>
      <Input
        type="search"
        placeholder="search products..."
        className="max-w-xs dark:bg:muted"
      />
    </div>
  );
}

export default NavSearch;
