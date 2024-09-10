import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignInClick = () => {
      navigate('/sign-in'); // Redirect to the Sign In page
    };
    return (
        <section className='p-8'>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-white py-16 px-2 pl-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-600 mb-4 text-4xl font-bold animate-blink">
                  Monitor Your Medications Seamlessly
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Track your medications, manage prescriptions, and ensure you never compromise the quality  with our easy-to-use platform.
                </p>
                <button className="px-6 py-3 text-white rounded-full shadow  hover:text-black" onClick={handleSignInClick}>
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="./src/assets/homeimage1.jpg" 
                  alt="Medicine Monitor Illustration" 
                  className="mx-auto rounded-lg shadow-2xl w-auto" 
                />
              </div>
            </div>
          </section>
    
          {/* Dashboard Summary */}
           <section className="container mx-auto py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dashboard Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <img src="https://via.placeholder.com/100" alt="Medicine Icon" className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">Total Medicines</h4>
                <p className="text-4xl font-bold text-gray-900">25</p>
              </div> 
    
              {/* Card 2 */}
               <div className="bg-white p-6 rounded-lg shadow text-center">
                <img src="https://via.placeholder.com/100" alt="Low Stock Icon" className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">Low Stock Medicines</h4>
                <p className="text-4xl font-bold text-red-500">4</p>
              </div> 
    
              {/* Card 3 */}
               <div className="bg-white p-6 rounded-lg shadow text-center">
                <img src="https://via.placeholder.com/100" alt="Upcoming Refills Icon" className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">Upcoming Refills</h4>
                <p className="text-4xl font-bold text-gray-900">7</p>
              </div>
            </div>
          </section> 
    
          {/* Manage Prescriptions */}
          { <section className="container mx-auto py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Manage Your Prescriptions</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-indigo-600 mb-4">Active Prescriptions</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-lg">Medicine A</span>
                  <button className="px-4 py-2">
                    Refill
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-lg">Medicine B</span>
                  <button className="px-4 py-2">
                    Refill
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-lg">Medicine C</span>
                  <button className="px-4 py-2">
                    Refill
                  </button>
                </li>
              </ul>
            </div>
          </section> }
        </div>
        </section>
      );
}

export default Home
