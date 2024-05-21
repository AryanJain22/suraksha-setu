import React, { useState, useEffect, useContext } from 'react';
import FeedCard from '../components/FeedCard';
import { FeedsContext } from '../context/FeedContext';
import AlertBtn from '../components/AlertBtn';
import Footer from '../components/Footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { AiOutlineMessage } from 'react-icons/ai';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
    const feeds = useContext(FeedsContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showChat, setShowChat] = useState(false);

    // Dummy images array for demonstration
    const images = [
        // 'https://i.ibb.co/GnW1r3Y/EMERGENCY-BUTTON.jpg',
        'https://t4.ftcdn.net/jpg/06/32/25/85/360_F_632258589_fHQIsIXfXCPtLITflcVlO0aly7fS64hm.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/12/369974067/NM/XF/MS/9978962/emergency-preparedness.png',
        'https://media.licdn.com/dms/image/D5612AQFrDcQRT1Hg5A/article-cover_image-shrink_720_1280/0/1664286287175?e=2147483647&v=beta&t=4s6tMVpYXT2GQuUJ9wBLvYq2huFD-mAbiOor1Ww2kqI',
    ];

    // Function to update the current image index
    const updateImageIndex = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Effect to change image index after certain interval
    useEffect(() => {
        const intervalId = setInterval(updateImageIndex, 5000); // Change image every 5 seconds
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    // Function to toggle the chat window
    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="w-[95%] m-auto">
            <AlertBtn />
            <p><span className="star">*</span> Press this button During the time of Emergency.</p>
            {/* <WeatherCard /> */}

            {/* Image Carousel */}
            <div className="flex justify-center">
                <h1 className='text-3xl font-semibold md:text-4xl my-5'>Public Awareness</h1>
            </div>
            <div className="flex justify-center">
                <div className="w-32 h-1 bg-gray-600 my-1"></div>
            </div>
            <br />
            <ImageCarousel images={images} currentImageIndex={currentImageIndex} />

            {/* Latest posts */}
            <SectionHeader title="Latest posts" />
            <FeedGrid feeds={feeds} />

            {/* Maps */}
            <SectionHeader title="Maps" />
            <MapWithMarker />
            <br />

            {/* Chat Button */}
            <ChatButton toggleChat={toggleChat} />

            {/* Chat Box */}
            {showChat && <ChatBox onClose={toggleChat} />}

            <Footer />
        </div>
    );
};

// Reusable component for image carousel
const ImageCarousel = ({ images, currentImageIndex }) => {
    return (
        <div className="w-full max-w-screen-lg mx-auto mb-6 border-2 border-gray-300 p-2 rounded-lg relative overflow-hidden">
            <div className="flex" style={{ transform: `translateX(-${currentImageIndex * 100}%)`, transition: 'transform 1s ease-in-out' }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                        className="w-full h-auto transition-all duration-300 transform scale-100 hover:scale-105"
                        style={{ minWidth: '100%', flex: '0 0 auto' }}
                    />
                ))}
            </div>
        </div>
    );
};

// Reusable component for section header
const SectionHeader = ({ title }) => {
    return (
        <>
            <div className="flex justify-center">
                <h1 className='text-3xl font-semibold md:text-4xl my-5'>{title}</h1>
            </div>
            <div className="flex justify-center">
                <div className="w-32 h-1 bg-gray-600 my-1"></div>
            </div>
            <br />
        </>
    );
};

// Reusable component for feed grid
const FeedGrid = ({ feeds }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 md:gap-6 lg:gap-8 p-3 my-grid">
            {feeds.map((ele, i) => (
                <FeedCard
                    key={i}
                    title={ele.title}
                    date={ele.date}
                    content={ele.content}
                    imageLink={ele.image}
                    adminName={ele.adminName}
                />
            ))}
        </div>
    );
};

// Reusable component for map with marker
const MapWithMarker = () => {
    const center = { lat: -34.397, lng: 150.644 }; // Center of the map
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <LoadScript googleMapsApiKey="AIzaSyCV0FHfq56NFWxIEgsPpMOmT6Bj0XVmbao">
                <GoogleMap
                    mapContainerStyle={{ height: '100%', width: '100%' }}
                    center={center}
                    zoom={8}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

// Reusable component for chat button
const ChatButton = ({ toggleChat }) => {
    const [showName, setShowName] = useState(false);

    const handleMouseEnter = () => {
        setShowName(true);
    };

    const handleMouseLeave = () => {
        setShowName(false);
    };

    return (
        <></>
    );
};

// Reusable component for chat box
const ChatBox = ({ onClose }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = () => {
        setChatHistory([...chatHistory, { message: message, sender: 'user' }]);
        // Simulated response from the chatbot
        const response = 'This is a simulated response from the chatbot.';
        setChatHistory([...chatHistory, { message: response, sender: 'bot' }]);
        setMessage('');
    };

    return (
        <> </>
    );
};

export default Home;
