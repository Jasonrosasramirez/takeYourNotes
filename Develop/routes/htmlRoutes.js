const router = require("express").Router; 
const path = require("path"); 


/*      Routing     */

router.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/notes.html")); 

}); 

router.get("*", (req, res) => {
    // if no routes match, then the default is set to home. 

    res.sendFile(path.join(__dirname, "../public/index.html"));

});

module.exports = router;