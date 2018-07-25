const allMemes = [
  {
    id: 1,
    memeSrc: 'https://afinde-production.s3.amazonaws.com/uploads/99db2206-b2ab-47d8-8c80-0411563474d5.jpg'
  },
  {
    id: 2,
    memeSrc: 'https://i.kym-cdn.com/photos/images/newsfeed/000/250/007/672.jpg'
  },
  {
    id: 3,
    memeSrc: 'http://www.theyucatantimes.com/wp-content/uploads/2017/02/trump-meme.jpg'
  },
  {
    id: 4,
    memeSrc: 'https://steemitimages.com/DQmYfiDGFmZsgkpq6XPE3WssU6CK9SagBUCHyWVZGmVxU3T/92bd51939ce6e27f773aee3516b2cd6f--happy-monday-its-monday.jpg'
  }
]

module.exports = {
  getAll: () => {
    return allMemes.slice(0)
  }
}
