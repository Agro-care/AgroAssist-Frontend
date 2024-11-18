import React, { useState } from "react";

const DiseaseIdentification = () => {
  const [photo, setPhoto] = useState(null); // Initialize as null
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  let url = "http://137.184.139.164/api/DIS/predict/";

  function onClick() {
    if (!photo) {
      alert("Please upload an image before submitting.");
      return;
    }

    let form = new FormData();
    form.append("file", photo);

    setLoad(true);
    fetch(url, {
      method: "post",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrediction(data.prediction);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
      });
  }
  console.log(lang)

  return (
    <>
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center my-14">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
              <br />
            </p>
            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language, default language is English</div>
              <div className="ml-16">
                <button
                  onClick={() => setLang("en")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  English
                </button>
              </div>
              <div className="ml-16">
                <button
                  onClick={() => setLang("hi")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Hindi
                </button>
              </div>
              <div className="ml-16">
                <button
                  onClick={() => setLang("es")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Telugu
                </button>
              </div>
            </div>
            <p className="title">Select Image:</p>
            <div className="m-6">
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPhoto(file); // Set the file directly
                }}
              />
            </div>
            <button
              onClick={onClick}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Upload
            </button>

            <p className="title" style={{ marginTop: 30 }}>
              Uploaded Image:
            </p>
            {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded preview"
                className="my-4 max-w-xs"
              />
            )}
          </div>
        </div>

        <div>
          {load ? (
            <div className="grid place-items-center my-14">Loading...</div>
          ) : prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center">
              <p className="font-bold my-3">Disease From Image Predicted:</p>
              {prediction}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default DiseaseIdentification;
