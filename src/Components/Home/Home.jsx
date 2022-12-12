import React, { useState } from "react";
import { Form, ImageArea } from "../index";
import axios from "axios";
import ReactLoading from "react-loading";
import "./Home.css";

const Home = () => {
  const url = "http://localhost:5000/openai";
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getImage = async (desc, selected) => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/generateimage`, {
        desc,
        selected,
      });
      console.log(response);
      const {
        data: { data },
      } = response;
      setImage(data);
      setLoading(false);
    } catch (err) {
      if (err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("There was an error generating the image!");
      }
      setLoading(false);
    }
  };

  return (
    <>
      {/* {!loading && (
        <div
          className="absolute backdrop-brightness-50 w-full mx-auto"
          style={{ height: "20rem" }}
        >
          <ReactLoading
            type="spin"
            color="black"
            height={60}
            width={60}
            className="mx-auto mt-80 "
          />
        </div>
      )} */}
      {loading && <div className="loading">Loading&#8230;</div>}

      <div className="content">
        <Form getImage={getImage} />
        <ImageArea image={image} error={error} />
      </div>
    </>
  );
};

export default Home;
