// Admin.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Admin = () => {
    const [emergencyReports, setEmergencyReports] = useState([]);

    useEffect(() => {
        fetch('/api/emergencyReports')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEmergencyReports(data);
            })
            .catch(error => {
                console.error('Error fetching emergency reports:', error);
            });
    }, []);

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
            {/* <ProfileCard></ProfileCard> */}
            <div className="border border-gray-300 rounded-md p-4 mt-4">
                <h2 className="text-lg font-semibold mb-4">Emergency Feed</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sno
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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {emergencyReports.map((report, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.type}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.coordinates.latitude}, {report.coordinates.longitude}</div>
                                </td>
                                {/* You can add more columns here as per your requirement */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.number}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{report.time}</div>
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
