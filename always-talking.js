var saying = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    'Voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    'Temporibus autem quibusdam et aut officiis debitis aut rerum'
];

var interval = setInterval(function(){
    var i = Math.floor(Math.random() * saying.length);
    process.stdout.write(`${saying[i]} \n`);
}, 1000);

process.stdin.on('data', function(data){
    console.log(`STDIN Data Received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});