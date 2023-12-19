import { featuresData } from "../_utils";

const Features = () => {
  return (
    <article>
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <img
              src="/images/image-computer.png"
              alt="computer picture"
              className="md:abolute top-0 right-[50%] mt-16"
            />
          </div>
          <div className="flex flex-col mx-auto mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            {featuresData.map(({ title, description }) => (
              <div key={title}>
                <h5>{title}</h5>
                <p className="max-w-md text-darkGrayishBlue">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Features;
