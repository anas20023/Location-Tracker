// script.js

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "ade16615796e8e44295f8993c369134b"; // Replace with your actual ipstack API key
  const ipAddressInput = document.getElementById("ipAddressInput");

  // Check if the input field exists before adding the event listener
  if (ipAddressInput) {
    // Handle form submission when the "Submit" button is clicked
    ipAddressInput.closest("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      const ipAddress = ipAddressInput.value.trim();
      
      if (ipAddress) {
        // Proceed with location tracking if the input is not empty
        const apiUrl = `https://api.ipstack.com/${ipAddress}?access_key=${apiKey}`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Extract location data from the API response
            const country = data.country_name;
            const region = data.region_name;
            const city = data.city;
            const latitude = data.latitude;
            const longitude = data.longitude;

            // Do something with the location data (e.g., display it on the web page)
            const locationInfo = `Location: ${city}, ${region}, ${country} (Lat: ${latitude}, Long: ${longitude})`;
            console.log(locationInfo);
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
          });
      } else {
        console.error("Please enter a valid IP address.");
      }
    });
  } else {
    console.error("IP Address input field not found.");
  }
});
