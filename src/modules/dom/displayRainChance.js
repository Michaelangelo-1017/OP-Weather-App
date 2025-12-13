import getNowData from "../utilities/getNowData";
import rainIconImg from "../../assets/weather/rain.png";

function displayRainChance(weatherData) {
    const nowData = getNowData(weatherData);
    const rainChanceCont = document.createElement('div');
    rainChanceCont.classList.add('extra-weather-info');
    rainChanceCont.id = 'rain-chance-cont';
    const rainChanceTextCont = document.createElement('div');
    rainChanceTextCont.classList.add('extra-weather-title');
    rainChanceTextCont.id = 'rain-chance-title-cont';
    const rainChanceIcon = document.createElement('img');
    rainChanceIcon.src = rainIconImg;
    rainChanceIcon.alt = `rain-chance icon`;
    rainChanceIcon.id = 'rain-chance-icon';
    rainChanceIcon.setAttribute('class', 'weather-icon');
    const rainChanceTitle = document.createElement('p');
    rainChanceTitle.textContent = 'Chance of Rain';
    const rainChanceText = document.createElement('p');
    rainChanceText.classList.add('slightly-big-text');
    rainChanceText.textContent = `${Math.round(nowData.precipprob)}%`;
    rainChanceTextCont.append(rainChanceTitle, rainChanceText);
    rainChanceCont.append(rainChanceIcon, rainChanceTextCont);
    const extraInfoCont = document.getElementById('extra-info-cont');
    extraInfoCont.appendChild(rainChanceCont);
}

export default displayRainChance;