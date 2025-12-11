function getUnit() {
    const toggleSlider = document.querySelector('.toggle-slider');
    return toggleSlider.classList.contains('fahrenheit') ? 'F' : 'C';
}

export default getUnit;