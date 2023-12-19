import AccessAnywhere from "./componets/AccessAnywhere";
import Bottom from "./componets/Bottom";
import Features from "./componets/Features";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import References from "./componets/References";
import Snipents from "./componets/Snipents";
import SuperCharge from "./componets/SuperCharge";

export default function Home() {
  return (
    <article>
      <Hero />
      <Snipents />
      <Features />
      <AccessAnywhere />
      <SuperCharge />
      <References />
      <Bottom />
      <Footer />
    </article>
  );
}
