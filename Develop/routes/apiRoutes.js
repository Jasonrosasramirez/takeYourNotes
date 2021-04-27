const fs = require("fs");   // file system 
const router = require("express").Router();
const log = require("../db/logClasses.js"); 
const path = require("path");


/*      Routing     */

router.get("/api/notes", (req, res) => {

    log.getNotes()
    .then((notes) => {
        return res.json(notes)})
        .catch(err => res.status(500).json(err))
        
})

