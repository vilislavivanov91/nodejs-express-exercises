const allMemes = [
  // {
  //   id: 0,
  //   memeSrc: 'https://afinde-production.s3.amazonaws.com/uploads/99db2206-b2ab-47d8-8c80-0411563474d5.jpg',
  //   description: 'first desc',
  //   title: 'first title',
  //   posterSrc: 'https://afinde-production.s3.amazonaws.com/uploads/99db2206-b2ab-47d8-8c80-0411563474d5.jpg'
  // },
  // {
  //   id: 1,
  //   memeSrc: 'https://i.kym-cdn.com/photos/images/newsfeed/000/250/007/672.jpg',
  //   posterSrc: 'https://i.kym-cdn.com/photos/images/newsfeed/000/250/007/672.jpg',
  //   description: 'second desc',
  //   title: 'second title'
  // },
  // {
  //   id: 2,
  //   memeSrc: 'http://www.theyucatantimes.com/wp-content/uploads/2017/02/trump-meme.jpg',
  //   posterSrc: 'http://www.theyucatantimes.com/wp-content/uploads/2017/02/trump-meme.jpg',
  //   description: 'thirth desc',
  //   title: 'thirth title'
  // },
  // {
  //   id: 3,
  //   memeSrc: 'https://steemitimages.com/DQmYfiDGFmZsgkpq6XPE3WssU6CK9SagBUCHyWVZGmVxU3T/92bd51939ce6e27f773aee3516b2cd6f--happy-monday-its-monday.jpg',
  //   posterSrc: 'https://steemitimages.com/DQmYfiDGFmZsgkpq6XPE3WssU6CK9SagBUCHyWVZGmVxU3T/92bd51939ce6e27f773aee3516b2cd6f--happy-monday-its-monday.jpg',
  //   description: 'fourth desc',
  //   title: 'fourth title'
  // }
]

module.exports = {
  getAll: () => {
    return allMemes.slice(0)
  },
  getMemeById: (id) => {
    let meme = {}
    allMemes.forEach(currentMeme => {
      if (id === currentMeme.id) {
        meme = currentMeme
      }
    })
    return meme
  },
  addMeme: (meme) => {
    allMemes.push(meme)
  }
}
