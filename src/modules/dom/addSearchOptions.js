function addSearchOptions(citiesData){
    const searchOptionsCont = document.getElementById('search-options-cont');
    searchOptionsCont.innerHTML = '';
    const cityDataOnly = citiesData[0]['filteredCityData'];
    const countryDataOnly = citiesData[1]['filteredCountryData'];
    if(!cityDataOnly.length && !countryDataOnly.length){
        const optionEl = document.createElement('span');
        optionEl.setAttribute('class','search-option');
        optionEl.innerText = `City not found!`;
        searchOptionsCont.appendChild(optionEl);
        return;
    }
    else if(cityDataOnly.length < 10 && (cityDataOnly.length + countryDataOnly.length >= 10)){
        for(let i = 0; i < cityDataOnly.length; i++){
            console.log('This ran I guess')
            const cityData = cityDataOnly[i];
            const optionEl = document.createElement('span');
            optionEl.setAttribute('class','search-option');
            optionEl.innerText = `${cityData.city}, ${cityData.country}, ${cityData.iso3}`;
            optionEl.id = `${cityData.city}`;
            searchOptionsCont.appendChild(optionEl);
        }
        if(countryDataOnly.length){
            for(let i = 0; i < 10 - cityDataOnly.length; i++){
                console.log('This definitely ran')
                const countryData = countryDataOnly[i];
                const optionEl = document.createElement('span');
                optionEl.setAttribute('class','search-option');
                optionEl.innerText = `${countryData.country}, ${countryData.iso3}`;
                optionEl.id = `${countryData.country}`;
                searchOptionsCont.appendChild(optionEl);
            }
        }
    }
    else if(cityDataOnly.length < 10 && (cityDataOnly.length + countryDataOnly.length < 10)){
        for(let i = 0; i < cityDataOnly.length; i++){
            console.log('This ran I guess')
            const cityData = cityDataOnly[i];
            const optionEl = document.createElement('span');
            optionEl.setAttribute('class','search-option');
            optionEl.innerText = `${cityData.city}, ${cityData.country}, ${cityData.iso3}`;
            optionEl.id = `${cityData.city}`;
            searchOptionsCont.appendChild(optionEl);
        }
        if(countryDataOnly.length){
            for(let i = 0; i < countryDataOnly.length; i++){
                console.log('This definitely ran')
                const countryData = countryDataOnly[i];
                const optionEl = document.createElement('span');
                optionEl.setAttribute('class','search-option');
                optionEl.innerText = `${countryData.country}, ${countryData.iso3}`;
                optionEl.id = `${countryData.country}`;
                searchOptionsCont.appendChild(optionEl);
            }
        }
    }
    else{
        for(let i = 0; i < 10; i++){
            const cityData = cityDataOnly[i];
            const optionEl = document.createElement('span');
            optionEl.setAttribute('class','search-option');
            optionEl.innerText = `${cityData.city}, ${cityData.country}, ${cityData.iso3}`;
            optionEl.id = `${cityData.city}`;
            searchOptionsCont.appendChild(optionEl);
        }
    }
    
}

export default addSearchOptions;