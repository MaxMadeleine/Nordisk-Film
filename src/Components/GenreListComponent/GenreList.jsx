import { useEffect, useState } from "react";
import supabase from "../../Utils/Supabase/supabaseClient.js";

export const GenreList = () => {
  // State til at gemme genre data
  const [genreData, setGenreData] = useState([]);

  // Funktion til at hente data fra Supabase
  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("genres")
        .select("id,title");
      if (error) {
        console.error("Error fetching genres", error);
      } else {
        setGenreData(data);
      }
    }
  };

  // useEffect til sideeffekter og styring af render
  useEffect(() => {
    getData();
  }, [setGenreData, supabase]);

  // Returnerer en liste af genrer
  return (
    <ul>
      {genreData &&
        genreData.map((genre) => {
          return (
            <li key={genre.id}>{genre.title}</li>
          );
        })
      }
    </ul>
  );
};