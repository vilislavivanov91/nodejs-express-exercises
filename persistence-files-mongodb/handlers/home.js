const homeHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/') {
    res.writeHead(200, {
      'content-type': 'text/plain'
    })
    res.write('Hello from home handler')
    res.end()
  } else {
    return true
  }
}

module.exports = homeHandler
