import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../Utils/Supabase/supabaseClient.js";
import "../PosterListComponent/PosterList.scss";

export const PosterList = ({ selectedGenre }) => {
  const [PosterData, setPosterData] = useState([]); 
  const [limit, setLimit] = useState(20); 

  const getData = async () => {
    let query = supabase
      .from("posters")
      .select("id,name,image_url")
      .limit(limit);

    if (selectedGenre) {
      query = supabase
        .from("genre_poster_rel")
        .select("posters(id,name,image_url)")
        .eq("genre_id", selectedGenre)
        .limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching posters", error);
    } else {
      const posters = selectedGenre ? data.map((rel) => rel.posters) : data;
      setPosterData(posters);
    }
  };

  useEffect(() => {
    getData();
  }, [limit, selectedGenre]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 40); 
  };

  return (
    <div>
      <ul className="posterUl">
        {PosterData.map((Poster) => (
          <figure key={Poster.id} >
            <Link to={`/Posters/${Poster.id}`}>
              <img src={Poster.image_url} alt="Poster image" />
            </Link>
            <figcaption>
              <p>{Poster.name}</p>
              <br />
              <Link id="a" to={`/Posters/${Poster.id}`}>
                Add To Cart
              </Link>
            </figcaption>
          </figure>
        ))}
      </ul>
      
      <button onClick={loadMore} className="load-more">
        Load More
      </button>
    </div>
  );
};
