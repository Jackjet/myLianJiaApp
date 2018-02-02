const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  showmask: state => state.app.showmaskOntab,
  showtabcontainer: state => state.app.showtabcontainer,
  searchlist: state => state.busines.searchHistory
}
export default getters
