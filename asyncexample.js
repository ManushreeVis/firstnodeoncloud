var async = require('async')
var fs = require('fs');

let sampletext = "This is the sample text for the file."

async.series([
  function(callback){
    console.log('make directory');
    fs.mkdir('hello',function(err){
      if(err){
        console.log('mkdir error');
        return callback(err);
      }
      callback();
    });
  },
  function(callback){
    console.log('write file');
    fs.writeFile(".//hello//write.txt",sampletext,function(err){
      if(err){
        console.log('write file error');
        callback(err);
      }
      callback();

    });
  }
])

