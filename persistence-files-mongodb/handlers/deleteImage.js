const url = require('url')
const Image = require('../model/Image')

const deleteImageHandler = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/delete') {
    const query = url.parse(req.url).query
    const id = query.split('=')[1]
    Image.findByIdAndRemove(id, () => {

    })
    res.writeHead(302, {
      'location': '/results'
    })
    res.end()
  } else {
    return true
  }
}

module.exports = deleteImageHandler
