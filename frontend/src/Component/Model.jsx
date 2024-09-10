import { useState, useEffect } from "react";

const Model = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "Who won the latest Nobel Peace Prize?",
    "Where does pizza come from?",
    "How do you make a BLT sandwich?",
  ];

  
  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question!");
      return;
    }

    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
      
      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          part: value,
        },
        {
          role: "model",
          part: data,
        },
      ]);
      setValue("");
    } catch (e) {
      console.error(e);
      setError("Something went wrong! Please try again later.");
    }
  };

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  // Auto clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="app flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-600 p-4">
      <p className="text-sm font-light mb-4 flex items-center">
        What do you want to know?
        <button
          className="surprise bg-gray-200 hover:bg-gray-300 transition-colors text-black font-semibold rounded px-4 py-1 ml-2 focus:outline-none focus:ring focus:ring-gray-300 disabled:opacity-50"
          onClick={surprise}
          disabled={!chatHistory.length}
        >
          Surprise me!
        </button>
      </p>

      <div className="input-container flex w-full max-w-xl border border-gray-300 shadow-md rounded-md transition-shadow focus-within:shadow-lg">
        <input
          value={value}
          placeholder="When is Christmas...?"
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-3 text-sm border-none outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-150"
        />
        {!error && (
          <button
            onClick={getResponse}
            className="min-w-[20%] border-l border-gray-300 bg-white text-gray-600 font-bold p-2 hover:text-black transition-all mt-2"
          >
            Ask Me!
          </button>
        )}
        {error && (
          <button
            onClick={clear}
            className="min-w-[10%] border-l border-gray-300 bg-red-100 text-red-600 font-bold p-2 hover:bg-red-200 transition-all mt-2"
          >
            Clear
          </button>
        )}
      </div>

      {error && <p className="text-red-500 mt-2 transition-opacity duration-500 ease-in-out">{error}</p>}

      <div className="search-res mt-4 w-full max-w-xl">
        {chatHistory.map((chatItem, _index) => (
          <div
            key={_index}
            className={`answer bg-white border border-gray-300 p-3 rounded-md my-2 transition-transform duration-300 ${
              chatItem.role === "model" ? "animate-fadeIn" : "animate-bounce"
            }`}
          >
            <p className="text-sm">
              <span className="font-semibold">{chatItem.role}</span>: {chatItem.part}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
