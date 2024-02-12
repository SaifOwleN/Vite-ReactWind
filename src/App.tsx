import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex bg-black items-center justify-center h-screen">
      <div className="text-white bg-mandy-950 border border-mandy-600 justify-between rounded-lg h-3/4 w-1/2 ">
        <h1 className="p-4 w-full text-center text-4xl">Vite ReactWind</h1>
        <p className="text-center text-lg p-4 text-gray-200">
          Get Started with blazing fast React build using Vite and Million, and
          using tailwindcss for easy styling
        </p>
        <div className="w-full flex justify-center ">
          <img src="/vite.svg" className="w-1/4" />
        </div>
        <div className="text-8xl w-full text-center">{counter}</div>
        <div className="flex justify-center gap-10">
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
            className="hover:bg-mandy-600 transition duration-300 bg-transparent my-10 border border-mandy-600 rounded-md px-5 p-1 text-center"
          >
            Plus
          </button>
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
            className="hover:bg-mandy-600 transition duration-300 bg-transparent my-10 border border-mandy-600 rounded-md px-5 p-1 text-center"
          >
            Minus
          </button>{" "}
          <button
            onClick={() => {
              setCounter(0);
            }}
            className="hover:bg-mandy-600 transition duration-300 bg-transparent my-10 border border-mandy-600 rounded-md px-5 p-1 text-center"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
