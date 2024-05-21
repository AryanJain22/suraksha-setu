import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
    const [emergencyReports, setEmergencyReports] = useState([]);

    const handleSendHelpClick = async (e, id) => {
        e.preventDefault();
        console.log("Sending help for report:", id);
        try {
            await axios.get("https://backend-epic.onrender.com/api/ack");
            // Handle any additional logic after sending help
        }
        catch (error) {
            console.log(error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://backend-epic.onrender.com/api/location');
            console.log(response.data);
            const { userData, latitude, longitude, selectedOption, currentTime } = response.data;
            const newReport = {
                id: emergencyReports.length + 1, // Assign a unique ID
                emg: selectedOption,
                lat: latitude,
                log: longitude,
                time: currentTime,
                phoneNumber: userData.phoneNum
            };
            setEmergencyReports(prevReports => [...prevReports, newReport]);
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCallClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleRemoveReport = (id) => {
        if (window.confirm('Are you sure you want to remove this report?')) {
            setEmergencyReports(prevReports => prevReports.filter(report => report.id !== id));
        }
    };

    return (
        <div className="w-[95%] m-auto">
            <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
                <div>
                    <Link to="/admin" className="text-white hover:text-gray-300">Admin Home</Link>
                </div>
                <div>
                    <Link to="/community" className="text-white hover:text-gray-300">Community</Link>
                </div>
            </nav>
            <div className="border border-gray-300 rounded-md p-4 mt-4">
                <h2 className="text-lg font-semibold mb-4">Emergency Feed</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                SNo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Emergency Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acknowledgement
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Call Back
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {emergencyReports.map((report, index) => (
                            <tr key={report.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.emg}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.lat} {report.log}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.phoneNumber}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.time}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={(e) => handleSendHelpClick(e, report.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Send help
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => handleCallClick(report.phoneNumber)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Call
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => handleRemoveReport(report.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
