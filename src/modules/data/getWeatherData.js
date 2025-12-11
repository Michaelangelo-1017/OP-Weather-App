async function getWeatherData(location){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BHXTHQFXGG6L7VL83ZDB28FV8`);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(err){
        console.log('Error is : ' + err)
    }
}

export default getWeatherData;