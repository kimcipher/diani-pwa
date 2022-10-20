sessionStorage.clear()

localStorage.clear()

caches.keys().then(keys => {
  keys.forEach(key => caches.delete(key))
})

indexedDB.databases().then(dbs => {
  dbs.forEach(db => indexedDB.deleteDatabase(db.name))
})

document.cookie = document.cookie.split(';').reduce((newCookie1, keyVal) => {
  var pair = keyVal.trim().split('=')
  if (pair[0]) {
    if (pair[0] !== 'path' && pair[0] !== 'expires') {
      newCookie1 += pair[0] + '=;'
    }
  }
  return newCookie1
}, 'expires=Tu, 01 Jan 2030 00:00:00 UTC; path:/;')