async function getCitiesInfo(letters){
    letters = letters.toLowerCase();
    try{
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const allData = await response.json();
        console.log(allData)
        const filteredCityData = [];

        //This will filter the array gotten from the API to get the cities that includes the letters we are searching for with the search bar
        allData.data.forEach((theData,index,array) => {
            for(const city of theData.cities){
                if(city.toLowerCase().includes(letters)){
                    filteredCityData.push({'city' : city, 'country' : array[index].country,'iso3' : array[index].iso3, 'iso2': array[index].iso2});
                }
            }
        });
        //const countriesMappedArr = filteredCityData.map(obj=>obj.country);

        //This will sort the filteredCityData so that any city that actually starts with those letters will be shown first and anyone else that just includes the letters will be showed after
        filteredCityData.sort((a,b)=>{
            const aIsTarget = a.city.slice(0,letters.length).toLowerCase() === letters;
            const bIsTarget = b.city.slice(0,letters.length).toLowerCase() === letters;
            if(aIsTarget && !bIsTarget) return -1;
            if(!aIsTarget && bIsTarget) return 1;
            return a.city.localeCompare(b.city);
        });

        const filteredCountryData = allData.data.filter(place=> place.country.toLowerCase().includes(letters));
        console.log(filteredCountryData);
        return [{'filteredCityData' : filteredCityData},{'filteredCountryData' : filteredCountryData}];
    }catch(err){
        console.log(`getCountriesInfo Error is : ${err}`)
    }
}

export default getCitiesInfo;