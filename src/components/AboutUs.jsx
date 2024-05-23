import React from 'react';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-container">
                {/* What is Setu */}
                <AnimatedSection>
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
                </AnimatedSection>

                {/* How Setu Works */}
                <AnimatedSection>
                    <div className="section">
                        <h1 className="title">What Setu Has?</h1>
                        <div className="line"></div>
                        <p className="space"><span className="star">*</span> Click the circles to know more about the site.</p>
                        <div className="image-container">
                            <img src="https://i.ibb.co/GnW1r3Y/EMERGENCY-BUTTON.jpg" alt="Emergency Button" className="section-image" />
                            <InteractiveCircle top="16%" left="31%" text="After log-in you can Use the Emergency button at the top-right corner to reach the organisations and get help." />
                            <InteractiveCircle top="16%" left="56%" text="Chat Bot at botton-right and Map are there to help you locate the nearest rescue centers and disaster based organisation" />
                            <InteractiveCircle top="71%" left="56%" text="There is a public awareness section where various tips and prevention ways will be shared to the users for the times of emergency" />
                            <InteractiveCircle top="44%" left="61%" text="Community Section is available where government and various organisations will be posting their updates on the disaster policies and relief work status." />
                            <InteractiveCircle top="44%" left="26%" text="Check below for the live disaster updates" />
                            <InteractiveCircle top="71%" left="31%" text="Users can also post regaring the disaster and remain updated about the disasters in various regions of their country." />
                            {/* Add more circles as needed */}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Why Setu */}
                <AnimatedSection>
                    <div className="section">
                        <h1 className="title">Why Setu</h1>
                        <div className="line"></div>
                        <div className="text-boxes-container">
                            <TextBox text="Safety Network: Suraksha Setu establishes a safety network where individuals facing emergencies can quickly connect with others who can provide assistance. This network enhances overall safety and security by ensuring prompt responses to critical situations." />
                            <TextBox text="Efficient Assistance: By centralizing emergency requests and offers for help, Suraksha Setu streamlines the process of seeking and providing assistance. This efficiency is crucial during times of crisis when swift action can make a significant difference in saving lives and mitigating damage." />
                            <TextBox text="Community Support: Suraksha Setu fosters a sense of community support by enabling individuals, organizations, and government bodies to come together in times of need. This collective effort strengthens community resilience and solidarity, enhancing overall safety and well-being." />
                            <TextBox text="Verified Resources: With a focus on verified users and resources, Suraksha Setu ensures the credibility and reliability of assistance provided through the platform. This feature helps prevent fraud and ensures that those seeking help receive genuine support from trustworthy sources." />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Documents */}
                <AnimatedSection>
                    <div className="section">
                        <h1 className="title">Documents</h1>
                        <div className="line"></div>
                        <p className="text">Coming Soon..</p>
                    </div>
                </AnimatedSection>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Change to false for repeated animations
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`animated-section ${inView ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

const InteractiveCircle = ({ top, left, text }) => (
    <div className="info-circle" style={{ top, left }}>
        <div className="info-box">
            <p>{text}</p>
        </div>
    </div>
);

const TextBox = ({ text }) => (
    <div className="text-box">
        <p>{text}</p>
    </div>
);

export default AboutUs;
