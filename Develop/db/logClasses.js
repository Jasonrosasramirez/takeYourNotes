const fs = require("fs");
const util = require("util");
const shortid = require('shortid'); // this package will be used to make unique IDs https://www.npmjs.com/package/shortid


const writeFile = util.promisify(fs.writeFile); // do not use sync version. This is asynchronous. Using sync ruins the promise :(  
const readFile = util.promisify(fs.readFile);


class Log {

    write(note) {
        return writeFile("db/db.json", JSON.stringify(note)); // What calls JSON structure, converts notes into a string. 
        // (where we are saving, what we are saving)
    }

    read() {

        return readFile("db/db.json", "utf8"); // Encodes what was just written to the UTF-8 format. 
        // (what we want to read, what we want to encode to)
    }

    getNotes() { 
        
        return this.read().then(notes => {

            var storedNotesArray; // function scoped

            try {

                storedNotesArray = [].concat(JSON.parse(notes)); 

            } catch(err) {

                storedNotesArray = [];
                
            } 

            return storedNotesArray

        })
        
    }

}

module.export = new Log(); // exports the Log class file function