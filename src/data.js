window.pokemones = {
//Suma las debilidades (electrico la mas repetida)
//  computeStatsWeak: (data,type) =>{
//    const dataPokemon = data;
//    let sum = 0;
//    dataPokemon.forEach(element =>{
//      if(element.weaknesses.indexOf(type) !== -1){
//        sum++ 
//      }
//    })
//    return sum 
//  },
//  computeStatsWeak: (data,type,type1) =>{
//    const dataPokemon = data;
//    let sum = 0;
//    dataPokemon.forEach(element =>{
//      if(element.type.indexOf(type) !== -1 && element.weaknesses.indexOf(type1) !== -1){
//        sum++ 
//      }
//    })
//    return sum 
//  },
//Lo oficial de aqui hacia abajo 
  computeStats: (data,type) =>{
    const dataPokemon = data;
    let sum = 0;
    dataPokemon.forEach(element =>{
      if(element.type.indexOf(type) !== -1){
        sum++ 
      }
    })
    return sum 
  },

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