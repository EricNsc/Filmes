import React from "react";
import Header from "@/app/components/Header";
import { FaStar } from "react-icons/fa";

export default async function movie({ params }) {
  const movieID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const movie = await res.json();


  return (
    <div>
      <Header />
      <div className="flex flex-row rounded-sm overflow-hidden w-full mx-auto p-4 py-[100px] justify-center relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center rounded-sm opacity-50"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
              movie.backdrop_path || movie.poster_path
            })`,
            filter: "blur(25px)",
          }}
        ></div>

        <div className="absolute inset-0 -z-10 bg-black bg-opacity-50 rounded-sm"></div>

        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-[300px] h-auto rounded-md object-cover"
        />
        <div className="flex flex-col p-10 py-[70px] gap-4 ml-6 text-white justify-center">
          <h1
            className="text-3xl font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            {movie.title}
          </h1>
          <p
            className="text-sm text-gray-300"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            {movie.release_date}
          </p>
          <p
            className="text-sm text-gray-200 mt-2 pt-[20px] w-[600px]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            {movie.overview}
          </p>
          <div className="flex items-center">
            <FaStar
              className="text-yellow-300 mr-1"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
            />
            <span
              className="text-gray-300"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
            >
              {movie.vote_average?.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}