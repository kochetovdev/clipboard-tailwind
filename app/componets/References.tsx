import { referenceData } from "../_utils";

const References = () => {
  return (
    <article>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        {referenceData.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </div>
    </article>
  );
};

export default References;
