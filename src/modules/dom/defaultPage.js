import getCitiesInfo from "../data/getCitiesInfo";
import getWeatherData from "../data/getWeatherData";
import getWeatherIcon from "../utilities/getWeatherIcon";
import displayFeelsLikeCard from "./displayFeelsLikeCard";
import displayGalleryContent from "./displayGalleryContent";
import displayHumidity from "./displayHumidity";
import displayLocationName from "./displayLocationName";
import displayRainChance from "./displayRainChance";
import displaySunrise from "./displaySunrise";
import displaySunset from "./displaySunset";
import displayTempCard from "./displayTempCard";
import displayUVIndex from "./displayUVIndex";
import displayWindCard from "./displayWindCard";
import displayLoading from "../utilities/displayLoading";

async function loadDefaultPage(){
    displayLoading();
    const infoCont = document.querySelector('.info-cont');
    infoCont.innerHTML = '';
    const mainWeatherCont = document.createElement('div');
    mainWeatherCont.id = 'main-weather-cont';
    mainWeatherCont.innerHTML = '';
    const extraInfoCont = document.createElement('div');
    extraInfoCont.id = 'extra-info-cont';
    extraInfoCont.innerHTML = '';
    const timelineGalleryCont = document.createElement('div');
    timelineGalleryCont.id = 'timeline-gallery-cont';
    timelineGalleryCont.innerHTML = '';
    //Create Weather Container
    const weatherData = await getWeatherData('Luton');
    const defaultCityInfo = await getCitiesInfo('Luton');
    const loading = document.getElementById('loading');
    document.body.removeChild(loading);
    const cityData = defaultCityInfo[0]['filteredCityData'][0];
    displayLocationName(cityData);
    infoCont.appendChild(mainWeatherCont);
    displayTempCard(weatherData);
    displayFeelsLikeCard(weatherData);
    displayWindCard(weatherData);
    infoCont.appendChild(extraInfoCont);
    displayUVIndex(weatherData);
    displayHumidity(weatherData);
    displayRainChance(weatherData);
    displaySunrise(weatherData);
    displaySunset(weatherData);
    infoCont.appendChild(timelineGalleryCont);
    displayGalleryContent(weatherData);
}

export default loadDefaultPage;
