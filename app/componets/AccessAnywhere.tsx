import { accesAnywhereData } from "../_utils";

const AccessAnywhere = () => {
  const { title, paragraph } = accesAnywhereData;
  return (
    <article>
      <div className="section-container my-20">
        <h3>{title}</h3>
        <p className="section-paragraph mb-24 text-xl">{paragraph}</p>
        <img
          src="/images/image-devices.png"
          alt="devices"
          className="mx-auto"
        />
      </div>
    </article>
  );
};

export default AccessAnywhere;
