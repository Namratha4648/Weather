async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "a4caeba246f704acb7735d8dfe78bc85"; // Replace with your working API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.cod === 200) {
            document.getElementById("weather").innerHTML = 
                `<p><strong>${data.name}</strong></p>
                 <p>🌡️ ${data.main.temp}°C</p>
                 <p>🌥️ ${data.weather[0].description}</p>
                 <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">`;
        } else {
            document.getElementById("weather").innerHTML = `❌ ${data.message}`;
        }
    } catch (error) {
        document.getElementById("weather").innerHTML = "❌ Error fetching data!";
    }
}