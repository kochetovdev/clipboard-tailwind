import Link from "next/link";
import { heroData } from "../_utils";

const Hero = () => {
  const { title, paragraph, ios, mac } = heroData;
  return (
    <article>
      <div className="section-container mb-40 pt-16">
        <img src="images/logo.svg" alt="logo" className="mx-auto my-16" />
        <h3>{title}</h3>
        <p className="section-paragraph mb-10 text-2xl">{paragraph}</p>
        <div className="button-container">
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            {ios}
          </Link>
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            {mac}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Hero;
