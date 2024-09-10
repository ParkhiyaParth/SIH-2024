const AboutUs = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">About Us</h2>
        {/* <p className="text-gray-500">MedTech</p> */}
      </div>
      <div className="grid grid-cols-3 gap-8 px-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow shadow-md rounded-md transition-shadow focus-within:shadow-lg">
              <p className="text-xl italic">Quote</p>
              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                />
                <div>
                  <p className="text-gray-700 font-bold">Title</p>
                  <p className="text-gray-500">Description</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AboutUs;
