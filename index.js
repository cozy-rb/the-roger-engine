require('localenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbService = require("./server/database/services/SequelizeService");
const production = true;//(process.env.NODE_ENV === 'production');

app.use(bodyParser.json());

//IMPORT ROUTES

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if(!production){ console.log(`Server running on port ${PORT}`); }

  // Test the db connection
  dbService.prove((e)=>{
    if(e.status == "success"){
      dbService.loadModels();
    }
    else if(e.status == "error"){
      if(!production){ console.log(e.message); }
    }
  });
});
