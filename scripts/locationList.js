import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate an HTML representation of each location
    let locationHTML = "";

    for (const loc of database.locations) {
        locationHTML += `
            <article class="locations">
                <section class="location">
                    <h2 class="name">${loc.name}</h2>
                    <p class="country">${loc.country}</p>
                    <p class="description">${loc.description}</p>
                </section>
            </article>
        `;
    }
    return locationHTML
};