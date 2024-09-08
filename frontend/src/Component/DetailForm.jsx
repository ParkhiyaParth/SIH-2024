import React, { useState } from 'react';

const DetailForm = () => {
  const [formData, setFormData] = useState({
    subCategory: '',
    productName: '',
    saltComposition: '',
    productManufacturer: '',
    medicineDescription: '',
    drugInteractions: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 py-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Medicine Detail Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="subCategory">
              Sub Category
            </label>
            <input
              type="text"
              name="subCategory"
              id="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="saltComposition">
              Salt Composition
            </label>
            <input
              type="text"
              name="saltComposition"
              id="saltComposition"
              value={formData.saltComposition}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="productManufacturer">
              Product Manufacturer
            </label>
            <input
              type="text"
              name="productManufacturer"
              id="productManufacturer"
              value={formData.productManufacturer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="medicineDescription">
              Medicine Description
            </label>
            <textarea
              name="medicineDescription"
              id="medicineDescription"
              value={formData.medicineDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="drugInteractions">
              Drug Interactions
            </label>
            <textarea
              name="drugInteractions"
              id="drugInteractions"
              value={formData.drugInteractions}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:text-black  border"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailForm;

