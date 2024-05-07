import React from 'react';

const ChatBox = ({ onClose }) => {
    // You can integrate your chat API and functionality here

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-[300px]">
                <h2 className="text-xl font-semibold mb-4">Chat bot</h2>
                <p className="text-lg mb-4">This is a chat box where you can interact with the chatbot.</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ChatBox;
