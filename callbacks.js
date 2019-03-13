var question = [
    'What is your name',
    'What is your fav hobby',
    'What is your preferred programming language'
];
var answer = [];

function ask(i){
    process.stdout.write(`\n\n\n\n ${question[i]}`);
    process.stdout.write('  > ');
}

process.stdin.on('data', function(data){
    
    // process.stdout.write(`\n\n ${data.toString().trim()} \n`)

    answer.push(data.toString().trim());

    if(answer.length < question.length){
        ask(answer.length);
    }else{
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write('\n\n\n\n');
    process.stdout.write(`Go ${answer[1]} ${answer[2]} you can finish writing ${answer[2]} later`);
    process.stdout.write('\n\n\n\n');
});

ask(0);