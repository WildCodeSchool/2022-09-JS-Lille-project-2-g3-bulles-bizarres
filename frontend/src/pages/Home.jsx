// eslint-disable-next-line import/no-unresolved
import Carousel from "@components/Carousel/Carousel";
// eslint-disable-next-line import/no-unresolved
import Logo from "@components/Header/Logo/Logo";
// eslint-disable-next-line import/no-unresolved
import Titre from "@components/Header/Titre/Titre";
// eslint-disable-next-line import/no-unresolved
import SearchButton from "@components/SearchButton";
import "./home.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <Logo />
        <Titre />
      </header>
      <section className="main">
        <Carousel />
      </section>
      <div id="searchbtn">
        <SearchButton />
      </div>
    </>
  );
}
