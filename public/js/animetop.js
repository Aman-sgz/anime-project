let ran = document.getElementById("ran");

function Numberten() {
    return fetch("https://api.jikan.moe/v3/genre/anime/2/1")
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  }
  
 async function Numberesponse() {
  let red = await Numberten();
  let count = 0
  console.log(red.anime);
  red.anime.map((item, index) => {
    if (index > 20 && index < 31) {
      count +=1
      console.log(index)
      return (ran.innerHTML += `
        <section class="ranking">
          <div class="ranking__header">
              <p class="ranking__number">${count}</p>
              <h2 class="ranking__title">${item.title}</h2>    
          </div>

          <div class= "ranking__container">
            <div class="ranking__left">
              <figure class="ranking__figure">
                  <img class="ranking__img" src=${item.image_url} alt="anime image">
              </figure>
            </div>
            <div class="ranking__right">
              <div class="anime-pill">
                <p class="anime-pill__pill anime-pill__pill--genre">${item.genres[2].name}</p>
                <p class="anime-pill__pill anime-pill__pill--type">${item.type}</p>
              </div>
                <p class="ranking__details">${item.synopsis}</p>
            </div>
          </div>
        </section>
        `);
    }
  });
}

Numberesponse();