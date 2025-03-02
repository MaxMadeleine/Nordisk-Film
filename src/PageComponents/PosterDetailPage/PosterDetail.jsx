import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import supabase from '../../Utils/Supabase/supabaseClient.js';
import './PosterDetail.scss';

export const PosterDetail = () => {
  const { id } = useParams();
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const fetchPoster = async () => {
      const { data, error } = await supabase
        .from('posters')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching poster details', error);
      } else {
        setPoster(data);
      }
    };

    fetchPoster();
  }, [id]);

  if (!poster) {
    return <div>Loading...</div>;
  }

  return (
    <figure className="detailFigure">
      <img src={poster.image_url} alt={poster.name} />
      <figcaption >
        <h1>{poster.name}</h1>
        <div className='description' dangerouslySetInnerHTML={{ __html: poster.description }} />
        <p className='price'>{poster.price} DKK</p>

        <div className='posterDimensions'>
          <h2>Poster dimensions:</h2>
          <div className='dimensions'>
            <p>Height: {poster.height} cm</p>
            <p>Width: {poster.width} cm</p>
          </div>
        </div>
        <p className='stock'>Posters in stock: {poster.stock}</p>

        <Link id="a" to="/cart">
          Add To Cart
        </Link>
      </figcaption>
    </figure>
  );
};