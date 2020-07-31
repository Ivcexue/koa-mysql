const mongoose = require('mongoose')
const mysql = require('mysql')
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

  initMysql() {
    let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'lerd08',
      database: 'test',
    })
    connection.connect()
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
  }
}

module.exports = new MongoConnect()
