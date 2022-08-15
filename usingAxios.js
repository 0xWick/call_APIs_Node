// **Its easy to use a 3rd party library when working on big projects or complex data

// Promised based http client
const axios = require("axios");

// Two ways to make http calls with axios
// 1. Attach a Callback

// Make a get request to the URL
axios
  .get("https://jsonplaceholder.typicode.com/posts/10")
  .then((response) => {
    // response contains alot of metadata, so just access its ".data" field
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Using Async/Await

async function Caller() {
  try {
    // awaiting the response and saving it
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/11"
    );
    console.log("Using ASYNC/AWAIT");

    // logging .data from response
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Always forget this XD
Caller();
