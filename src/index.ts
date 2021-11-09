import express from 'express';

const app = express();
const port = 8080;

// @ts-ignore
app.get('/', (request, response) => {
    console.log(request.body)
    response.send('Hello world!');
});

app.get('/api/meals', (request, response) => {
    console.log(request.body)
    response.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
