CORS

If we want to use CORS we have install cors package npm i cors and then import the cors package in the file that we want to use. 


// const cors = require('cors');
// app.use(cors());

use above two lines to setup cors on backend, this will allow all the requests from any url or any port, if we want to whitelist only frontend url or only single we have to configure that in cors() method.

proxy

proxy will be used in the frontend, proxy - replicate someone's identity

standardaize the backend url like making the unique entry point for all the endpoints like adding /api or /v1 something like that to all the endpoints

then in vite.config.js file inside defineConfig() method add server: {
    proxy: {
        '/api': 'http://localhost:3000';
    }
}

after adding the proxy key value, we are conncted backend with frontend 

actually backend accepts any requests that comes from same url like same port, same hostname(localhost).
to solve this problem we are using either proxy or cors
cross origin resource sharing means even though the url address port and hostname is not same allow the requests, if whitelisted any urls only that urls will be allowed for request otherwise all urls will be allowed.

but in proxy we are disguised as same url and same port, because of this we are allowed to reqest the backend server, because the origin is same, not cross origin.