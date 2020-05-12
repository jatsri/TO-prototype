const express = require('express');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');
require('body-parser-csv')(bodyParser);
const bunyan = require('bunyan');

const handleHealth = require('./src/handlers/handleHealth');
const handleCredits = require('./src/handlers/handleCredits');
const insertCredits = require('./src/db/insertCredits');
const validateRows = require('./src/lib/validateRows');

const logger = bunyan.createLogger({
    level: 'info',
    name: `TO-prototype-log`
});


const port = 3000;
const app = express();

app.use(
    bodyParser.csv({
        csvParseOptions: {
            fastcsvParams: {},
        },
    })
);

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

