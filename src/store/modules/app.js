import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
  selectItem:'',
  roomTabQueryItem:[],
  totalQuerl:[],
  comfirmTag:false
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SHOWMASK:(state,show)=>{
      state.showmaskOntab = show
    },
    SHOWTAB:(state,show)=>{
      state.showtabcontainer = show
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
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
