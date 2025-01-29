"use client";

import MovieDetails from "@/app/component/MovieDetails";
import { useParams } from "next/navigation";
import React from "react";

const MoviePage = () => {
    const params = useParams<{ id: string }>(); // Type params explicitly
    const movieId = params?.id; // Ensure `id` exists

    if (!movieId) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Movie ID not found</p>
            </div>
        );
    }

    return (
        <div>
            <MovieDetails id={movieId} />;
        </div>
    )
};

export default MoviePage;
