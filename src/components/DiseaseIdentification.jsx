import React, { useState } from "react";
const DiseaseIdentification = () => {
  const [photo, setPhoto] = useState([]);
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  let url = "http://137.184.139.164/api/DIS/predict/";
  let form = new FormData();
  console.log(photo)
  form.append("file", photo[0]);


  function onClick() {
    try {
      fetch(url, {
        method: "post",
        body: form
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
          let main_data = data["data"];
          console.log(main_data)
          setPrediction(main_data);
           // gives SyntaxError: Unexpected end of input
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
    console.log(prediction)
  }
  return (
    <>
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100  p-10 grid place-items-center my-14 ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
              <br />
            </p>
            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language, default language is English</div>
              <div className="ml-16 ">
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
              <div className="ml-16 ">
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
            <div className=" m-6">
              <input
                type="file"
                onChange={(e) => setPhoto([e.target.files[0]])}
              />
            </div>
            <button
              onClick={() => onClick()}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Upload
            </button>
            {/*{handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}*/}

            <p className="title" style={{ marginTop: 30 }}>
              Uploaded Image:
            </p>
          </div>
        </div>

        <div>
          {load ? (
            <div className="grid place-items-center my-14  ">loading </div>
          ) : (
            <div></div>
          )}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Disease From Image Predicted: </p>
              {prediction}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default DiseaseIdentification;