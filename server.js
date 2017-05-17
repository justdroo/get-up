// ====================
// Third-Party Modules
// ====================

let express     = require('express');
let bodyParser  = require('body-parser');
var path        = require('path');
let request     = require('request');

require('dotenv-safe').load();

// ====================
// App Setup
// ====================

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT;

// ====================
// Routing
// ====================

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));

  // request('http://localhost:4567/', function (error, response, body) {
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // });
// });

// ====================
// Register Routes
// ====================

app.use("/", express.static(__dirname + '/'));

// ====================
// Run Server
// ====================

app.listen(port, () => {
  console.log(`Notifications currently running on localhost: ${port}.` );
});
