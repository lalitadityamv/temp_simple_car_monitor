const firebase = require("firebase/app");
require("firebase/database");

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to update data
function updateData(value1, value2, value3, value4) {
    database.ref('realtime_data').set({
        value1: value1,
        value2: value2,
        value3: value3,
        value4: value4
    })
    .then(() => console.log("Data updated successfully!"))
    .catch(error => console.error("Error updating data:", error));
}

// Example update
updateData("Temperature: 30°C", "Humidity: 55%", "Pressure: 1015 hPa", "Wind Speed: 15 km/h");


