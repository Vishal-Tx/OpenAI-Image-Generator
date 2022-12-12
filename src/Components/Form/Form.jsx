import React, { useRef } from "react";

const Form = ({ getImage }) => {
  const inputref = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let selected = document.getElementById("size").value;
    const desc = inputref.current.value;
    getImage(desc, selected);
  };
  return (
    <div className="flex justify-center items-center py-8 bg-red-400 flex-wrap">
      <div className="flex flex-col items-center flex-wrap">
        <h1 className="text-4xl font-bold text-center">Describe an Image.</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="  h-10 font-semibold text-xl my-4 w-96 p-1 max-[400px]:w-60"
            ref={inputref}
            rows="4"
            required
          ></textarea>
          <select
            name="size"
            id="size"
            className=" h-10 block  mb-4 w-96 max-[400px]:w-60"
            defaultValue="medium "
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
