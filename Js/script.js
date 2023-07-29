function FahToCel(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  function CelToFah(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function showResult(temperature, selectedUnit) {
    let result;
  
    if (isNaN(temperature)) {
      result = "Please enter a valid temperature.";
    } else {
      if (selectedUnit === "celsius") {
        const celsius = parseFloat(temperature);
        const fahrenheit = CelToFah(celsius);
        result = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
      } else {
        const fahrenheit = parseFloat(temperature);
        const celsius = FahToCel(fahrenheit);
        result = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
      }
    }
  
    console.log("Result:", result);
    document.getElementById("result").innerText = result;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
  
    convertButton.addEventListener("click", function () {
      const temperatureInput = document.getElementById("temperatureInput").value;
      const selectedUnit = document.getElementById("unitSelect").value;
      console.log("Temperature Input:", temperatureInput);
      console.log("Selected Unit:", selectedUnit);
      showResult(temperatureInput, selectedUnit);
    });
  });
  