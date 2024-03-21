// actions.js
import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
    .catch(error => {
      console.error('Error searching meals by keyword:', error);
    });
}
