const getData = async(url) => {
    try {
        // делаем заприс, и ждем его результат из await
        const response = await fetch(url);
        // парсим в формат json
        const data = await response.json();
        console.log(data);
        // ловим ошибку
    } catch (error) {
        console.log(`что-то не работает ${error}`);
    }
}
getData('https://api.nasa.gov/planetary/apod?api_key=TK4SiBhkoEdB6HmfmK8YdNwfRVd5cgQWrnTvZ89k&count=10'); // после ключа можно жописать разные темы например count