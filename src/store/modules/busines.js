import {saveSearch,loadSearch,deleteSearch,clearSearch} from '@/utils/cache'
import {checkIsSaveType,findIndexByQueryType} from '@/utils/index'

function addItem(stateTotal,singleItem) {
  let type = Object.keys(singleItem)
  if(!(checkIsSaveType(stateTotal,type))){
    stateTotal.push(singleItem)
  }else{
    const inserIndex = findIndexByQueryType(stateTotal,type)
    stateTotal[inserIndex] = singleItem
  }
}
const busines = {
  state: {
    locationcity:'',
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
    SET_LOCATION_CITY: (state,city) => {
      state.locationcity = city
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
      const stateTotal = state.totalQuerl
      if(stateTotal.length === 0){
        if(item.length ===1){
          stateTotal.push(item[0])
        }else {
          //首次就选择多条件
          item.forEach((singleItem)=>{
            addItem(stateTotal,singleItem)
          })
        }

      }else{
          // 当为单一的组别条件时候
          if(item.length ===1){
            addItem(stateTotal,item[0])
         }else{
            item.forEach((singleItem)=>{
              addItem(stateTotal,singleItem)
            })
          }
    }
    },
    changeQueryByIndex:(state,index,item)=>{
      state.totalQuerl[index] = item
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
    },

    saveTotalQuery({commit},item){
     //这里可以直接提交mutation，此处只是演示
      commit('SALVETOTALQUERY', item)
    }
  }
}
export default busines
