window.pokemones = {

//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos 
//estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
  
  //computeStats: (data) =>{},



  filterData: (data,condition) => {
  const dataPokemon = data;
  const pokemonResultFilter = dataPokemon.filter(pokemon => {
    return pokemon.type.indexOf(condition) !== -1 ;
  })
  return pokemonResultFilter
 },

sortData: (data, sortBy, sortOrder) => {
  const dataPokemon = data
  if (sortBy === "name" && sortOrder === "az"){
    dataPokemon.sort((prev, next)=> {
      if (prev.name > next.name) {
        return 1;
      }
      if (prev.name < next.name) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "name" && sortOrder === "za"){
    dataPokemon.sort((prev, next)=> {
      if (prev.name < next.name) {
        return 1;
      }
      if (prev.name > next.name) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "num" && sortOrder === "small-big"){
    dataPokemon.sort((prev, next)=> {
      if (prev.id > next.id) {
        return 1;
      }
      if (prev.id < next.id) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "num" && sortOrder === "big-small"){
    dataPokemon.sort((prev, next)=> {
      if (prev.id < next.id) {
        return 1;
      }
      if (prev.id > next.id) {
        return -1;
      }
      return 0;
    })
  }
  return dataPokemon
 }
}