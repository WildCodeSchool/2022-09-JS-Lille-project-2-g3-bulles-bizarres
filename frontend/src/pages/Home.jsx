// eslint-disable import/no-unresolved
import Carousel from "@components/Carousel/Carousel";
import Logo from "@components/Header/Logo/Logo";
import Titre from "@components/Header/Titre/Titre";
import SearchButton from "@components/SearchButton";
// eslint-enable import/no-unresolved

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
      <div className="searchbtn">
        <SearchButton />
      </div>
    </>
  );
}
