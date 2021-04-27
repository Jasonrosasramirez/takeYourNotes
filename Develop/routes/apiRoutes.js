const fs = require("fs");   // file system 
const router = require("express").Router();
const log = require("../db/logClasses.js"); 
const path = require("path");


/*      Routing     */

router.get("/api/notes", (req, res) => {

    //log.getNotes().then((notes) =>)

    // getNotes() is coming through incorrrectly for some reason. check the export on logClasses

})

