let latitude = "";
let longitude = "";

const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");

locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {
        locationText.innerHTML = "Geolocation not supported.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

           locationText.innerHTML = `
Location Selected ✅<br>
Latitude: ${latitude}<br>
Longitude: ${longitude}
`;

        },

        () => {
            locationText.innerHTML = "Unable to get location.";
        }
    );

});

const sosBtn = document.getElementById("sosBtn");
const result = document.getElementById("result");

sosBtn.addEventListener("click", async () => {
    result.innerHTML = "Sending SOS...";

    const userName = document.getElementById("userName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const emergencyMessage = document.getElementById("message").value;

    if (!latitude || !longitude) {
        result.innerHTML = "Please get your location first.";
        return;
    }

    const response = await fetch("https://b7rj670zxa.execute-api.ap-south-1.amazonaws.com/prod/emergency", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName,
            phoneNumber,
            latitude,
            longitude,
            emergencyMessage
        })
    });

    const data = await response.json();

    if (response.ok) {
        result.innerHTML = "✅ SOS Sent Successfully!";
    } else {
        result.innerHTML = "❌ " + data.message;
    }
});