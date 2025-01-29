import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Card from "./Card";

type Movie = {
    imdbID: string;
    Poster?: any;
    Title?: any;
    imdbVotes: string;
    Released: string;
}

type RowProps = {
    title: string;
    movies: Movie[];
};

const Row: React.FC<RowProps> = ({ title, movies }) => {
    const rowRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (direction: "left" | "right") => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="space-y-0.5 md:space-y-2">
            <h2 className="w-56 mt-6 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>

            <div className="group relative md:ml-2">
                <BiChevronLeft
                    className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                    onClick={() => handleClick("left")}
                />
                <div
                    className="flex flex-col gap-2 md:flex-row md:gap-4 overflow-x-auto scrollbar-hide p-2"
                    ref={rowRef}
                >
                    {movies.map((movie) => (
                        <Card key={movie.imdbID} movie={movie} />
                    ))}
                </div>


                <BiChevronRight
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default Row;
