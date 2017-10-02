function run(){
number = parseFloat(document.getElementById('amount').value)  ;

function numGen(number) {

	var sequence = [1, 1];

	for (var i = 2; i < number; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence;
}
console.log(numGen(number));
document.getElementById('output').innerHTML = numGen(number) + " ";
}
