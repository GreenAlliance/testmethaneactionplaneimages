let percentage = 100; // Start at full thermometer

// Function to update the thermometer image based on "Yes" or "No"
function updateThermometer(isYes) {
  if (isYes) {
    // Decrease the percentage by 10% for each "Yes" answer
    percentage -= 10;
  }
  
  // Change the thermometer image based on the current percentage
  const thermometerImage = document.getElementById("thermometer");

  if (percentage > 75) {
    thermometerImage.src = "images/thermometer_full.png"; // Full
  } else if (percentage > 50) {
    thermometerImage.src = "images/thermometer_75.png"; // 75% full
  } else if (percentage > 25) {
    thermometerImage.src = "images/thermometer_50.png"; // 50% full
  } else if (percentage > 0) {
    thermometerImage.src = "images/thermometer_25.png"; // 25% full
  } else {
    thermometerImage.src = "images/thermometer_empty.png"; // Empty
  }

  // Optional: Display the current percentage for fun
  console.log("Current percentage: " + percentage + "%");
}