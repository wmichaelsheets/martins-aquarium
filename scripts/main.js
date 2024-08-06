import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './filter.js'


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
const locationListElement = document.getElementById("locationList")
const locationHTML = locationList()

if (locationListElement) {
    locationListElement.innerHTML = locationHTML
}else {
    console.error('Could not find element with id "location-list"')
}

const mHFishElement = document.getElementById("mHFishList")
const mHFishHTML = mostHolyFish()

if (mHFishElement) {
    mHFishElement.innerHTML = mHFishHTML
} else {
    console.error('Could not find element with id "mHFishList"')
}

const sFishElement = document.getElementById("sFishList")
const sFishHTML = soldierFish()

if (sFishElement) {
    sFishElement.innerHTML = sFishHTML
} else {
    console.error('Could not find element with id "sFishList"')
}

const rFishElement = document.getElementById("rFishList")
const rFishHTML = regularFish()

if (rFishElement) {
    rFishElement.innerHTML = rFishHTML
} else {
    console.error('Could not find element with id "rFishList"')
}



// Render each HTML string to the correct DOM element
//domReference.innerHTML = `${mHFishElement}${sFishElement}${rFishElement}`

