const express = require('express');
const asyncHandler = require('express-async-handler');

const handleHealth = require('./src/handlers/handleHealth');


const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get('/health', asyncHandler(handleHealth));

app.post(
    '/credits/:tourOperatorId',
    asyncHandler(
        handleCredits.bind(null, { insertCredits, validateRows })
    )
);

