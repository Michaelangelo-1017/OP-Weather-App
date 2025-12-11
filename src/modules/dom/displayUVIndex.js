function displayUVIndex(weatherData) {
    const uvCont = document.createElement('div');
    uvCont.classList.add('extra-weather-info');
    uvCont.id = 'uv-cont';
    const uvTextCont = document.createElement('div');
    uvTextCont.classList.add('extra-weather-title');
    uvTextCont.id = 'uv-title-cont';
    const uvIndexIcon = document.createElement('img');
    uvIndexIcon.src = `assets/clear-day.png`;
    uvIndexIcon.alt = `UV index icon`;
    uvIndexIcon.id = 'uv-index-icon';
    uvIndexIcon.setAttribute('class', 'weather-icon');
    const uvTitle = document.createElement('p');
    uvTitle.textContent = 'UV Index';
    const uvText = document.createElement('p');
    uvText.classList.add('slightly-big-text');
    uvText.textContent = `${weatherData.currentConditions.uvindex}`;
    uvTextCont.append(uvTitle, uvText);
    uvCont.append(uvIndexIcon, uvTextCont);
    const extraInfoCont = document.getElementById('extra-info-cont');
    extraInfoCont.appendChild(uvCont);
}

export default displayUVIndex;