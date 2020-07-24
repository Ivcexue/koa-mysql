const mongoose = require('mongoose')

class MongoConnect {
  initMogo() {
    mongoose
      .connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true })
      .then((res) => {
        console.log(`Mongoose Connect...`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = new MongoConnect()
