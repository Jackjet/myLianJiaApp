const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,

  /*查询面板子项展开状态维护*/
  showmask: state => state.app.showmaskOntab,
  selectItem: state => state.app.selectItem,
  showtabcontainer: state => state.app.showtabcontainer,
  comfirmTag: state => state.app.comfirmTag,
  roomTabQueryItem: state => state.app.roomTabQueryItem,
  searchlist: state => state.busines.searchHistory
}
export default getters
