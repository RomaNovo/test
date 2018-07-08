
document.addEventListener('DOMContentLoaded', () => {
	let wrp = document.querySelector('.right__abs-block');
	let wrpW = wrp.getBoundingClientRect().width;
	let block = document.querySelector('.abs-block');
	let items = block.children;
	let current = 0;
	
	function move() {
		current += 0.5;
		block.style.transition = '.1s';
		block.style.transform = `translateX(-${current}px)`;
		if(current > wrpW) {
			current = 0;
			block.style.transition = 'none';
			var firstChild = block.firstElementChild;
			block.appendChild(firstChild);
			block.style.transform = 'translateX(0px)';
		}
		console.log(current,timer)
	}
	
	var timer = setInterval(move,100)

	 /*function move() {
		current += 30;
		block.style.transition = '.5s';
		block.style.transform = `translateX(-${current}px)`;
		var timer = setTimeout(move,1000);
		console.log(current,timer);	
		if(current > wrpW) {

			var promise = new Promise(function(resolve,reject) {
				current = 0;
				console.log('timer ' + timer);
				
				clearTimeout(timer);
				console.log( 'timer 0 '  + timer);
				block.style.transition = 'none';
				var firstChild = block.firstElementChild;
				console.log(firstChild);
				block.appendChild(firstChild);
				block.style.transform = 'translateX(0px)';
				
				
				resolve();
			})
			
			.then(function() {
				setTimeout(move,2000);
			});
		
		}
		
		
			
	}
	
	move();*/

	
	/*setTimeout(function() {
		console.log(current)
	}, 5555)
	console.log(current,wrpW)*/
	/*setTimeout(function() {
		if(current>wrpW) {
			console.log(current,wrpW)
			clearInterval(timer)
		}
	},2000)*/
	/*(current < wrpW)? timer : clearTimeout(timer);*/
	
})


