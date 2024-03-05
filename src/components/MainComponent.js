// MainComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmergencyPage from '../pages/EmergencyPage';
import UserDetailsPage from './UserDetailsPage';

const MainComponent = () => {
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe',
        location: 'New York',
        // Add more user details as needed
    });

    const sendMessage = (message) => {
        // Send message to other users via socket
        console.log(`Sending message: ${message}`);
    };

    return (
        <Router>
            <Switch>
                <Route path="/user-details">
                    <UserDetailsPage userDetails={userDetails} />
                </Route>
                <Route path="/">
                    <EmergencyPage sendMessage={sendMessage} />
                </Route>
            </Switch>
        </Router>
    );
};

export default MainComponent;
