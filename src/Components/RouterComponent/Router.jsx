import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage";
import { AboutPage } from "../../PageComponents/AboutPageComponent/AboutPage";
import { ContactPage } from "../../PageComponents/ContactPageComponent/ContactPage";
import { PosterDetail } from '../../PageComponents/PosterDetailPage/PosterDetail.jsx';

export const Router = () => {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/posters/:id" element={<PosterDetail />} /> {/* Ville gerne have PosterDetails som et component dog kunne jeg ikke da jeg bruger useparams til at fange id fra url og tror ikke jeg kan bruge useparams fra et component?? */}
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  )
}
