let details = document.getElementById("details");

// console.log(id);
// recuperamos el querystring
const id = window.location.search.substr(1).replace("id=", "");
console.log(id); // '?q=pisos+en+barcelona&ciudad=Barcelona'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(window.location.search);
console.log(params);

function Params() {
  return fetch(`https://api.jikan.moe/v3/anime/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
}

async function ParamsId() {
  let response = await Params();
  console.log(response);

  details.innerHTML = `
  <div class="anime">
        <div class="anime__illustration">
          <figure class="anime__figure">
            <img class="anime__img" src=${response.image_url} alt="anime image">
          </figure>
        </div>
        <div class="anime__info">
          <div class="anime-pill">
              <p class="anime-pill__pill anime-pill__pill--rank">#${response.rank}</p>
              <p class="anime-pill__pill anime-pill__pill--genre">${response.genres[2].name}</p>
              <p class="anime-pill__pill anime-pill__pill--premiered">${response.premiered}</p>
          </div>
          <h1 class="anime__title">${response.title}</h1>
          <p class="anime__details">${response.synopsis}</p>
        </div>
      </div>
  `;
}

ParamsId();