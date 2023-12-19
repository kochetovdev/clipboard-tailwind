import { snippetsData } from "../_utils";

const Snipents = () => {
  const { title, paragraph } = snippetsData;
  return (
    <article>
      <div className="section-container my-20">
        <h3>{title}</h3>
        <p className="section-paragraph mb-24 text-xl">{paragraph}</p>
      </div>
    </article>
  );
};

export default Snipents;
