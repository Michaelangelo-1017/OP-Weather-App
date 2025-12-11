import getUnit from "../utilities/getUnit";
import getWeatherIcon from "../utilities/getWeatherIcon";
import temperatureConversion from "../utilities/temperatureConversion";

function displayGalleryContent(weatherData) {
    const timelineGalleryCont = document.getElementById('timeline-gallery-cont');
    const dateNow = new Date();
    const dateNowArr = dateNow.toString().split(' ');
    const timeNow = dateNowArr[4].slice(0,5);
    const hoursForDay = weatherData.days[0].hours;
    const hoursLeft = hoursForDay.filter(hour => Number(timeNow.slice(0,2)) <= Number(hour.datetime.slice(0,2)));
    let galleryItemTime;
    hoursLeft.forEach(hour => {
        const galleryItemCard = document.createElement('div');
        galleryItemCard.setAttribute('class', 'gallery-item-card');
        if(hour.datetime.slice(0,2) === timeNow.slice(0,2)){
            galleryItemTime = document.createElement('p');
            galleryItemTime.textContent = 'Now'
        }
        else{
            galleryItemTime = document.createElement('p');
            galleryItemTime.textContent = hour.datetime.slice(0, 5);
        }
        const currentWeatherIcon = document.createElement('img');
        currentWeatherIcon.src = getWeatherIcon(hour.icon);
        currentWeatherIcon.alt = `${hour.icon} icon`;
        currentWeatherIcon.classList.add('weather-icon');
        const weatherText = document.createElement('p');
        weatherText.innerHTML = `${temperatureConversion(hour.temp)}<sup style="font-size: 0.6em;">o</sup>${getUnit()}`;
        galleryItemCard.append(galleryItemTime, currentWeatherIcon, weatherText);
        timelineGalleryCont.appendChild(galleryItemCard);
    });
}

export default displayGalleryContent;