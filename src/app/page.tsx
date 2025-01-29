"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMoviesData } from "@/utils/api";
import Header from "./component/Header";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Button from "./component/Button";
import Row from "./component/Row";

type Movie = {
  id: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Plot: string;
  Language: string;
  imdbVotes: string;
  Released: string;
};

const Page = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [heroMovie, setHeroMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: Movie[] = await getMoviesData();
        setMovies(moviesData);
        setHeroMovie(moviesData[3]); // Set the first movie as the hero movie
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full relative font-[Bebas Neue] text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[540px] max-[600px]:h-[500px] border-b-4 border-border-bottom">
        {!!heroMovie && (
          <>
            <Image
              fill
              src={heroMovie.Poster}
              className="object-cover"
              alt="movie poster"
            />
            <div className="bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full" />
            <div className="bg-gradient-to-tr absolute top-0 left-0 from-black to-transparent w-full h-full" />
            <Header />
            <div className="absolute top-36 max-[600px]:top-44 left-0 w-full">
              <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-4">
                <div className="flex-grow max-w-2xl max-[960px]:max-w-xl max-[600px]:max-w-lg w-full space-y-4">
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <span>IMDb Rating:{heroMovie.imdbRating} / 10</span>
                    </div>
                    <span className="font-medium">|</span>
                    <span>{heroMovie.Year}</span>
                    <span className="font-medium">|</span>
                    <span>{heroMovie.Language}</span>
                  </div>
                  <h1 className="text-4xl max-[960px]:text-3xl max-[600px]:text-lg font-bold tracking-wider">
                    {heroMovie.Title}
                  </h1>
                  <p className="max-[600px]:text-[0.6rem]">{heroMovie.Plot}</p>
                  <div className="flex items-center gap-3">
                      <Button
                        label="More Info"
                        icon={<IoMdInformationCircleOutline />}
                        href={`/movie/${heroMovie.imdbID}`}
                        variant="secondary"
                      />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Movie Grid Section */}
      <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511] myflix-center ">
        <section className="container pb-32">
          <Row title="Top Rated" movies={movies} />
        </section>
      </main> 
      <footer className="text-center bg-gray-800 text-white py-4 text-sm">
  Copyright © 2025
</footer>
    </div>
  );
};

export default Page;
