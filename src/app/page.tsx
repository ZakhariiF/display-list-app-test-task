import Films from "./api/film.json";
import CardComponent from "./_components/Card";

export default function HomePage() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-3">
      {Films.map((film) => (
        <CardComponent
          id={film.id}
          key={film.Title}
          imageURL={film.Images[0]}
          Title={film.Title}
          date={film.Year}
        />
      ))}
    </div>
  );
}
