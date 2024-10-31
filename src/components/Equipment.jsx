import React, { useState } from 'react';

const rentalEquipmentData = [
  { id: 1, name: "Tractor", description: "High power tractor suitable for heavy-duty farming.", rentalPrice: 100, availabilityStatus: "Available", location: "Field A, Farm 1", imageUrl: "https://www.deere.com/assets/images/region-4/products/tractors/row-crop-tractors/row-crop-group/6family-rowcrop-r4b009242-1366.jpg" },
  { id: 2, name: "Seed Planter", description: "Efficient seed planter for precise planting.", rentalPrice: 50, availabilityStatus: "Rented", location: "Warehouse 2", imageUrl: "https://m.media-amazon.com/images/I/81nPpj7P+bL.jpg" },
  { id: 3, name: "Plough", description: "Heavy-duty plough for soil preparation.", rentalPrice: 30, availabilityStatus: "Available", location: "Field B, Farm 3", imageUrl: "https://lemken.com/fileadmin/a_Webseite/00_Produkte/Bodenbearbeitung/Pfluegen/Anbaudrehpfluege/anbaudrehpfluege.jpg" },
  { id: 4, name: "Harvester", description: "Multi-crop harvester suitable for diverse farming needs.", rentalPrice: 200, availabilityStatus: "Available", location: "Farm 5", imageUrl: "https://en.lovol.com/upload/images/2021/02/22/654e7943cc2d40c7812a7350072bff08.jpg" },
  { id: 5, name: "Irrigation Pump", description: "High-efficiency pump for irrigation systems.", rentalPrice: 25, availabilityStatus: "Rented", location: "Pump House 1", imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTND4Zze0J2r8JMav8fonpW01LLSKvSLWx0lCvRMtG_uBrMfEOVen0VlWzckgHt72h1mUVh-V47_8X93dhFMsEzr2pAa1gWY9Vh9s4-XVHp4sCer22q_Ocq9A" },
  { id: 6, name: "Fertilizer Spreader", description: "Precise fertilizer spreader for even distribution.", rentalPrice: 40, availabilityStatus: "Available", location: "Warehouse 3", imageUrl: "https://www.fennigequipment.com/cdn/shop/products/Valmar-Airflo-8708-Fertilizer-Spreader-01.jpg?v=1591304696" }
];

const RentalEquipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handleRentNow = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const closeModal = () => {
    setSelectedEquipment(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-green-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Rental Equipment</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rentalEquipmentData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl p-6 flex flex-col items-center border-t-4 border-blue-400">
            <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4 text-center">{item.description}</p>
            <p className="text-lg font-medium text-gray-900 mb-4">Price: ${item.rentalPrice}/day</p>
            <p className={`mb-4 px-4 py-2 rounded-full text-sm font-semibold ${item.availabilityStatus === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {item.availabilityStatus}
            </p>
            <button
              className={`px-6 py-2 rounded-lg font-semibold text-white transform transition-all duration-300 ${item.availabilityStatus === 'Available' ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={item.availabilityStatus !== 'Available'}
              onClick={() => handleRentNow(item)}
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>

      {selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto transform transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Equipment Details</h3>
            <img src={selectedEquipment.imageUrl} alt={selectedEquipment.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{selectedEquipment.name}</h4>
            <p className="text-gray-600 mb-2">{selectedEquipment.description}</p>
            <p className="text-lg font-medium text-gray-900 mb-2">Rental Price: ${selectedEquipment.rentalPrice}/day</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Location:</span> {selectedEquipment.location}</p>
            <p className={`mb-4 text-sm font-semibold ${selectedEquipment.availabilityStatus === 'Available' ? 'text-green-700' : 'text-red-700'}`}>
              Status: {selectedEquipment.availabilityStatus}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition hover:scale-105 duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalEquipment;
