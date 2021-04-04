//const express =  require("express");
//const bodyParser =  require("body-parser");
import index from './index.js';

// exec servidor
const port = 3000;
index.listen(port, function() {
    console.log(`- - - -   Servidor iniciado em http://localhost:${port}/ !   - - - - `);
});
