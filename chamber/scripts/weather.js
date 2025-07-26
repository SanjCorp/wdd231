
const apiKey = "2caa00827b68565aa8a32d1c5281896c"; // ← Reemplaza con tu clave real
const city = "Santa Cruz de la Sierra"; // Puedes usar otra ciudad si quieres
const units = "metric"; // Celsius
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data not available");
        const data = await response.json();
        
        const weatherDesc = data.weather[0].description;
        const temperature = Math.round(data.main.temp);
        const humidity = data.main.humidity;

        document.querySelector("#weather-desc").textContent = weatherDesc;
        document.querySelector("#temperature").textContent = `${temperature}°C`;
        document.querySelector("#humidity").textContent = `Humedad: ${humidity}%`;
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        document.querySelector("#weather").textContent = "No se pudo cargar el clima.";
    }
}

getWeather();
