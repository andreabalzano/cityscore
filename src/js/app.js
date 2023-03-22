//get page elements
const container = document.querySelector('.container');
const form = document.querySelector('.search-box');
const button = document.querySelector('.search-box button');
const error404 = document.querySelector('.not-found');
const cityDetails = document.querySelector('.city-details');

//create the event that execute the API call
form.addEventListener('submit', (e) => {
    e.preventDefault();
    loading();
    findCity();
});
    
//api call using Axios
let response;
async function findCity(){
    let city = document.querySelector('.search-box input').value.replace(/\s/g, '-').toLowerCase();
    axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
    //positive response
    .then( resp => {
        response = resp.data;
    })
    .finally(() => {
        pageResults();
    })
    //error response
    .catch( () => {
        errorMessage();
    });
};

//visualize loading symbol
function loading(){
    //add loading icon
    button.classList.remove('fa-magnifying-glass');
    button.classList.add('fa-spinner');
}

//visualize the API's values on page
function pageResults(){
    //remove error
    error404.style.display = 'none';

    //remove loading
    button.classList.add('fa-magnifying-glass');
    button.classList.remove('fa-spinner');

    //get page elements
    const totalScore = document.getElementById('score');
    const housingValue = document.getElementById('housing-value');
    const StartupValue = document.getElementById('startup-value');
    const costoflifeValue = document.getElementById('costoflife-value');
    const descriptionValue = document.getElementById('description-value');

    //assign API's values
    totalScore.innerHTML = response.teleport_city_score.toFixed(0);
    housingValue.innerHTML = response.categories.at(0).score_out_of_10.toFixed(0);
    costoflifeValue.innerHTML = response.categories.at(1).score_out_of_10.toFixed(0);
    StartupValue.innerHTML = response.categories.at(2).score_out_of_10.toFixed(0);
    descriptionValue.innerHTML = response.summary;
    
    //edit page style
    container.style.height  = 'auto';
    cityDetails.style.display = 'flex';
    cityDetails.classList.add('fade-in');
}

//error message visualize
function errorMessage(){
    container.style.height = '205px';
    cityDetails.style.display = 'none';
    error404.style.display = 'block';
    error404.classList.add('fade-in');
}