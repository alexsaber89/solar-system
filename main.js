var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

function logArrayElements(element) {
  el.innerHTML += '<p>' + element + '</p>';
}

planets.forEach(logArrayElements);
console.log(planets);

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map(capitalizeFirstLetter)
function capitalizeFirstLetter(arrayElement) {
  return arrayElement.charAt(0).toUpperCase() + arrayElement.slice(1);
}
console.log(capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsOnlyE = planets.filter(onlyE);
function onlyE(arrayElement) {
  if(arrayElement.indexOf('e') != -1) {
    return arrayElement;
  }
}
console.log(planetsOnlyE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];