function displaySunrise(weatherData) {
    const sunriseCont = document.createElement('div');
    sunriseCont.classList.add('extra-weather-info');
    sunriseCont.id = 'sunrise-cont';
    const sunriseTextCont = document.createElement('div');
    sunriseTextCont.classList.add('extra-weather-title');
    sunriseTextCont.id = 'sunrise-title-cont';
    const sunriseIcon = document.createElement('img');
    sunriseIcon.src = `assets/sunrise.png`;
    sunriseIcon.alt = `sunrise icon`;
    sunriseIcon.id = 'sunrise-icon';
    sunriseIcon.setAttribute('class', 'weather-icon');
    const sunriseTitle = document.createElement('p');
    sunriseTitle.textContent = 'Sunrise';
    const sunriseText = document.createElement('p');
    sunriseText.classList.add('slightly-big-text');
    sunriseText.textContent = `${(weatherData.currentConditions.sunrise).slice(0, 5)}`;
    sunriseTextCont.append(sunriseTitle, sunriseText);
    sunriseCont.append(sunriseIcon, sunriseTextCont);
    const extraInfoCont = document.getElementById('extra-info-cont');
    extraInfoCont.appendChild(sunriseCont);
}

export default displaySunrise;