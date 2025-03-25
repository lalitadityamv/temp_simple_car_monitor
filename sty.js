// Firebase configuration (Replace with your actual config)
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

// Reference to Firebase database
const dataRef = database.ref('car_environment_data');

// Listen for changes and update UI in real-time
dataRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        document.getElementById('value1').innerText = data.temperature || "No data";
        document.getElementById('value2').innerText = data.humidity || "No data";
        document.getElementById('value3').innerText = data.air_quality || "No data";

        // Determine Air Quality status
        const airQualityValue = parseInt(data.air_quality) || 0;
        if (airQualityValue > 80) {
            document.getElementById('air_quality_desc').innerHTML = "<span class='good'>Good: Fresh air inside! 🌿</span>";
        } else {
            document.getElementById('air_quality_desc').innerHTML = "<span class='bad'>Bad: Poor air quality ⚠️.</span>";
        }
    }
}, (error) => {
    console.error("Error reading data:", error);
});

// Tab functionality
function showTab(tabId) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}