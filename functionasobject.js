var fs = require('fs');

fs.readFile('data.txt',function(error,data){
  if(error){
    console.error(error);
    return;
  }
  console.log(data.toString());

});
