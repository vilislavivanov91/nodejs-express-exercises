const errorHandler = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/plain'
  })
  res.write('Erorr!')
  res.end()
}

module.exports = errorHandler
