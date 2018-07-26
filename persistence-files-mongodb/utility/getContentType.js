const getContentType = pathName => {
  if (pathName.endsWith('.html')) {
    return 'text/html'
  } else if (pathName.endsWith('.js')) {
    return 'application/json'
  } else if (pathName.endsWith('.css')) {
    return 'text/css'
  } else if (pathName.endsWith('.ico')) {
    return 'image/x-icon'
  } else if (pathName.endsWith('.jpg')) {
    return 'image/jpeg'
  }
}

module.exports = getContentType
