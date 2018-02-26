import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
  selectItem:'',
  roomTabQueryItem:[],
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
