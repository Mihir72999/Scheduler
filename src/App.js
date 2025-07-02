import './App.css';
import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State to hold the currently selected state
  const [selectedState, setSelectedState] = useState('');
  // State to hold the information of the sales representative for the selected state
  const [salesRep, setSalesRep] = useState(null);

  // States for customer contact information
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState(''); // This will store only the 10 digits
  const [customerCompany, setCustomerCompany] = useState(''); // Mandatory

  // Define the mapping of states to sales representatives and their meeting links
  // All scheduling links are now set to the provided Calendly URL
  const stateSalesReps = [
    {
      state: 'Andhra Pradesh',
      id: 'IN-AP',
      repName: 'Rajesh Reddy',
      email: 'rajesh.reddy@example.com',
      contactNumber: '+91 98765 11111', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Andhra Pradesh.',
    },
    {
      state: 'Arunachal Pradesh',
      id: 'IN-AR',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 22222', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Arunachal Pradesh.',
    },
    {
      state: 'Assam',
      id: 'IN-AS',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 33333', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Assam.',
    },
    {
      state: 'Bihar',
      id: 'IN-BR',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 44444', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Bihar.',
    },
    {
      state: 'Chhattisgarh',
      id: 'IN-CT',
      repName: 'Neha Singh',
      email: 'neha.singh@example.com',
      contactNumber: '+91 98765 55555', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Chhattisgarh.',
    },
    {
      state: 'Goa',
      id: 'IN-GA',
      repName: 'Siddharth Patel',
      email: 'siddharth.patel@example.com',
      contactNumber: '+91 98765 66666', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Goa.',
    },
    {
      state: 'Gujarat',
      id: 'IN-GJ',
      repName: 'Siddharth Patel',
      email: 'siddharth.patel@example.com',
      contactNumber: '+91 98765 77777', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Gujarat.',
    },
    {
      state: 'Haryana',
      id: 'IN-HR',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 88888', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Haryana.',
    },
    {
      state: 'Himachal Pradesh',
      id: 'IN-HP',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 99999', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Himachal Pradesh.',
    },
    {
      state: 'Jharkhand',
      id: 'IN-JH',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 10101', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Jharkhand.',
    },
    {
      state: 'Karnataka',
      id: 'IN-KA',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 11223', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Karnataka.',
    },
    {
      state: 'Kerala',
      id: 'IN-KL',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 11334', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Kerala.',
    },
    {
      state: 'Madhya Pradesh',
      id: 'IN-MP',
      repName: 'Neha Singh',
      email: 'neha.singh@example.com',
      contactNumber: '+91 98765 11445', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Madhya Pradesh.',
    },
    {
      state: 'Maharashtra',
      id: 'IN-MH',
      repName: 'Siddharth Patel',
      email: 'siddharth.patel@example.com',
      contactNumber: '+91 98765 11556', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Maharashtra.',
    },
    {
      state: 'Manipur',
      id: 'IN-MN',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 11667', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Manipur.',
    },
    {
      state: 'Meghalaya',
      id: 'IN-ML',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 11778', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Meghalaya.',
    },
    {
      state: 'Mizoram',
      id: 'IN-MZ',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 11889', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Mizoram.',
    },
    {
      state: 'Nagaland',
      id: 'IN-NL',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 11990', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Nagaland.',
    },
    {
      state: 'Odisha',
      id: 'IN-OR',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 12001', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Odisha.',
    },
    {
      state: 'Punjab',
      id: 'IN-PB',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 12112', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Punjab.',
    },
    {
      state: 'Rajasthan',
      id: 'IN-RJ',
      repName: 'Siddharth Patel',
      email: 'siddharth.patel@example.com',
      contactNumber: '+91 98765 12223', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Rajasthan.',
    },
    {
      state: 'Sikkim',
      id: 'IN-SK',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 12334', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Sikkim.',
    },
    {
      state: 'Tamil Nadu',
      id: 'IN-TN',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 12445', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Tamil Nadu.',
    },
    {
      state: 'Telangana',
      id: 'IN-TG',
      repName: 'Rajesh Reddy',
      email: 'rajesh.reddy@example.com',
      contactNumber: '+91 98765 12556', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Telangana.',
    },
    {
      state: 'Tripura',
      id: 'IN-TR',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 12667', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Tripura.',
    },
    {
      state: 'Uttar Pradesh',
      id: 'IN-UP',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 12778', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Uttar Pradesh.',
    },
    {
      state: 'Uttarakhand',
      id: 'IN-UT',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 12889', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Uttarakhand.',
    },
    {
      state: 'West Bengal',
      id: 'IN-WB',
      repName: 'Ananya Das',
      email: 'ananya.das@example.com',
      contactNumber: '+91 98765 12990', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in West Bengal.',
    },
    {
      state: 'Andaman and Nicobar Islands',
      id: 'IN-AN',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 13001', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Andaman and Nicobar Islands.',
    },
    {
      state: 'Chandigarh',
      id: 'IN-CH',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 13112', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Chandigarh.',
    },
    {
      state: 'Dadra and Nagar Haveli and Daman and Diu',
      id: 'IN-DD', // Using IN-DD for D&NH and D&D
      repName: 'Siddharth Patel',
      email: 'siddharth.patel@example.com',
      contactNumber: '+91 98765 13223', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Dadra and Nagar Haveli and Daman and Diu.',
    },
    {
      state: 'Delhi',
      id: 'IN-DL',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 13334', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Delhi.',
    },
    {
      state: 'Jammu and Kashmir',
      id: 'IN-JK',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 13445', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Jammu and Kashmir.',
    },
    {
      state: 'Ladakh',
      id: 'IN-LA',
      repName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      contactNumber: '+91 98765 13556', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Ladakh.',
    },
    {
      state: 'Lakshadweep',
      id: 'IN-LD',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 13667', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Lakshadweep.',
    },
    {
      state: 'Puducherry',
      id: 'IN-PY',
      repName: 'Rahul Kumar',
      email: 'rahul.kumar@example.com',
      contactNumber: '+91 98765 13778', // Added sample contact number
      schedulingLink: 'https://calendly.com/harshpatel-nbp/30min',
      description: 'Serving customers in Puducherry.',
    },
  ].sort((a, b) => a.state.localeCompare(b.state)); // Sort states alphabetically

  // Effect to update salesRep whenever selectedState changes
  useEffect(() => {
    const foundRep = stateSalesReps.find(rep => rep.state === selectedState);
    setSalesRep(foundRep);
  }, [selectedState]);

  // Handle dropdown change for state selection
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Function to construct the Calendly URL with pre-filled information
  const getSchedulingUrl = () => {
    if (salesRep && customerName && customerEmail && customerPhone && customerCompany) {
      const baseUrl = salesRep.schedulingLink;
      const params = new URLSearchParams();

      // Name parameter remains just the customer's name
      params.append('name', customerName);
      params.append('email', customerEmail);

      // Phone number for Calendly (a1) now includes the +91- prefix
      params.append('a1', `Attending the Cement Bags EPR consultation on behalf of ${customerCompany}, ${selectedState}. In case video conferencing is not accessible, please contact us directly at +91-${customerPhone}`);
      params.append('a2', customerCompany); // Keep a2 for company as it might be a separate field

      // Construct the meeting purpose string for the notes field (a3)
      const meetingPurpose = `EPR cement bags consultation meeting on behalf of "${customerCompany}" from "${selectedState}", Cell No: +91-${customerPhone}`;

      // Using 'a3' for the custom note/meeting purpose
      params.append('a3', meetingPurpose);

      return `${baseUrl}?${params.toString()}`;
    }
    return '#'; // Return a non-functional link if required info is missing
  };

  // Check if all required fields are filled to enable the button
  const isFormValid = selectedState && customerName && customerEmail && customerPhone && customerCompany;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Schedule Your Consultation
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Please provide your details to connect with the right sales representative.
        </p>

        {/* State Selection Dropdown */}
        <div className="mb-6">
          <label htmlFor="state-select" className="block text-lg font-medium mb-2">
            Select Your State <span className="text-red-500">*</span>
          </label>
          <select
            id="state-select"
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 text-base bg-white"
            value={selectedState}
            onChange={handleStateChange}
            required
          >
            <option value="" disabled>-- Please choose a state --</option>
            {stateSalesReps.map((rep) => (
              <option key={rep.state} value={rep.state}>
                {rep.state}
              </option>
            ))}
          </select>
        </div>

        {/* Customer Information Input Fields */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="customer-name" className="block text-lg font-medium mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customer-name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 text-base bg-white"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="customer-email" className="block text-lg font-medium mb-2">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="customer-email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 text-base bg-white"
              placeholder="Enter your email address"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="customer-phone" className="block text-lg font-medium mb-2">
              Your Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:border-transparent bg-white">
              <span className="pl-4 py-3 text-gray-800">+91-</span>
              <input
                type="tel"
                id="customer-phone"
                className="block w-full px-0 py-3 bg-transparent focus:outline-none text-gray-800 text-base"
                placeholder="Enter 10 digits"
                value={customerPhone} // customerPhone stores only digits
                onChange={(e) => {
                  const rawValue = e.target.value;
                  // Remove non-digit characters and limit to 10 digits
                  const digitsOnly = rawValue.replace(/\D/g, '').substring(0, 10);
                  setCustomerPhone(digitsOnly);
                }}
                required
                maxLength="10" // HTML attribute for visual limit
              />
            </div>
          </div>
          <div>
            <label htmlFor="customer-company" className="block text-lg font-medium mb-2">
              Your Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customer-company"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-800 text-base bg-white"
              placeholder="Enter your company name"
              value={customerCompany}
              onChange={(e) => setCustomerCompany(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Sales Representative Information and Scheduling Button */}
        {selectedState && salesRep ? (
          <div className="bg-lime-50 border-l-4 border-lime-500 text-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Your Sales Representative: <span className="text-lime-700">{salesRep.repName}</span>
            </h2>
            <p className="text-lg mb-2">
              <span className="font-medium">State:</span> {salesRep.state}
            </p>
            <p className="text-lg mb-2">
              <span className="font-medium">Email:</span>{' '}
              <a href={`mailto:${salesRep.email}`} className="text-lime-600 hover:underline">
                {salesRep.email}
              </a>
            </p>
            {/* Displaying Sales Rep Contact Number */}
            <p className="text-lg mb-4">
              <span className="font-medium">Contact Number:</span>{' '}
              {salesRep.contactNumber || 'N/A (Please add to data)'}
            </p>
            <p className="text-lg mb-4">
              <span className="font-medium">Details:</span> {salesRep.description}
            </p>
            <p className="text-gray-700 mb-6">
              Click the button below to open the Calendly link and schedule your meeting. Your details will be pre-filled.
            </p>
            <a
              href={getSchedulingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform ${
                isFormValid
                  ? 'bg-lime-600 hover:bg-lime-700 text-white hover:scale-105'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
              onClick={(e) => {
                if (!isFormValid) {
                  e.preventDefault();
                  console.log("Please fill in all required fields (State, Name, Email, Phone, Company).");
                }
              }}
            >
              Go to Calendly to Schedule Meeting
            </a>
            {!isFormValid && (
              <p className="text-red-500 text-sm mt-2">
                Please fill in all required fields (State, Name, Email, Phone, Company) to enable scheduling.
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 border-l-4 border-gray-300 text-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-lg text-center">
              Please select your state and fill in your details to view your sales representative's information and scheduling link.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
