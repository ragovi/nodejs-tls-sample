var request = require("request");
var fs = require("fs");

var cacert = fs.readFileSync("../server/mockserver.crt");

var options = {
  uri: 'https://mockserver.com:55555/',
  method: "GET",
  ca: cacert
};

request(options, (err, response, body) => {
  if( err ){
    console.log(err);
  } else {
    console.log(response.statusCode);
    console.log(body);
  }

});
