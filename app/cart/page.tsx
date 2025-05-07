import React from "react";
import CartItemList from "@/components/cart/CartItemList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });
  const { cartItems, currentCart } = await updateCart(previousCart);
  if (cartItems.length === 0) <SectionTitle text="empty cart" />;

  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
