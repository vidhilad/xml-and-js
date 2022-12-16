/**
 * Function to get array of all states.
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
    const getGenres = async (token) => {
          const result = await fetch(
            `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
            {
              method: "GET",
              headers: { Authorization: "Bearer " + token },
            }
          );
        
          const data = await result.json();
          return data.categories.items;
        } 

};

const data = await result.json();
  return data.access_token;


module.exports = getAllStates;
