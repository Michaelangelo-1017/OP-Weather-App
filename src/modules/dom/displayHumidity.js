import getNowData from "../utilities/getNowData";

function displayHumidity(weatherData) {
    const nowData = getNowData(weatherData);
    const humidityCont = document.createElement('div');
    humidityCont.classList.add('extra-weather-info');
    humidityCont.id = 'humidity-cont';
    const humidityTextCont = document.createElement('div');
    humidityTextCont.classList.add('extra-weather-title');
    humidityTextCont.id = 'humidity-title-cont';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = `assets/raindrop.png`;
    humidityIcon.alt = `humidity icon`;
    humidityIcon.id = 'humidity-icon';
    humidityIcon.setAttribute('class', 'weather-icon');
    const humidityTitle = document.createElement('p');
    humidityTitle.textContent = 'Humidity';
    const humidityText = document.createElement('p');
    humidityText.classList.add('slightly-big-text');
    humidityText.textContent = `${Math.round(nowData.humidity)}%`;
    humidityTextCont.append(humidityTitle, humidityText);
    humidityCont.append(humidityIcon, humidityTextCont);
    const extraInfoCont = document.getElementById('extra-info-cont');
    extraInfoCont.appendChild(humidityCont);
}

export default displayHumidity;