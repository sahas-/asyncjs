var async = require('async');
var items = [1,2,3];

function test(items){
	async.each(items, function(item, callback){
		doSomething(item);
		callback();
	});

}


function doSomething(i){
	console.log("in doSomething "+i);
	setTimeout(function(){
		console.log("finished doSomething "+i);
	},1000);
}

test(items);

