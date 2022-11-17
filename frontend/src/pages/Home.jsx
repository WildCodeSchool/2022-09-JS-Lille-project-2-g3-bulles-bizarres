import Carousel from "@components/Carousel/Carousel";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";

export default function Home() {
  return (
    <div className="layout">
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
    </div>
  );
}
