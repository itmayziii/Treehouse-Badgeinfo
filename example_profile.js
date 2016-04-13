var Profile = require("./profile.js");

// If you want to see the json yourself you can go to https://teamtreehouse.com/<username>.json
var studentProfile = new Profile("itmayziii");

/**
* When the JSON body is fully recieved the 
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
studentProfile.on("end", console.dir);

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
studentProfile.on("error", console.error);