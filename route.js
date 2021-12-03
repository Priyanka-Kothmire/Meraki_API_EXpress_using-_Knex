const express = require("express");
const router = express.Router();
// const fs =require("fs");
// const router = fs.Router();

const data_course = require("../dbconnect") 

const coursesdata = require("../controller/controller.js")

router.get("/",coursesdata.findAll);

router.post("/",coursesdata.postCourse);

router.get("/:id",coursesdata.getId);

router.put("/:id",coursesdata.updateCourse);

router.delete("/:id",coursesdata.deleteCourse);

module.exports = router







