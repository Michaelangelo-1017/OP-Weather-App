import getNowData from "../utilities/getNowData";
import getUnit from "../utilities/getUnit";
import getWeatherIcon from "../utilities/getWeatherIcon";
import temperatureConversion from "../utilities/temperatureConversion";

function displayTempCard(weatherData) {
    //Variables
    const toggleSlider = document.querySelector('.toggle-slider');
    const mainWeatherCont = document.getElementById('main-weather-cont');
    const maxTemp = toggleSlider.classList.contains('fahrenheit') ? Math.round(weatherData.days[0].tempmax) : Math.round((Number(weatherData.days[0].tempmax)-32)/1.8);
    const minTemp = toggleSlider.classList.contains('fahrenheit') ? Math.round(weatherData.days[0].tempmin) : Math.round((Number(weatherData.days[0].tempmin)-32)/1.8);
    const dateNow = new Date();
    const nowData = getNowData(weatherData);
    
    //Create Temperature Container & Card
    const mainTempCont = document.createElement('div');
    mainTempCont.id = 'main-temp-cont';
    mainTempCont.classList.add('weather-card');
    const tempDate = document.createElement('p');
    const dateOptions = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    tempDate.textContent = `${dateNow.toLocaleDateString('en-GB', dateOptions)}`;
    const actualTempCont = document.createElement('div');
    actualTempCont.id = 'actual-temp-cont';
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `${getWeatherIcon(weatherData.currentConditions.icon)}`;
    weatherIcon.alt = `${weatherData.currentConditions.icon} icon`;
    weatherIcon.id = 'main-weather-icon';
    weatherIcon.setAttribute('class', 'weather-icon');
    const weatherText = document.createElement('p');
    weatherText.setAttribute('class', 'big-text');
    weatherText.innerHTML = `${temperatureConversion(nowData.temp)}<sup style="font-size: 0.6em;">o</sup>${getUnit()}`;
    const tempRange = document.createElement('p');
    tempRange.innerHTML = `Max: ${maxTemp}<sup style="font-size: 0.6em;">o</sup>${getUnit()}, Min: ${minTemp}<sup style="font-size: 0.6em;">o</sup>${getUnit()}`;
    //Append elements to relevant containers
    actualTempCont.append(weatherIcon,weatherText);
    mainTempCont.append(tempDate, actualTempCont, tempRange);
    mainWeatherCont.appendChild(mainTempCont);
}

export default displayTempCard;