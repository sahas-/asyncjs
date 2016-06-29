var async = require('async'),
	Q = require('q'),
	items=[],
	tasks=[];

for (var i=0;i<10;i++){
	items.push(i);
}

var queue = async.queue(doSomething,5); //run parallel but limit to 5

queue.push(items,function(error, res){
	if (error) {
		console.log("error.."+ error);
	}
	else{
		console.log("response.."+ res);	
	}
	console.log(queue.length()+ " to go ");
	
});

queue.drain= function(){
	console.log("all done, great job !!");
}

queue.empty = function(){
	console.log("last item is given for processing..");
}

function doSomething(i,cb){
	console.log("picking up "+i);
	setTimeout(function(){
		console.log("completing "+i);
		if(i%2==0){
			cb(null,"even number is good");
		}
		else{
			cb("odd is bad");			
		}
		
	},1000);
}

