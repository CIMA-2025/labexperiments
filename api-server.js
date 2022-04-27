require('dotenv').config({ path: './.env.local' });

const app = express();

app.get('/api/shows', checkJwt, (req, res) => {
    res.send({
        msg: 'Your access token was successfully validated!'
    });
});

const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
process.on('SIGINT', () => server.close());
