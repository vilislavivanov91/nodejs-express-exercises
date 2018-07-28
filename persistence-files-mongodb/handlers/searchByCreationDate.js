const fs = require('fs')
const formidable = require('formidable')
const Image = require('../model/Image')
const date = require('../utility/date')

const searchByCreationDate = (req, res) => {
  if (req.method === 'GET' && req.pathName === '/searchByDate') {
    fs.readFile('./views/searchByCreationDate.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plain'
        })
        res.write('Error')
        res.end()
      } else {
        res.writeHead(200, {
          'content-type': 'text/html'
        })
        res.write(data)
        res.end()
      }
    })
  } else if (req.method === 'POST' && req.pathName === '/searchByDate') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
      if (err) {
        console.log(err)
      } else {
        console.log(fields)
        let fromDate = fields.fromDate
        let toDate = fields.toDate
        let result = Number(fields.result)
        if (!result) {
          result = 10
        }
        if (!fromDate) {
          fromDate = date.getMinDate()
        }
        if (!toDate) {
          toDate = date.getMaxDate()
        }
        Image.find({})
          .where('creationDate').gte(fromDate).lte(toDate).limit(result)
          .then(images => {
            images.forEach(image => {
              console.log(image)
            })
          })
        // if toDate is missing - filter only from fromDate
        // if both are missing do not filter
      }
    })
    res.end()
  } else {
    return true
  }
}

module.exports = searchByCreationDate
