import React from 'react';
import Footer from '../components/Footer'; // Import the footer component
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-container">
                {/* What is Setu */}
                <div className="section">
                    <div className="content">
                        <div className="text-container">
                            <h1 className="title">What is Setu</h1>
                            <div className="line"></div>
                            <p className="text">
                                Welcome to Suraksha Setu, a web-based application designed to connect people, organizations, and government bodies on a single platform for emergency assistance. Whether you need help or want to offer support during crises, Suraksha Setu facilitates efficient and timely aid.
                            </p>
                            <p className="text">
                                Users can post emergency requests, offer resources, and coordinate efforts in real-time. Join Suraksha Setu to be part of a proactive network dedicated to providing help during difficult times. Together, we can make a difference.
                            </p>
                            <h1 className='hope'>We HOPE, You never have to Use this Site...</h1>
                        </div>
                        <div className="image-container">
                            <img src="https://i.ibb.co/Th9H2cY/Grey-Light-Blue-Minimalist-Family-Insurance-Logo.png" alt="Description of the image" className="section-image" />
                        </div>
                    </div>
                </div>

                {/* How Setu Works */}
                <div className="section">
                    <h1 className="title">What Setu Has?</h1>
                    <div className="line"></div>
                    <p className="space"><span className="star">*</span> Click the circles to know more about the site.</p>
                    <div className="image-container">
                        <img src="https://i.ibb.co/GnW1r3Y/EMERGENCY-BUTTON.jpg" alt="Emergency Button" className="section-image" />
                        <div className="info-circle" style={{ top: '16%', left: '31%' }}>
                            <div className="info-box">
                                <p>After log-in you can Use the Emergency button at the top-right corner to reach the organisations and get help.</p>
                            </div>
                        </div>
                        <div className="info-circle" style={{ top: '16%', left: '56%' }}>
                            <div className="info-box">
                                <p>Chat Bot at botton-right and Map are there to help you locate the nearest rescue centers and disaster based organisation</p>
                            </div>
                        </div>
                        <div className="info-circle" style={{ top: '71%', left: '56%' }}>
                            <div className="info-box">
                                <p>There is a public awareness section where various tips and prevention ways will be shared to the users for the times of emergency</p>
                            </div>
                        </div>
                        <div className="info-circle" style={{ top: '44%', left: '61%' }}>
                            <div className="info-box">
                                <p>Community Section is available where government and various organisations will be posting their updates on the disaster policies and relief work status.</p>
                            </div>
                        </div>
                        <div className="info-circle" style={{ top: '44%', left: '26%' }}>
                            <div className="info-box">
                                <p>Check below for the live disaster updates</p>
                            </div>
                        </div>
                        <div className="info-circle" style={{ top: '71%', left: '31%' }}>
                            <div className="info-box">
                                <p>Users can also post regaring the disaster and remain updated about the disasters in various regions of their country.</p>
                            </div>
                        </div>
                        {/* Add more circles as needed */}
                    </div>
                </div>

                {/* Disaster Updates */}
                {/* <div className="section">
                    <h1 className="title">Disaster Updates</h1>
                    <div className="line"></div>
                    <p className="text">Coming Soon..</p>
                </div> */}

                <div className="section">
                    <h1 className="title">Why Setu</h1>
                    <div className="line"></div>
                    <div className="text-boxes-container">
                        <div className="text-box">
                            <p><b>Safety Network: </b>Suraksha Setu establishes a safety network where individuals facing emergencies can quickly connect with others who can provide assistance. This network enhances overall safety and security by ensuring prompt responses to critical situations.</p>
                        </div>
                        <div className="text-box">
                            <p><b>Efficient Assistance: </b>By centralizing emergency requests and offers for help, Suraksha Setu streamlines the process of seeking and providing assistance. This efficiency is crucial during times of crisis when swift action can make a significant difference in saving lives and mitigating damage.</p>
                        </div>
                        <div className="text-box">
                            <p><b>Community Support: </b>Suraksha Setu fosters a sense of community support by enabling individuals, organizations, and government bodies to come together in times of need. This collective effort strengthens community resilience and solidarity, enhancing overall safety and well-being.</p>
                        </div>
                        <div className="text-box">
                            <p><b>Verified Resources: </b>With a focus on verified users and resources, Suraksha Setu ensures the credibility and reliability of assistance provided through the platform. This feature helps prevent fraud and ensures that those seeking help receive genuine support from trustworthy sources.</p>
                        </div>
                    </div>
                </div>



                {/* Documents */}
                <div className="section">
                    <h1 className="title">Documents</h1>
                    <div className="line"></div>
                    <p className="text">Coming Soon..</p>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;
