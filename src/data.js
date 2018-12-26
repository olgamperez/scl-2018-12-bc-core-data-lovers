//Todo lo que es filtrar ,
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

window.funciones = {

filterData: (data,condition) => {
  const dataPokemon = data;
  const pokemonGrass = dataPokemon.filter(pokemon => {
    return pokemon.type.indexOf(condition) !== -1 ;
  })
  console.log(pokemonGrass)
  return pokemonGrass
 }
}





//let pokemonGrass = pokemonType.filter(tipo => {
      //return tipo.indexOf("Grass") !== -1;
    //});
  //}
 //}



  //const dataPokemon = POKEMON.pokemon;
  //let pokemonType =[];
  //for (let i=0; i < dataPokemon.length; i++){
    //pokemonType.push(dataPokemon[i].type);
  //}
  //console.log(pokemonType);
 //obtengo todos los pokemones tipo Grass 
//let pokemonGrass = pokemonType.filter(tipo => {
   //return tipo.indexOf("Grass") !== -1;

//});
//console.log(pokemonGrass)

//for (let i=0; i<data.length; i++){ console.log(data[i])} muestra lo que tengo dentro de cada objeto
//for (let i=0; i<data.length; i++){ console.log(data[i].name)} muestra solo los nombres de cada objeto
//for (let i=0; i<data.length; i++){ console.log(data[i]["name"])}
//for (let i=0; i<data.length; i++){ console.log(data[i].type)} arroja los tipos de objetos
 /*let nombres = [];
  for (let i=0; i<data.length; i++){
    nombres.push(data[i].name)
  }
  console.log(nombres) me arroja un array con los nombres*/
  // Para acceder a la imagen  POKEMON.pokemon[1].img

//const data = POKEMON.pokemon 


//console.log(data);
//nombrePokemones(data) // asi se ejecuta automaticamente

//const nombrePokemones =(data) => {
  //console.log(data)
  //let nombres = [];
  //for(let i=0; i<data.lenght; i++){
    //nombres.push(data[i].name);
  //}
  //console.log()
  //return nombres;
//}
//window.nombrePokemones = nombrePokemones;

