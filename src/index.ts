// const express = require( "express" );
// const app = express();
// const port = 8080; // default port to listen

// // define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );

// // start the Express server
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );

import express from 'express';

const app = express();
const port = 8080;

// @ts-ignore
app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
