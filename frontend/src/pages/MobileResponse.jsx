import Gallery from "@components/Gallery/Gallery";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import React from "react";

export default function MobileResponse() {
  return (
    <div className="layoutGallery">
      <header className="header">
        <Logo />
        <Titre />
      </header>
      <section className="gallery">
        <Gallery />
      </section>
    </div>
  );
}
