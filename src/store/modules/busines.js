import {saveSearch,loadSearch} from '@/utils/cache'

const busines = {
  state: {
    searchHistory: loadSearch()
  },
  mutations: {
    SET_SEARCH_HISTORY: state => {
      state.searchHistory = history
    }
  },
  actions: {
    saveSearchHistory({commit}, query) {
      commit('SET_SEARCH_HISTORY', saveSearch(query));
    }
  }
}
export default busines
