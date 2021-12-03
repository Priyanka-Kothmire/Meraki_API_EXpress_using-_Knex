const data_course = require("../dbconnect")

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      PORT : 3000,
      user : 'root',
      password : 'Priya@123',
      database : 'Meraki_data'
    }
  });

let findAll = (req,res) => {
  knex.from("meraki_data").select("*")
  .then((table)=>{
    res.send(table);
  })
};

let getId = (req,res) => {
  const { id } = req.params;
  knex.schema.hasTable('meraki_data').then(function(exists) {
    if (exists) {
    return knex
    .from("meraki_data")
    .select("*")
    .where("id",id)
    .then(function(user){
      if(user != 0 ){res.send(user)}
  else {res.status(404).send(`the course with id ${req.params.id}is not found in database .`)
  } ;
    })
  }
})
}

let postCourse = (req,res) => {
    const new_data = req.body;
    // data.push(new_data);
    knex.schema.hasTable('meraki_data').then(function(exists) {
      if (exists) {
    res.send(`user with the id ${new_data.id} added to the database .`);
    return knex ("meraki_data").insert({id : meraki_data.id,
                                                  name : meraki_data.name,
                                                  logo : meraki_data.logo,
                                                  notes : meraki_data.notes,
                                                  days_to_complete : meraki_data.days_to_complete,
                                                  short_description : meraki_data.short_description,
                                                  type : meraki_data.type,
                                                  lang_available : meraki_data.lang_available[0]})
}
})
}

let deleteCourse = (req,res) => {
  const { id } = req.params;
  // console.log(id)
  knex.schema.hasTable('meraki_data')
  .then(function(exists) {
    if (exists) {
  res.send(`Course with id ${id} deleted from the database.`)
  return knex ("meraki_data").where("id",id).del()
};   
  knex.schema.hasTable("meraki_data").then(function(user){
    if(user != 0 ){res.send(user)}
      res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
  }
)}
)};

let updateCourse = (req,res)=>{
      id =req.body.id;
      name = req.body.name;
      logo = req.body.logo;
      notes = req.body.notes;
      days_to_complete = req.body.days_to_complete;
      short_description = req.body.short_description;
      type = req.body.type;
      course_type = req.body.course_type;
      lang_available = req.body.lang_available;
      // fs.writeFileSync("saral_data.json",JSON.stringify(meraki_data,null,4));
      // res.send (`user with the id ${id} has been updated`)
      knex.schema.hasTable("meraki_data").then(function (exists) {
      if (exists) {
        res.send(`user with the id ${id} has been updated` )
        return knex("meraki_data").update({name:name, logo:logo, notes:notes, days_to_complete:days_to_complete,short_description:short_description, type:type, lang_available:lang_available.toString() })
        .where("id", id)
      }else{
        res.status(404).send(`The course with given id ${req.params.id} is not found in database.`)
      
    }
})
}

module.exports = {findAll,getId,postCourse,deleteCourse,updateCourse}



  
  
  
  
  
  
  
  
  
  
  
  
 