function fibonacci(number) {
	if (number <= 1) return number;
	return fibonacci(number - 2) + fibonacci(number - 1);
}

console.log(fibonacci(7));