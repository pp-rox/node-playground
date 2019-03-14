var spawn = require('child_process').spawn;
var cp = spawn('node', ['always-talking']);

cp.stdout.on('data', function(data){
    console.log(`STDOUT: ${data.toString()}`);
});

cp.prependListener('close', function(){
    console.log('Child Process has ended');
    process.exit();
});

setTimeout(function(){
    cp.stdin.write('stop');    
}, 4000);
