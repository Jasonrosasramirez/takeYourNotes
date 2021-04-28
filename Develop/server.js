/*  creats an express application.  */  // http://expressjs.com/en/api.html

const express = require("express");
const app = express(); //
const PORT = process.env.PORT || 3000; // sets up the initial port that will be used.   


/*  setting up the Express app to parse the incoming data.    */  

app.use(express.urlencoded({extended: true})); 
    //  urlencoded is a built in middleware function based on the body parser. 
    //  extended | This option allows to choose between parsing the URL-encoded data with the querystring library (when false) 
        //  or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, 
        //  allowing for a JSON-like experience with URL-encoded. http://expressjs.com/en/api.html
app.use(express.json()); 
    //  the middleware function is executed when the base of the requested path matches path. http://expressjs.com/en/api.html#app.use
    //  in this case, express.json is a callback function. 
    //  express.json([options]) | It parses incoming requests with JSON payloads and is based on body-parser.
        //  Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
app.use(express.static("public"));
    //  middle function. Serves static files. .static(path, [options])
    //  serves content for the app from the "public" directory in the application directory. 


/*  Routers */

require("./routes/apiRoutes")(app);
    //  Routing refers to how an application’s endpoints (URIs) respond to client requests. http://expressjs.com/en/guide/routing.html#route-paths
require("./routes/htmlRoutes")(app);


/*  Listener    */

app.listen(PORT, () => {

    console.log("This is your express.js app speaking.\nThe express app is listening on PORT: ${PORT}");

}); 