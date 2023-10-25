// Gán API Key của bạn vào biến apiKey
const apiKey = 'YOUR_API_KEY';

document.getElementById('searchButton').addEventListener('click', searchWeather);

function searchWeather() {
    const city = document.getElementById('cityInput').value;

    // Gọi API OpenWeatherMap
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            // Xử lý kết quả JSON
            displayWeather(response.data);
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
}

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const temperature = data.main.temp;
    const description = data.weather[0].description;

    resultDiv.innerHTML = `Thời tiết hiện tại ở ${data.name}: ${temperature}°C, ${description}`;
}
