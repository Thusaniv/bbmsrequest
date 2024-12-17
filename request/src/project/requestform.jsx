import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';  // Assuming you have already configured Supabase

export default function Requestform() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    donation_date: '',
    blood_type: '',
    quantity: '',
    hospital_name: '',
    ward_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the data into the requests table
    const { data, error } = await supabase
      .from('requests')
      .insert([
        {
          blood_type: formData.blood_type,
          quantity: formData.quantity,
          status: 'pending', // Set the status as "Pending"
          hospital_name: formData.hospital_name,
          ward_no: formData.ward_no,
          request_date: formData.date,  // Assuming 'date' is the request date
        },
      ]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('Error submitting the request!');
    } else {
      console.log('Request submitted:', data);
      alert('Blood request submitted successfully!');
      setFormData({
        date: '',
        donation_date: '',
        blood_type: '',
        quantity: '',
        hospital_name: '',
        ward_no: '',
      });
      navigate('/'); // Navigate to the Bloodtest page or desired route
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-8">
      <form onSubmit={handleSubmit} className="w-2/3 p-4 bg-white border-2 border-red-500 rounded-lg shadow-lg">
        <h2 className="mb-3 text-2xl font-bold text-center text-red-500">Add New Blood Test</h2>

        <div>
          <label className="h-6 mt-1 text-xs font-bold leading-8 text-gray-600 uppercase">DATE</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>

        <div className="flex-1 mr-2">
          <div className="h-6 mt-1 text-xs font-bold leading-8 text-gray-600 uppercase">Blood Type:</div>
          <div className="flex my-2 bg-white border border-gray-200 rounded">
            <select
              name="blood_type"
              value={formData.blood_type}
              onChange={handleChange}
              className="w-full p-1 px-2 text-gray-800 outline-none"
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <div>
          <label className="h-6 mt-1 text-xs font-bold leading-8 text-gray-600 uppercase">Hospital Name</label>
          <input
            type="text"
            name="hospital_name"
            value={formData.hospital_name}
            onChange={handleChange}
            placeholder="Enter Hospital Name"
            className="w-full px-3 py-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>

        <div>
          <label className="h-6 mt-1 text-xs font-bold leading-8 text-gray-600 uppercase">Ward No</label>
          <input
            type="text"
            name="ward_no"
            value={formData.ward_no}
            onChange={handleChange}
            placeholder="Enter Ward No"
            className="w-full px-3 py-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>
        
        <div>
          <label className="h-6 mt-1 text-xs font-bold leading-8 text-gray-600 uppercase">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            className="w-full px-3 py-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Add Request
          </button>
        </div>
      </form>
    </div>
  );
}
