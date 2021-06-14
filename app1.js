const countDown = (num, nextFunc) => {
	let counter = num;
	let id = setInterval(() => {
		if (counter > 0) {
			console.log(counter);
			counter--;
		} else {
			console.log('DONE');
			clearInterval(id);
			nextFunc();
		}
	}, 1000);
};

const randomGame =  () => {
	let counter = 0;
	let id = setInterval(() => {
		let num = Math.random();
		if (num > 0.75) {
			console.log(`It took ${counter} tries to get a number greater than 0.75`);
			clearInterval(id);
		} else {
			counter++;
		}
	}, 1000);
};


countDown(5, randomGame);