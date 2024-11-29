import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Request() {
  const navigate = useNavigate();
  const bloodCards = [
    { bloodGroup: "A+", units: 10 },
    { bloodGroup: "A-", units: 8 },
    { bloodGroup: "B+", units: 12 },
    { bloodGroup: "B-", units: 6 },
    { bloodGroup: "AB+", units: 4 },
    { bloodGroup: "AB-", units: 3 },
    { bloodGroup: "O+", units: 15 },
    { bloodGroup: "O-", units: 9 },
  ];

  const requestDetails = [
    { no: 1, bloodGroup: "A+", units: 2, status: "Pending" },
    { no: 2, bloodGroup: "B-", units: 1, status: "Completed" },
    { no: 3, bloodGroup: "O+", units: 3, status: "Pending" },
    { no: 4, bloodGroup: "O+", units: 3, status: "Rejected" },
  ];

  return (
    <div className="flex items-center justify-center flex-grow bg-gray-200 overflow-hidden">
      <div className="flex w-full m-2">

        {/* Left Side: Blood Cards */}
        <div className="w-1/3 grid grid-rows-8 gap-4 px-8 pb-8 bg-gray-100 rounded shadow mx-4">
          <h3 className="text-xl font-bold text-center text-gray-800 mt-4">Available Units</h3>
          {bloodCards.map((card, index) => (
            <div
              key={index}
              className="bg-red-100 rounded-lg shadow-md p-3 flex items-center w-[90%]"
            >
              <div className="flex justify-between w-full mx-4">
                <span className="text-lg font-semibold text-red-700">{card.bloodGroup}</span>
                <span className="text-gray-700">Available units: {card.units}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Request Details Table */}
        <div className="w-2/3 border p-4 rounded shadow bg-gray-100 relative">
          {/* New Request Button */}
          
          
          <h2 className="text-xl font-bold mb-10 text-center">Request Details</h2>
          <button
            onClick={() => navigate('/Requestform')}
            className="font-bold absolute top-10 right-10 text-white active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all mt-4 py-2 px-10 rounded-xl text-lg" style={{ backgroundColor: '#dc143c' }}>
            Add
          </button>
          <div className="py-8">
          <table className="w-full border-collapse rounded-lg  bg-white shadow-md overflow-hidden">
            <thead>
              <tr className="border-b">
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
                {requestDetails.map((detail, index) => (
                    <tr key={index} className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap ">{detail.no}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{detail.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{detail.units}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            detail.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : detail.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : detail.status === 'Rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                        >
                            {detail.status}
                        </span>
                    </td>
                    </tr>
                ))}
                </tbody>

          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
