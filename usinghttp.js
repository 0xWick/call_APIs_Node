// Node's native library
const https = require("https");

// *OR

const http = require("http");
// Depending on the type of your request

// using .get,
// @desc takes a URL and a callback with request
https.get("https://jsonplaceholde.typicode.com/posts", (request) => {
  // Declaring an empty string for later
  let data = "";

  // Data is returned in chunks from a request (thats just how http works)
  // Listen to each data (recieved) event and concatenate(add) the chunk to our data variable

  request.on("data", (chunk) => (data += chunk));

  // Trigger when the data stream's end
  request.on("end", () => console.log(data));

  // Trigger when error in data stream or request
  request.on("error", (error) => console.log(error));
});
