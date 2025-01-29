import Image from "next/image";
import Link from "next/link";
import React from "react";
import imdb from "@/assets/icons/imdb.png"

interface Movie {
  imdbID: string;
  backdrop_path?: string;
  Poster?: any;
  Title?: any;
  imdbVotes: string;
  Released: string;
}

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
      <Link
        href={`/movie/${movie.imdbID}`}
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 py-2"
      >
        <Image
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-sm object-cover md:rounded"
          fill
        />
        <div className="w-full px-1 flex items-center gap-2">
          <span className="text-xs font-semibold">{movie?.imdbVotes}</span>
        </div>
        <h3 className="text-base font-semibold w-full px-1">
          {movie?.Title?.length > 12 ? `${movie?.Title.slice(0, 18)}...` : movie?.Title}
        </h3>
        <p className="text-xs font-medium w-full px-1 text-gray-500">{movie?.Released}</p>
      </Link>
  );
};

export default Card;
