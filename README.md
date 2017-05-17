#### What is this?

A quick project to practice CoffeeScript, uses push notifications to remind the user to move.

### GET STARTED

1. `npm install` to install dependencies
2. Create a file called `.env` in the root directory. Copying from the `.env.example` file, include `PATH= 8080`
3. `npm start` to spin up the server
4. Visit `http://localhost:8080/`
5. Receive an instant notification by pressing the button, otherwise a notification will automatically pop up every 45 minutes.

Make sure to have both the server and webpage running & open to receive notifications

##### CoffeeScript compile whole folder

`$ coffee -w -o app/ -c coffeescripts/`
