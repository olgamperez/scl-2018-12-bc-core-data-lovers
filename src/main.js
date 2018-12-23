
//´<img src="${POKEMON.pokemon[1].img}" alt="">
//document.getElementById(`root`).innerHTML= ´<img src=" ´ + POKEMON.pokemon[1].img ´ " alt=""></img>´

//document.write(resultNameFilter);
//document.getElementById("btn").addEventListener("click", () => {
//   for (let i=0; i < result.length; i++) {
//       document.getElementById("root").innerHTML += (result)[i];
//   }
//});

document.getElementById("option-order").addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    if (document.getElementById("option-order").value === "az" || document.getElementById("option-order").value === "za"){
        for(let i=0; i <POKEMON.pokemon.length; i++){
            document.getElementById("root").innerHTML += `${window.POKEMON.sortData(POKEMON.pokemon, "name", document.getElementById("option-order").value)[i].name} <br>`;
        }
    }
    if(document.getElementById("option-order").value === "small-big" || document.getElementById("option-order").value === "big-small") {
        for(let i=0; i <POKEMON.pokemon.length; i++){
            document.getElementById("root").innerHTML += `${window.POKEMON.sortData(POKEMON.pokemon, "num", document.getElementById("option-order").value)[i].num} <br>`;
        }
    }
});