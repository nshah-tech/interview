function calculate(x, y, operation) {
	switch (operation) {
		case 'add':
			console.log(x+y);
			break;
		case 'substract':
			console.log(x-y);
			break
	}
}

calculate(1,2,'add')