// Import all weather icons
import clearDayIcon from '../../assets/weather/clear-day.png';
import clearNightIcon from '../../assets/weather/clear-night.png';
import cloudyIcon from '../../assets/weather/cloudy.png';
import partlyCloudyDayIcon from '../../assets/weather/partly-cloudy-day.png';
import partlyCloudyNightIcon from '../../assets/weather/partly-cloudy-night.png';
import rainIcon from '../../assets/weather/rain.png';
import showersDayIcon from '../../assets/weather/showers-day.png';
import showersNightIcon from '../../assets/weather/showers-night.png';
import snowIcon from '../../assets/weather/snow.png';
import snowShowersDayIcon from '../../assets/weather/snow-showers-day.png';
import snowShowersNightIcon from '../../assets/weather/snow-showers-night.png';
import thunderstormIcon from '../../assets/weather/thunderstorm.png';
import windIcon from '../../assets/weather/wind.png';
import fogIcon from '../../assets/weather/fog.png';
import hailIcon from '../../assets/weather/hail.png';
import sleetIcon from '../../assets/weather/sleet.png';

function getWeatherIcon(weather) {
    const icons = {
        'clear-day': clearDayIcon,
        'clear-night': clearNightIcon,
        'cloudy': cloudyIcon,
        'partly-cloudy-day': partlyCloudyDayIcon,
        'partly-cloudy-night': partlyCloudyNightIcon,
        'rain': rainIcon,
        'showers-day': showersDayIcon,
        'showers-night': showersNightIcon,
        'snow': snowIcon,
        'snow-showers-day': snowShowersDayIcon,
        'snow-showers-night': snowShowersNightIcon,
        'thunderstorm': thunderstormIcon,
        'wind': windIcon,
        'fog': fogIcon,
        'hail': hailIcon,
        'sleet': sleetIcon
    };
    
    return icons[weather] || clearDayIcon;
}

export default getWeatherIcon;