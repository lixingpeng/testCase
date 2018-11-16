var fs = require('fs');

// var data = fs.readFileSync('index.txt');

var data = fs.readFile('index.txt',function(err, data) {
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
}) ;

// console.log(data.toString());
console.log('程序执行结束！')
console.log('阻塞模式调用。')