const fs = require("fs"); // grants access to the file system abilities. 
const util = require("util"); // provides access to some utility functions. https://www.w3schools.com/nodejs/ref_util.asp
//const shortid = require("shortid"); // this package will be used to make unique IDs. https://www.npmjs.com/package/shortid
const uniqid = require("uniqid"); 

const writeFile = util.promisify(fs.writeFile); // do not use sync version. This is asynchronous. Using sync ruins the promise :(  
const readFile = util.promisify(fs.readFile);


class Log {

    write(note) {
        return writeFile("db/db.json", JSON.stringify(note)); // What calls the JSON structure, converts notes into a string. 
        // (where we are saving, what we are saving)
    }

    // moving the read method before the write. Let's see if this helps out. 
    read() {
        return readFile("db/db.json", "utf8"); // Encodes what was just written to the UTF-8 format. 
        // (what we want to read, what we want to encode to)
    }

    getNotes() { 

        return this.read().then((notes) => { // For this instance, it initiates the read function, then passes the notes. 

            let storedNotesArray; // function scoped. Will be referenced in the try and catch below. 
            
            // https://www.w3schools.com/js/js_errors.asp#:~:text=JavaScript%20try%20and%20catch,occurs%20in%20the%20try%20block.
            try {   // allows for a block of code to be tested for errors while it is being executed. Block of code to try. 
                storedNotesArray = [].concat(JSON.parse(notes)); // sorts the array of notes in order (concat). Also parses notes into JSON. 

            } catch(err) {  // block of code to run if an error occurs in the try block. This handles the errors.  
                storedNotesArray = []; // returns an empty array if there is an error. 
                
            } 

            return storedNotesArray;  
            // returns whichever happened. Hopefully the best case scenario (try).
        })
        
    }

    addNote() {
        const {title, text} = note;
        const newNote = {title, text, id:uniqid()}; 

        return this.getNotes() 
        .then((notes) => {
            [...notes, newNote]

        }).then((updatedNotes) => {this.write(updatedNotes)})
        .then(() => {newNote})

    }

}

module.export = new Log(); // exports the Log class file function to the apiRoutes