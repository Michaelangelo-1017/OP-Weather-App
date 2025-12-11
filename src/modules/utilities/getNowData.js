function getNowData(weatherData){
    const dateNow = new Date();
    const dateNowArr = dateNow.toString().split(' ');
    const timeNow = dateNowArr[4].slice(0,5);
    const hoursForDay = weatherData.days[0].hours;
    const hoursLeft = hoursForDay.filter(hour => Number(timeNow.slice(0,2)) <= Number(hour.datetime.slice(0,2)));
    return hoursLeft[0];
}

export default getNowData;