// export const catchpk = {
//   type: "CATCH"
// };

export const catchpk = pokemon => {
  return {
    type: "CATCH",
    pokemon: pokemon
  };
};

export const deletepk = pokemon => {
  return {
    type: "DELETE",
    pokemon: pokemon
  };
};
