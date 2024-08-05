import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip
    let tipHTML = "<ul>";

    for (const tip of database.tips) {
        tipHTML += `<li>${tip.text}</li>
           
        `;
    }
    return tipHTML
};