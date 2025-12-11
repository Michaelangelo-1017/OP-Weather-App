import capitaliser from "../utilities/capitaliser";
import getNowData from "../utilities/getNowData";

function displayFeelsLikeCard(weatherData) {
    const infoCont = document.querySelector('.info-cont');
    const mainWeatherCont = document.getElementById('main-weather-cont');
    const feelsLikeCont = document.createElement('div');
    feelsLikeCont.setAttribute('id', 'feels-like-cont');
    feelsLikeCont.setAttribute('class', 'weather-card');
    const toggleSlider = document.querySelector('.toggle-slider');
    const nowData = getNowData(weatherData);
    const degreeUnit = toggleSlider.classList.contains('fahrenheit') ? 'F' : 'C';
    const feelsLike = toggleSlider.classList.contains('fahrenheit') ? Math.round(nowData.feelslike) : Math.round((Number(nowData.feelslike)-32)/1.8);
    const feelsLikeTitle = document.createElement('p');
    feelsLikeTitle.textContent = 'Feels Like';
    const feelsLikeText = document.createElement('p');
    feelsLikeText.classList.add('big-text');
    feelsLikeText.textContent = `${feelsLike}°${degreeUnit}`;
    const weatherTypeText = document.createElement('p');
    weatherTypeText.textContent = capitaliser(weatherData.currentConditions.icon.replaceAll('-', ' '));
    feelsLikeCont.append(feelsLikeTitle, feelsLikeText, weatherTypeText);
    mainWeatherCont.appendChild(feelsLikeCont);
}

export default displayFeelsLikeCard;