import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishListElement = document.getElementById('fishList')
const fishHTML = fishList()

if (fishListElement) {
    fishListElement.innerHTML = fishHTML
} else {
    console.error('Could not find element with id "fish-list"')
};

// Generate the care tips
const tipListElement = document.getElementById('tipList')
const tipHTML = tipList()

if (tipListElement) {
    tipListElement.innerHTML = tipHTML
} else {
    console.error('Could not find element with id "tip-list"')
}

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element