var async = require('async')
	items=[],
	tasks=[];

for (var i=0;i<10;i++){
	items.push(i);
}

var AsyncTasks={
	doSomething: function(i,cb){
		console.log("doSomething.."+i);
		setTimeout(function(){
			cb(null,i);
		},1000);
	},
	doSomethingElse: function(i,cb){
		console.log("doSomethingElse.."+i);
		setTimeout(function(){
			cb(null,i);
		},500);
	}
};

function done(err,results){
	if(err){
		console.log("error .."+err);
	}
	console.log(results);
}
async.mapLimit(items,5,AsyncTasks.doSomething,done);
async.mapLimit(items,3,AsyncTasks.doSomethingElse,done);
