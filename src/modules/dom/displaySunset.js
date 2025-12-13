import sunsetIconImg from "../../assets/weather/sunset.png";

function displaySunset(weatherData) {
    const sunsetCont = document.createElement('div');
    sunsetCont.classList.add('extra-weather-info');
    sunsetCont.id = 'sunset-cont';
    const sunsetTextCont = document.createElement('div');
    sunsetTextCont.classList.add('extra-weather-title');
    sunsetTextCont.id = 'sunset-title-cont';
    const sunsetIcon = document.createElement('img');
    sunsetIcon.src = sunsetIconImg;
    sunsetIcon.alt = `sunset icon`;
    sunsetIcon.id = 'sunset-icon';
    sunsetIcon.setAttribute('class', 'weather-icon');
    const sunsetTitle = document.createElement('p');
    sunsetTitle.textContent = 'Sunset';
    const sunsetText = document.createElement('p');
    sunsetText.classList.add('slightly-big-text');
    sunsetText.textContent = `${(weatherData.currentConditions.sunset).slice(0, 5)}`;
    sunsetTextCont.append(sunsetTitle, sunsetText);
    sunsetCont.append(sunsetIcon, sunsetTextCont);
    const extraInfoCont = document.getElementById('extra-info-cont');
    extraInfoCont.appendChild(sunsetCont);
}

export default displaySunset;