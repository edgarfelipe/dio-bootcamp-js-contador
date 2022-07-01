let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
document.getElementById("adicionar").addEventListener("click", adicionar);
document.getElementById("subtrair").addEventListener("click", subtrair);



function adicionar() {
	if (count < 10) {
			count++;
	CURRENT_NUMBER.innerHTML = count;
	}};

function subtrair() {
	if (count > 0) {
		count--;
	CURRENT_NUMBER.innerHTML = count;
	}};

