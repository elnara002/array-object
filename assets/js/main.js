var game=[
    {
        img:"kine.png" ,
        name:"Kine"
    },
    {
        img:"journey.jpg" ,
        name:"Journey"
    },
    {
        img:"fortnite.avif" ,
        name:"Fortnite"
    },
    {
        img:"world.webp" ,
        name:"World War Z"
    },
    {
        img:"john.jpg" ,
        name:"John Wick Hex"
    },
    {
        img:"cyberpunk.jpg" ,
        name:"Cyberpunk 2077"
    },
    {
        img:"abzu.jpg" ,
        name:"Abzu"
    },
    {
        img:"batman.jpg" ,
        name:"Batman Arkham City"
    },
];

var result = "";

for (let i = 0; i < game.length; i++) {
    result += ` <div class="game-card mx-3">
    <img src="./assets/imgs/${game[i].img}" class="card-img-top" alt="...">
      <p class="mt-2 text-white"> ${game[i].name}</p>
    </div>`;
}
games.innerHTML = result;