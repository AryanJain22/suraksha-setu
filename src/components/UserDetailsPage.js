// UserDetailsPage.js
import React from 'react';

const UserDetailsPage = ({ userDetails }) => {
    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {userDetails.name}</p>
            <p>Location: {userDetails.location}</p>
            {/* Display other user details as needed */}
        </div>
    );
};

export default UserDetailsPage;
