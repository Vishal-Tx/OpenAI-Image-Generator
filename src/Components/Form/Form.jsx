import React from "react";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-56 bg-red-400">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Describe an Image.</h1>
        <form onSubmit={handleSubmit}>
          <input className=" w-96 h-10 font-semibold text-xl my-4"></input>
          <select name="size" id="size" className="w-96 h-10 block  mb-4">
            <option value="small">Small</option>
            <option value="medium" selected>
              Medium
            </option>
            <option value="large">Large</option>
          </select>
          <button
            type="submit"
            className="block mx-auto bg-black text-white px-4 py-3 w-28 rounded hover:bg-gray-800"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
