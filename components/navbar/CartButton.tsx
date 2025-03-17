import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
async function CartButton() {
  const numItemsInCart = 9;
  return (
    <div>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="flex justify-center items-center relative"
      >
        <Link href="/cart">
          <FaShoppingCart />
          <span className="absolute -right-3 -top-3 bg-black text-white rounded-full h-6 w-6 items-center flex justify-center text-xs ">
            {numItemsInCart}
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;
