import React, { useState } from "react";
import LanguageSelector from "./languageSelector"; // Import the LanguageSelector component

const DiseaseIdentification = () => {
  const [photo, setPhoto] = useState(null); // Initialize as null
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en"); // Default language is English

  const url = "/api/DIS/predict/";

  const onClick = () => {
    if (!photo) {
      alert("Please upload an image before submitting.");
      return;
    }

    let form = new FormData();
    form.append("file", photo);
    form.append("dest", lang); // Append selected language to the form data

    setLoad(true);
    fetch(url, {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrediction(data.prediction || "No prediction received");
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoad(false);
      });
  };

  return (
    <>
      <section className="disease-identification">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
            </p>

            {/* Language Selector */}
            <div className="my-8 w-3/5">
              <LanguageSelector onLanguageSelect={setLang} />
            </div>

            {/* File Input */}
            <p className="font-medium text-lg">Select Image:</p>
            <div className="m-6">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPhoto(file);
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={onClick}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 transition duration-150"
            >
              Predict Disease
            </button>

            {/* Uploaded Image Preview */}
            {photo && (
              <>
                <p className="font-medium mt-6">Uploaded Image:</p>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded preview"
                  className="my-4 max-w-xs rounded-md shadow"
                />
              </>
            )}
          </div>
        </div>

        {/* Loading or Prediction Result */}
        <div>
          {load ? (
            <div className="grid place-items-center my-14">
              <p className="text-xl font-medium text-gray-600">Processing...</p>
            </div>
          ) : prediction ? (
            <div className="grid place-items-center my-14 text-center">
              <p className="font-bold my-3 text-lg">Disease Predicted:</p>
              <p className="text-green-700 text-lg">{prediction}</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default DiseaseIdentification;
