import React, { useState } from 'react';

const AlertBtn = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionSelect = async (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);

        try {
            // Get user's current location
            const position = await getCurrentPosition();
            const { latitude, longitude } = position.coords;

            // Send the message and location via socket
            const message = `Emergency Alert: ${option}`;
            const location = { latitude, longitude };
            sendAlertMessage(message, location);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    };

    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const sendAlertMessage = (message, location) => {
        // Your socket implementation to send the message and location
        // Replace this with your actual implementation
        console.log(`Sending message: ${message} from location: ${location.latitude}, ${location.longitude}`);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="focus:outline-none my-5 mx-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    Emergency &darr;
                </button>
            </div>
            {dropdownOpen && (
                <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {/* Example options, replace with your desired disaster options */}
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleOptionSelect('Earthquake')}
                        >
                            Earthquake
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleOptionSelect('Landslide')}
                        >
                            Landslide
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleOptionSelect('Fire')}
                        >
                            Fire
                        </button>
                        {/* Add more options as needed */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlertBtn;
