import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const FirstColumn = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <div className="relative h-24 w-24 sm:h-32 sm:w-32">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover w-full rounded-md"
        sizes="{max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
        priority
      />
    </div>
  );
};
export const SecondColumn = ({
  name,
  company,
  productId,
}: {
  name: string;
  company: string;
  productId: string;
}) => {
  return (
    <div className="sm:w-48">
      <Link href={`/products/${productId}`}>
        <h3 className="capitalize font-md hover:underline">{name}</h3>
      </Link>
      <h4 className="mt-2 capitalize-text-xs">{company}</h4>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: number }) => {
  return <p className="font-medium md:ml-auto">{formatCurrency(price)}</p>;
};
