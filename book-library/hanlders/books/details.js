const router = require('express').Router()

router.route('/books/details/:id').get((req, res) => {
  res.render('books/details', {
    url: 'https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/21369302_1445810125455904_9056291391245514932_n.jpg?_nc_cat=0&oh=3f1279bda538318769c9977a753ee959&oe=5C0EFCAA',
    title: 'tities'
  })
})

module.exports = router
