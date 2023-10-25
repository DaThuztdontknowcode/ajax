// Gán API Key của bạn vào biến apiKey
const apiKey = 'YOUR_API_KEY';

document.getElementById('searchButton').addEventListener('click', searchGiphy);

function searchGiphy() {
    const searchTerm = document.getElementById('searchInput').value;

    // Gọi API Giphy
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`)
        .then(response => {
            // Xử lý kết quả JSON
            displayResults(response.data);
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
}

function displayResults(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.original.url;
        resultDiv.appendChild(img);
    });
}
