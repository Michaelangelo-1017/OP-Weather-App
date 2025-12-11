import getCitiesInfo from "../src/modules/data/getCitiesInfo";
import getWeatherData from "../src/modules/data/getWeatherData";
import initEventListeners from "../src/modules/dom/allEventListeners";
import loadDefaultPage from "../src/modules/dom/defaultPage";
import '../src/styles/styles.css'
//Variables
/*const data = await getWeatherData('Luton');
const countriesData = await getCitiesInfo('london engl');
console.log(data);
console.log(countriesData);*/

//Processes


//Functions


//Event Listeners
document.addEventListener('DOMContentLoaded', async ()=>{
    initEventListeners();
    const mainWeatherCont = document.getElementById('main-weather-cont');
    console.log('main-weather-cont element:', mainWeatherCont);
    await loadDefaultPage();
})

//Testing Block