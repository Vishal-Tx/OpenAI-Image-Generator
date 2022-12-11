import React, { useRef } from "react";
import axios from "axios";

const Form = () => {
  const url = "http://localhost:5000/openai";
  const inputref = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let selected = document.getElementById("size").value;
    console.log(selected);
    alert(inputref.current.value + selected);
    const desc = inputref.current.value;
    const response = await axios.post(`${url}/generateimage`, {
      desc,
      selected,
    });
  };
  return (
    <div className="flex justify-center items-center h-56 bg-red-400">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Describe an Image.</h1>
        <form onSubmit={handleSubmit}>
          <input
            className=" w-96 h-10 font-semibold text-xl my-4"
            ref={inputref}
          ></input>
          <select
            name="size"
            id="size"
            className="w-96 h-10 block  mb-4"
            defaultValue="medium"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
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
