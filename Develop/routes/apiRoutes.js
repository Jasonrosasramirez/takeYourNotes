const fs = require("fs");   // file system 
const router = require("express").Router();
const log = require("../db/logClasses.js"); 



/*      Routing     */

router.get("/api/notes", (req, res) => {

    log.getNotes()
    .then((notes) => {
        return res.json(notes)})
        .catch(err => res.status(500).json(err))

    // log is the import from logClasses. getNotes is the function we want to call. 
    // .then is the promise with notes from the log classes passed on as the parameter. 
    // return the response as a json format
    // .catch only triggers in a fail scenario. 
        // Will display the fail err as a response with the error code 500. 
        // error 500 will be displayed in a json format. 
        // for reference, 200 is the success

})


/*  API POST Request */

router.post("/api/notes", (req, res) => {

    log.addNote(req.body)
    .then(note => {
        return res.json(note)})
        .catch(err => res.status(500).json(err))

    // accessing logClasses.addNote function 
    // req.body is the request object.
    // returns the response from the server in a json format. 
    // displays the 500 error if it comes to that.  

})

module.exports = router; // exports router for other scripts to be able to read :D 