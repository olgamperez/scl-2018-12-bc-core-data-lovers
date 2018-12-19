/*let nombres =[];
for (let i=0; i<data.length;i++){
    console.log(data[i].name);
    //console.log(data[i]["name"]);
}

console.log(nombres)

//´<img src="${POKEMON.pokemon[1].img}" alt="">
//document.getElementById(`root`).innerHTML= ´<img src=" ´ + POKEMON.pokemon[1].img ´ " alt=""></img>´

for (let i=0; i<dataPokemon.length; i++){
    console.log(dataPokemon[i].type);}*/
//document.write(resultNameFilter);
document.getElementById("btn").addEventListener("click", () => {
   for (let i=0; i < result.length; i++) {
       document.getElementById("root").innerHTML += (result)[i];
   }
});