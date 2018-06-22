export function getRoot () {
  let href = window.location.href
  return href.slice(0, href.indexOf('/', 13))
}

export function getRouteUrl (path) {
  return getRoot() + '/index.html#/' + path
}
