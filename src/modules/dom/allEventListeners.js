import getCitiesInfo from "../data/getCitiesInfo";
import addSearchOptions from "./addSearchOptions";
import loadPage from "./loadPage";

function initEventListeners(){
    const searchBar = document.getElementById('location-search');
    const searchOptionsCont = document.getElementById('search-options-cont');
    const toggleBtn = document.getElementById('toggle-btn');
    const toggleSlider = document.querySelector('.toggle-slider');

    toggleBtn.addEventListener('click',()=>{
        toggleSlider.classList.toggle('fahrenheit');
        loadPage(searchBar.value || `Luton`);
    })

    searchBar.addEventListener('input', async (e)=>{
        console.log('it works')
        const value = e.target.value;
        console.log(`Value is : ${value}`);
        if(value.trim() === ''){
            searchOptionsCont.classList.add('invisible');
        }else{
            searchOptionsCont.classList.remove('invisible');
        }
        const citiesData = await getCitiesInfo(value);
        console.log(citiesData);
        addSearchOptions(citiesData);
        
    })

    document.addEventListener('click',()=>{
        if(!searchOptionsCont.classList.contains('invisible')){
            searchOptionsCont.classList.add('invisible');
        }
    })

    searchOptionsCont.addEventListener('click',(e)=>{
        if(e.target.classList.contains('search-option')){
            searchBar.value = e.target.id;
            searchOptionsCont.classList.add('invisible');
            loadPage(e.target.id);
        }
    })
}

export default initEventListeners;