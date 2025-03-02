import { useState } from 'react';
import { Main } from "../../Components/MainComponent/Main";
import "../AboutPageComponent/AboutPage.scss";
import './AboutPage.scss';

export const AboutPage = () => {
  return (
    <Main>
      <div className="about-page">
        <h1>About Nordisk Film Plakater</h1>
        <p>
          Nordisk Film Plakater is a web application designed to showcase and manage a collection of movie posters. Our goal is to provide movie enthusiasts with an engaging platform to explore and discover movie posters from various genres.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Display a list of movie posters</li>
          <li>Filter posters by genre</li>
          <li>Load more posters on demand</li>
          <li>Display a list of coming soon posters</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Supabase</li>
          <li>Sass</li>
          <li>Styled Components</li>
        </ul>
      </div>
    </Main>
  );
};
