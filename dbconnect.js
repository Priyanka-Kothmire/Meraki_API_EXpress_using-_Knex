const data = require("./saral_data.json")
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Priya@123",
  database : "Meraki_data"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE Meraki_data", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err){
//   if (err)throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE meraki_data (id INT,name VARCHAR(255),logo VARCHAR(255),notes VARCHAR(255) ,days_to_complete VARCHAR(255),short_description VARCHAR(255),type VARCHAR(255),course_type VARCHAR(255),lang_available VARCHAR(255) )"
//   con.query(sql,function(err,result){
//       if (err)throw err;
//       console.log("Table created");
//   })
// })
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var new_list=[]
  for (let i=0 ; i<data.length ; i++){
    new_list.push([parseInt(data[i].id),data[i].name,data[i].logo,data[i].notes,data[i].days_to_complete,data[i].short_description,data[i].type,data[i].course_type,data[i].lang_available[0]])
  }
  // console.log(new_list)
  var sql = "INSERT INTO meraki_data VALUES ?";
  con.query(sql,[new_list], function (err, result) {
    if (err) throw err;
    console.log("course of records inserted: " );
  });
});

module.exports=mysql



// [[[1, "pratik", "logo", "notes", "days", "short", "type", "course", "lang"]]]







          








//  table
//  insert table


// https://www.youtube.com/watch?v=nHgnrANk5Is
// https://www.youtube.com/watch?v=8feLWe5ZPMI