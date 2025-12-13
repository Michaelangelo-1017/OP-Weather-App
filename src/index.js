import initEventListeners from "./modules/dom/allEventListeners";
import loadDefaultPage from "./modules/dom/defaultPage";
import './styles/styles.css';

document.addEventListener('DOMContentLoaded', async ()=>{
    initEventListeners();
    await loadDefaultPage();
})

//Testing Block