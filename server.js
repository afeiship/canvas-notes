const express = require('express');
const app = express();
const portNumber = 3010;
const sourceDir = 'src';

//OPEN GZIP
// app.use(compression({ level: 9 }));
app.use(express.static(sourceDir));


app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
    console.log(`Serving content from /${sourceDir}/`);
});
