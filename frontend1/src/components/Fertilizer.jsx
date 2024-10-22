import React, { useState } from "react";
import axios from "axios";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  // const [information, setInformation] = useState("");
  // const [application, setApplication] = useState("");
  // const [specification, setSpecification] = useState("");
  const [lang, setLang] = useState("en");
  const [res, setRes] = useState();

  async function fetchData(){
    try{
      const result = await axios.post("http://137.184.139.164/api/FRS/predict/", 
        {
          "data":
          {
            "temperature": temperature,
            "humidity": humidity,
            "moisture": moisture,
            "soil": soilType,
            "crop": cropType,
            "nitrogen": nitrogen,
            "potassium": potassium,
            "phosphorous": phosphorus
          }
        }
      );
      setRes(result.data);
      console.log(res);
      setPrediction(result.data.Prediction);
    }
    catch(error){
      console.log("Error in data procesing.")
    }
  }
  function onSearchSubmit() {
    setLoad(true);
    
    console.log("Clicked");
    fetchData();
    

    setLoad(false);
  }

  return (
    <>
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the Fertilizer for your crop
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
                  className="inline-block px-6 py-2.5 bg-green-600 text-white 
                  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
                  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Hindi
                </button>
              </div>
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("es")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white 
                  font-medium text-xs leading-tight uppercase rounded shadow-md
                  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                  focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Spanish
                </button>
              </div>
            </div>
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Clay">Clayey</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>
            {/* dropdown for crop type */}
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Crop Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Millets">Millets</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Barley">Barley</option>
                  <option value="Paddy">Paddy</option>
                </select>
              </div>
            </div>

            <input
              onChange={(e) => setMoisture(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter moisture value"
            />
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter nitrogen value"
            />
            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter phosphorous value"
            />
            <input
              onChange={(e) => setPotassium(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter potassium value"
            />
            <input
              onChange={(e) => setTemperature(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter temperature"
            />
            <input
              onChange={(e) => setHumidity(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter humidity"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              className="w-3/5 my-2 p-4"
              type="text"
              placeholder="Enter city"
            />

            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={() => onSearchSubmit("aaa")}
                  type="button"
                  className="inline-block  px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Fertilizer Recommendation
                </button>
              </div>
            </div>
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
              <p className="font-bold my-3">Fertilizer Predicted: </p>
              <strong className="border m-2 p-2">{prediction}</strong>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default Fertilizer;