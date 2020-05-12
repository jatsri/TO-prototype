const express = require('express');
const asyncHandler = require('express-async-handler');
const bunyan = require('bunyan');

const handleHealth = require('./src/handlers/handleHealth');

const logger = bunyan.createLogger({
    level: 'info',
    name: `TO-prototype-log`
});


const port = 3000;
const app = express();

app.listen(port, () => {
    logger.info(`app is listening on port ${port}`);
});

app.get('/health', asyncHandler(handleHealth));

app.post(
    '/credits/:tourOperatorId',
    asyncHandler(
        handleCredits.bind(null, { insertCredits, validateRows, logger })
    )
);

