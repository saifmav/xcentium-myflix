"use client";

import Image from "next/image";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchMovieById } from "@/utils/api";

type MovieDetailsType = {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Plot: string;
  Language: string;
  imdbVotes: string;
  Released: string;
  Genre: string;
  Director: string;
  Actors: string;
  Awards: string;
};

type MovieDetailsProps = {
  id: string;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;

      try {
        const data: MovieDetailsType = await fetchMovieById({movieId: id});
        setMovieDetails(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full relative font-[Bebas Neue] text-white">
      <div className="relative w-full h-[540px] max-[600px]:h-[500px] border-b-4 border-border-bottom">
        {movieDetails.Poster && (
          <Image src={movieDetails.Poster} width={500} height={750} alt={movieDetails.Title} className="w-full h-full object-cover object-top" />
        )}
        <div className="bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full" />
        <div className="bg-gradient-to-tr absolute top-0 left-0 from-black to-transparent w-full h-full" />
        <Header />
        <div className="absolute top-36 max-[600px]:top-44 max-[400px]:top-32 max-[310px]:top-24 left-0 w-full">
          <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-4">
            <div className="flex-grow max-w-2xl max-[960px]:max-w-xl max-[600px]:max-w-lg w-full space-y-4">
              <div className="flex items-center flex-wrap gap-4 text-xs font-medium max-[600px]:text-[0.6rem]">
                {movieDetails?.Genre?.split(", ").map((genre, index) => (
                  <span key={index}>{genre}</span>
                ))}
              </div>
              <h1 className="text-4xl max-[960px]:text-3xl max-[600px]:text-lg font-bold tracking-wider">{movieDetails.Title}</h1>
              <p className="max-[600px]:text-[0.6rem]">{movieDetails.Plot}</p>
              <div className="flex items-center gap-4 text-xs font-medium max-[600px]:text-[0.6rem]">
                <span>Director: {movieDetails?.Director}</span>
                <span>|</span>
                <span>Actors: {movieDetails?.Actors}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium max-[600px]:text-[0.6rem]">
                <span>Language: {movieDetails?.Language}</span>
                <span>|</span>
                <span>Released: {movieDetails?.Released}</span>
                <span>|</span>
                <span>IMDb Rating: {movieDetails?.imdbRating} / 10</span>
              </div>
            </div>
            <div className="max-[800px]:hidden">
              {movieDetails?.Poster && (
                <Image src={movieDetails?.Poster} alt={movieDetails?.Title} width={180} height={200} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
