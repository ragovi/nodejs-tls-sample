const axios = require('axios');
const fs = require('fs');
const https = require('https');


const cacert = fs.readFileSync("../server/mockserver.crt");
const url ='https://mockserver.com:55555/';

var options = {
  ca: cacert
};

var agent = new https.Agent(options);


axios.get(url, {httpsAgent: agent} )
  .then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
