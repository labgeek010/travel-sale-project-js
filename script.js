
import { barcelona, roma, paris, london } from './cities.js'

//obtain DOM elements
let links = document.querySelectorAll('a')
let titleElement = document.getElementById('title')
let subtitleElement = document.getElementById('subtitle')
let paragraphElement = document.getElementById('paragraph')
let priceElement = document.getElementById('price')



//adding a CLICK event for each link
links.forEach ( function (link){
    link.addEventListener('click', function(){
        //REMOVE the active class from all inks
        links.forEach(function (link){
            link.classList.remove('active');
        });

    // add the class 'active' to the current link
    this.classList.add('active')

    //add ACTIVE as it corresponds based on link
    let content = obtainContent(this.textContent)

    titleElement.innerHTML = content.title
    subtitleElement.innerHTML = content.subtitle
    paragraphElement.innerHTML = content.paragraph
    priceElement.innerHTML = content.price
    //shows content in the DOM
    })
});

//function to bring the right info from cities.js
function obtainContent(link){
    let content = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' :  paris,
        'London' : london
    };
    return content[link];
}