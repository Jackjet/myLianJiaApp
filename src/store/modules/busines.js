import {saveSearch,loadSearch,deleteSearch,clearSearch} from '@/utils/cache'

const busines = {
  state: {
    searchHistory: loadSearch()
  },
  mutations: {

    SET_SEARCH_HISTORY: (state,history) => {
      state.searchHistory = history
    }
  },
  actions: {
    saveSearchHistory({commit}, query) {
      commit('SET_SEARCH_HISTORY', saveSearch(query));
    },
    deleteSearchHistory({commit},query){
      commit('SET_SEARCH_HISTORY', deleteSearch(query))
    },
    clearSearchHistory({commit}){
      commit('SET_SEARCH_HISTORY', clearSearch())
    }
  }
}
export default busines
