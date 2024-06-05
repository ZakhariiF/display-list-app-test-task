import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default function CardComponent({
  imageURL,
  date,
  Title,
  id,
}: {
  imageURL: string | undefined;
  date: string | undefined;
  Title: string | undefined;
  id: number;
}) {
  return (
    <Link href={`/movie/${id}`}>
      <Card className="py-4">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <p className="text-tiny font-bold uppercase">Movie</p>
          <small className="text-default-500">{date}</small>
          <h4 className="text-large font-bold">{Title}</h4>
        </CardHeader>
        <CardBody className="overflow-auto rounded-xl ">
          <Image
            alt="Card background"
            className="min-h-[12rem] object-cover"
            src={
              imageURL ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL-nM5H8eZfM19UQbIgDn0XwOUj1ByAyV4Q&s"
            }
            width={270}
            height={300}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
