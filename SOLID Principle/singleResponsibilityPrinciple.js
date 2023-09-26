function calculate(x, y, operation) {
	switch (operation) {
		case 'add':
			display(x+y);
			break;
		case 'substract':
			display(x-y);
			break
	}
}

function display(message) {
	console.log(message);
}

calculate(1,2,'add')