import Hero from "../Components/Hero";
import BurgerMenu from "../Components/BurgerMenu";
import Infinity from "../Components/Infinity";
import Experience from "../Components/Experience";
import Testimonials from "../Components/Testimonials";
import "../App.css"

export default function Home() {
  return (
    <>
      <Hero />
      <BurgerMenu />
      <Infinity />
      <Experience />
      <Testimonials />
      <div className="grid-divider"></div>
    </>
  );
}
