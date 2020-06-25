const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'',
    user:'root',
    password:'123456',
    database:'company'
});

mysqlConnection.connect(function (error) {
    if(error){
        console.log(error);
        return;
    }else{
        console.log('DB is connect')
    }
})

module.exports = mysqlConnection;