import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section className="flex flex-col items-center justify-center py-48 bg-gray-100">
      <div className="w-5/12 float-left">
        <h1 className="text-4xl font-bold">
          Explore Our Own AI MedMitra Model
        </h1>
        <p className="text-lg text-gray-500 py-2 ">
          The MedMitra model is designed to enhance the quality assurance and
          monitoring of medicines and consumables through a comprehensive online
          platform. This model leverages technology to ensure that medical
          products meet the required standards and are safe for use.
        </p>
      </div>
      <div className="mt-6 space-x-4">
        <Link to={"/Model"}>
          <button className="px-4 py-2 bg-gray-400 border rounded ">
            Get Started ➡
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Explore;
