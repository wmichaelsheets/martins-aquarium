import { mostHolyFish, soldierFish, regularFish } from './filter.js'


export const fishToHTML = (fish) => {
    return `
        <div class="fish">
            <h3>${fish.name}</h3>
            <p>Species: ${fish.species}</p>
            <p>Length: ${fish.length}</p>
          
        </div>
    `;
};