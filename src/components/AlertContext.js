// // AlertContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AlertContext = createContext();

// export const AlertProvider = ({ children }) => {
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertData, setAlertData] = useState({});

//     const showAlertMessage = (title, message, type) => {
//         setAlertData({ title, message, type });
//         setShowAlert(true);

//         // Here, you can implement the logic to broadcast the alert to other components/users.
//         // This could involve using web sockets, a global state management library, or other techniques.
//         // For simplicity, I'll just log the alert data for now.
//         console.log('Broadcasting alert:', { title, message, type });
//     };

//     const hideAlert = () => {
//         setShowAlert(false);
//     };

//     return (
//         <AlertContext.Provider value={{ showAlert, alertData, showAlertMessage, hideAlert }}>
//             {children}
//         </AlertContext.Provider>
//     );
// };

// export const useAlert = () => {
//     return useContext(AlertContext);
// };
