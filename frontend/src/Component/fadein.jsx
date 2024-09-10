import React, { useEffect, useState } from 'react';


const Fade = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the fade-in animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Website</h1>
      <p className="text-center mt-4">
        This content will fade in when the page loads.
      </p>
    </div>
  );
};

export default Fade;
