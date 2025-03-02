import { useEffect, useState } from "react";
import supabase from "../../Utils/Supabase/supabaseClient.js";
import './ThreeRandom.scss';

export const ThreeRandom = () => {
  const [randomData, setRandomData] = useState([]);
  
  const getRandomData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("posters")
        .select("id, name, image_url");
      if (error) {
        console.error("Error fetching ThreeRandom", error);
      } else {
        const shuffled = data.sort(() => Math.random() - 0.5);
        setRandomData(shuffled.slice(0, 3));
      }
    }
  };

  useEffect(() => {
    getRandomData();
  }, []);

  if (randomData.length < 3) {
    return null; 
  }

  return (
    <section className="mikkel-ting">
      <figure className="figure-left"
        style={{ backgroundImage: `url(${randomData[0].image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', }} 
        aria-label={randomData[0].name}>
        <div className="randomSection">
          <h2>{randomData[0].name}</h2>
           <button className="randomButton">See More</button>
        </div>
      </figure>
      <div id="div-right">
        <figure className="figure-right" 
          style={{ backgroundImage: `url(${randomData[1].image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', }} 
          aria-label={randomData[1].name}>
          <div className="randomSection">
            <h2>{randomData[1].name}</h2>
            <button className="randomButton">See More</button>
          </div>
        </figure>
        <figure className="figure-right" 
          style={{ backgroundImage: `url(${randomData[2].image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', }} 
          aria-label={randomData[2].name}>
          <div className="randomSection">
            <h2>{randomData[2].name}</h2>
            <button className="randomButton">See More</button>
          </div>
        </figure>
      </div>
    </section>
  );  
};
