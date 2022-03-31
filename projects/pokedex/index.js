const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("error.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeName=data.name;
            document.getElementById("name").textContent=`${pokeName}`.toUpperCase();
            document.getElementById("type").textContent=`${data.types[0].type.name}`.toUpperCase();
            document.getElementById("move1").textContent=`${data.moves[7].move.name}`.toLowerCase();
            document.getElementById("move2").textContent=`${data.moves[3].move.name}`.toLowerCase();
            document.getElementById("move3").textContent=`${data.moves[10].move.name}`.toLowerCase();
            document.getElementById("move4").textContent=`${data.moves[20].move.name}`.toLowerCase();
            document.getElementById("ps").textContent=`${data.stats[0].base_stat}`.toLowerCase();
            document.getElementById("atk").textContent=`${data.stats[1].base_stat}`.toLowerCase();
            document.getElementById("def").textContent=`${data.stats[2].base_stat}`.toLowerCase();
            document.getElementById("spatk").textContent=`${data.stats[3].base_stat}`.toLowerCase();
            document.getElementById("spdef").textContent=`${data.stats[4].base_stat}`.toLowerCase();
            document.getElementById("spd").textContent=`${data.stats[5].base_stat}`.toLowerCase();
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
