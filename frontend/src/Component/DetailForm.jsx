import { useEffect, useState } from "react";
import { chatSession } from "./AiModel.jsx"; // Ensure the import is correct

const DetailForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    subCategory: "",
    saltComposition: "",
    productManufacturer: "",
    medicineDescription: "",
    drugInteractions: "",
  });
  const [aiResponse, setAiResponse] = useState(""); // New state for AI response
  const [loading, setLoading] = useState(false); // Loading state for AI response

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData); // To monitor the form data state
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const PROMPT = `I am currently experiencing symptoms related to {medicineDescription}. I have come across a product called {productName} and would like to know if it is suitable for me to take. Please provide a concise, two-to-three-line description of this medication and whether it is recommended for my symptoms, based solely on the information provided. Please do not include any disclaimers or warnings about the risks of self-medication; I understand the importance of consulting a healthcare professional but am seeking purely informational guidance at this moment please do not write and you should always consult a doctor before taking any medication.`;

    const FINAL_PROMPT = PROMPT.replace(
      "{productName}",
      formData.productName
    ).replace("{medicineDescription}", formData.medicineDescription);

    setLoading(true); // Start loading
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);

      const aiText =
        result?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI";
      setAiResponse(aiText); // Set the AI response
      console.log("Chatbot Response:", result);
    } catch (error) {
      console.error("Error during chat session:", error);
      setAiResponse("Error: Unable to fetch response");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 py-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Medicine Detail Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          {[
            { label: "Product Name", name: "productName", type: "text" },
            { label: "Sub Category", name: "subCategory", type: "text" },
            {
              label: "Salt Composition",
              name: "saltComposition",
              type: "text",
            },
            {
              label: "Product Manufacturer",
              name: "productManufacturer",
              type: "text",
            },
            {
              label: "Medicine Description",
              name: "medicineDescription",
              type: "textarea",
            },
            {
              label: "Drug Interactions",
              name: "drugInteractions",
              type: "textarea",
            },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor={name}
              >
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={(e) => handleInputChange(name, e.target.value)}
                  className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={(e) => handleInputChange(name, e.target.value)}
                  className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full text-white font-semibold py-2 bg-purple-500 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>

        {/* Display AI Response after submission */}
        {loading ? (
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-700">
              Loading AI Response...
            </h3>
          </div>
        ) : aiResponse ? (
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700">
              AI Response:
            </h3>
            <p className="text-gray-800">{aiResponse}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DetailForm;


