import getNowData from "../utilities/getNowData";

function displayWindCard(weatherData) {
    const windCont = document.createElement('div');
    const mainWeatherCont = document.getElementById('main-weather-cont');
    windCont.classList.add('weather-card');
    windCont.id = 'wind-cont';
    const windTitle = document.createElement('p');
    windTitle.textContent = 'Wind';
    const windText = document.createElement('p');
    windText.classList.add('big-text');
    const nowData = getNowData(weatherData);
    windText.textContent = `${Math.round(nowData.windspeed)}mph`;
    const gustText = document.createElement('p');
    gustText.textContent = `Gusts: ${Math.round(nowData.windgust)}mph`;
    windCont.append(windTitle, windText, gustText);
    mainWeatherCont.appendChild(windCont);
}

export default displayWindCard;