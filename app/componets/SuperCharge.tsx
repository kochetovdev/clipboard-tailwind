import { superChargeData } from "../_utils";

const SuperCharge = () => {
  return (
    <article>
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-paragraph mb-16">
          We have got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {superChargeData.map(({ src, title, description }) => (
            <div key={src} className="flex flex-col items-center spac-y-5">
              <img src={src} alt="blacklist" className="mb-6" />
              <h5>{title}</h5>
              <p className="max-w-md text-grayishBlue">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SuperCharge;
