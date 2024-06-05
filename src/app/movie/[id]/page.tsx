import Image from "next/image";

import Films from "~/app/api/film.json";
export default function Movie({ params }: { params: { id: number } }) {
  console.log(params);
  const film = Films.find((film) => film.id === Number(params.id));
  console.log(film);

  return (
    <div className="flex flex-col items-center justify-start py-3">
      <div className="w-full max-w-[30em]">
        <h1 className="w-full px-2 text-3xl font-bold">{film?.Title}</h1>
        <p className="w-full px-2 font-light ">{film?.Year}</p>
        <p className="w-full px-2">{film?.Plot}</p>
      </div>

      <Image
        src={
          film?.Images[0] ??
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL-nM5H8eZfM19UQbIgDn0XwOUj1ByAyV4Q&s"
        }
        alt={film?.Title ?? "Movie Poster"}
        width={350}
        height={600}
        className="mx-2 w-full max-w-[30em] rounded-xl"
      />
    </div>
  );
}
