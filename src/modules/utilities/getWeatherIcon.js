function getWeatherIcon(weather){
    const icons = {
        'clear-day': '/assets/clear-day.png',
        'clear-night': '/assets/clear-night.png',
        'cloudy': '/assets/cloudy.png',
        'partly-cloudy-day': '/assets/partly-cloudy-day.png',
        'partly-cloudy-night': '/assets/partly-cloudy-night.png',
        'rain': '/assets/rain.png',
        'showers-day': '/assets/showers-day.png',
        'showers-night': '/assets/showers-night.png',
        'snow': '/assets/snow.png',
        'snow-showers-day': '/assets/snow-showers-day.png',
        'snow-showers-night': '/assets/snow-showers-night.png',
        'thunderstorm': '/assets/thunderstorm.png',
        'wind': '/assets/wind.png',
        'fog': '/assets/fog.png',
        'hail': '/assets/hail.png',
        'sleet': '/assets/sleet.png'
    };
    return icons[weather] || '/assets/clear-day.png';
}

export default getWeatherIcon;