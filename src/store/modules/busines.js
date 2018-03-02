import {saveSearch,loadSearch,deleteSearch,clearSearch} from '@/utils/cache'
import {checkIsSaveType,findIndexByQueryTypeInTemp} from '@/utils/index'
let total = []
const busines = {
  state: {
    searchHistory: loadSearch(),
    selectItem:'',
    roomTabQueryItem:[],
    totalQuerl:[],
    comfirmTag:false
  },
  mutations: {

    SET_SEARCH_HISTORY: (state,history) => {
      state.searchHistory = history
    },
    SAVEIROOMTABQUERYITEM:(state,q)=>{
      //传过来的条件都是单一的obj条件
      //现在需要把条件集合到一起
      state.comfirmTag = !state.comfirmTag
      state.roomTabQueryItem = []

      state.roomTabQueryItem = q
    },
    SELECTITEMID:(state,id)=>{
      state.selectItem = id
    },
    SALVETOTALQUERY:(state,item)=>{
      state.totalQuerl.push(item)
    },
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
    },

    saveTotalQuery({commit},item){
     //这里可以直接提交mutation，此处只是演示
      commit('SALVETOTALQUERY', item)
    }
  }
}
export default busines
