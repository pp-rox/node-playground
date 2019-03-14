var fs = require('fs');

if(fs.existsSync('files')){
    console.log('Directory already exist');
}else{
    fs.mkdir("files", function(err){

        if(err){
            console.log(err);
        }else{
            console.log('Directory created');
        }
    })
}

