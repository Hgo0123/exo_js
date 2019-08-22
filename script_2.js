let nombre = prompt("De quel nombre veut tu calculer la factorielle ?")

function factorielle(n){
	m = 1
	for (i = 1; i <= n; i++){
		m = m * i;
	};
	return m;
};

console.log(factorielle(nombre));