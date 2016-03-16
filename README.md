# Requirements

- Implement basic logic: turn-based logic, win calculation, no playing a square that is already occupied, etc.
- Assume 2 human players (no AI)
- You can build a 3x3 board size for the UI, but your win logic should support an NxN board size.
- You must have some portion of business logic handled on the server that you submit via AJAX. The split of client/server logic can be up to your design.
- UI design is up to you.

### Approach

- An adjustable grid for each game that does not care about the size to show off validation logic.
- Use all new tools that I've never really done a full project with since it's time to jump on the react wagon.
- Reactjs, webpack, redux, immutable front-end.

### Issues

 - Game state should be kept on the server.
 - Each move on the client should submit and move event to the server and let the server do do validation on the board with a response back to the client of the entrie board which keeps from cheating. This is a great reason to use redux.
 - I went down the rabbit hole experimenting with using redux for all state handling but I don't think it should be used for everything. Game logic should definitely be done and store within the components themselves and redux use for updated data broadcasting. 
 - Other issues consist setting up debug envrionment to debug both live client using webpack and server using node-inspector.
 - Hadling styling reactjs state has to be easier and I know it can be but it's time to move on.
 - Tons of questions about tools for workflow etc. but the game works.

 Note: The only way the game checks for validation is on the server so it will not end unelss the server is running.

 # Usage

 - Open tictactoe-server
 - npm install
 - npm start (starts node with nodemon on localhost:3000)

 Other: You can open tictactoe-client and npm install -> npm start which will launch the webpack dev environment. As long as you have the server started the server uses 'allow-cross-origin' so you can hit the routes in the client dev envrionment since I use the base url on the ajax call. This should be done in config settings somewhere in a real project.