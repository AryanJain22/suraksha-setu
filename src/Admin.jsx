// Admin.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';
const Admin = () => {
    const [emergencyReports, setEmergencyReports] = useState([]);
    const [mydata, setmydata] = useState([]);
    const [lat, setlat] = useState(0);
    const [log, setlog] = useState(0);
    const [emg, setemg] = useState("");
    const [time, settime] = useState("");
    const handleclick = ((e) => {
        e.preventDefault();
        console.log("hi");
        try {
            const res = axios.get("https://backend-epic.onrender.com/api/ack");
        }
        catch (error) {
            console.log(error);
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend-epic.onrender.com/api/location');
                console.log(response.data);
                setmydata(response.data.userData);
                setlat(response.data.latitude);
                setlog(response.data.longitude);
                setemg(response.data.selectedOption)
                settime(response.data.currentTime);

                // setEmergencyReports(response.data);
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };

        fetchData();
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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{emg}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{lat} {log}</div>
                            </td>
                            {/* You can add more columns here as per your requirement */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{
                                    mydata.
                                        phoneNum}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{time}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={handleclick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Send help
                                </button>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
