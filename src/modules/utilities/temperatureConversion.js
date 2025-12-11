function temperatureConversion(temp){
    const toggleSlider = document.querySelector('.toggle-slider');
    const temperature = toggleSlider.classList.contains('fahrenheit') ? Math.round(temp) : Math.round((Number(temp)-32)/1.8);
    return temperature;
}

export default temperatureConversion;