var fs = require('fs');
var path = require('path');

fs.readdir('./lib', function(err, files){
    
    files.forEach(function(filename){
        var file = path.join(__dirname, 'lib', filename);
        var stat = fs.statSync(file);
        
        if(stat.isFile() && filename !== '.DS_STORE'){
            
            fs.readFile(file, 'UTF-8', function (err, content){

                if (err){
                    throw err;
                }

                console.log(content);
            });
        }
    });
});