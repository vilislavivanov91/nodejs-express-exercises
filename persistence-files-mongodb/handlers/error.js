const errorHandler = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/plain'
  })
  res.write('Page not found')
  res.end()
}

module.exports = errorHandler
