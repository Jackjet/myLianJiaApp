const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,

  /*查询面板子项展开状态维护*/
  showmask: state => state.app.showmaskOntab,
  showtabcontainer: state => state.app.showtabcontainer,

  locationcity: state => state.busines.locationcity,
  selectItem: state => state.busines.selectItem,
  comfirmTag: state => state.busines.comfirmTag,
  totalQuerl: state => state.busines.totalQuerl,
  roomTabQueryItem: state => state.busines.roomTabQueryItem,
  searchlist: state => state.busines.searchHistory

}
export default getters
