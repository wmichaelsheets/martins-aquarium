import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = "";

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_species">${fish.species}</h2>
                    <p class="fish_location">${fish.location}</p>
                </div>
            </article>
        `;
    }
    return fishHTML
};