import Link from "next/link";
import { bottomData } from "../_utils";

const Bottom = () => {
  const { title, paragraph, ios, mac } = bottomData;
  return (
    <article>
      <div className="section-container my-20">
        <h3>{title}</h3>
        <p className="section-paragraph mb-10 text-xl">{paragraph}</p>
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

export default Bottom;
