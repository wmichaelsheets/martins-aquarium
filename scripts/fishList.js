import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = "";

    for (const fish of database) {
        fishHTML += `
            <article class="fish">
                <img src="${database.fish.image}" alt="${database.fish.name} poster" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_species">${database.fish.species}</h2>
                    <p class="fish_location">${database.fish.locations}</p>
                </div>
            </article>
        `;
    }
    return fishHTML
};