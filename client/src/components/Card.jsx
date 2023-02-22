import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Card title</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          lorem justo, vel malesuada nunc dictum eget.
        </p>
      </div>
      <div className="p-4 bg-gray-100">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </div>
  );
};

export default Card;
