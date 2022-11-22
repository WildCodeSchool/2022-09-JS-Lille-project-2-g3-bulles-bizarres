// eslint-disable import/no-unresolved
import Carousel from "@components/Carousel/Carousel";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";
import { Link } from "react-router-dom";
// eslint-enable import/no-unresolved

export default function Home() {
  return (
    <body className="homeLayout">
      <header className="header">
        <Logo />
        <Titre />
      </header>
      <section className="main">
        <Carousel />
      </section>
      <section className="searchbtn">
        <Link to="/MobileForm">
          <SearchButton />
        </Link>
      </section>
    </body>
  );
}
