// # linha
// se linha valer 0
if (l == 0) {
	if (
		tablado[l][0].status == "o" &&
		tablado[l][1].status == "o" &&
		tablado[l][2].status == "o"
	) {
		alert(`a (O) ganhou na linha 0!`);
		return;
	}

	if (
		tablado[l][0].status == "x" &&
		tablado[l][1].status == "x" &&
		tablado[l][2].status == "x"
	) {
		alert(`o X ganhou na linha 0!`);
		return;
	}
}

//          // se linha valer 1

if (l == 1) {
	if (
		tablado[l][0].status == "o" &&
		tablado[l][1].status == "o" &&
		tablado[l][2].status == "o"
	) {
		alert(`a (O) ganhou na linha 1!`);
		return;
	}

	if (
		tablado[l][0].status == "x" &&
		tablado[l][1].status == "o" &&
		tablado[l][2].status == "o"
	) {
		alert(`o X ganhou na linha 1!`);
		return;
	}
}

//          // se linha valer 2

if (l == 2) {
	if (
		tablado[l][0].status == "o" &&
		tablado[l][1].status == "o" &&
		tablado[l][2].status == "o"
	) {
		alert(`a (O) ganhou na linha 2 ${c}!`);
		return;
	}

	if (
		tablado[l][index].status == "x" &&
		tablado[l][1].status == "o" &&
		tablado[l][2].status == "o"
	) {
		alert(`o X ganhou na linha 2 ${c}!`);
		return;
	}
}

// # coluna

// se coluna valer 0
if (c == 0) {
	if (
		tablado[0][c].status == "o" &&
		tablado[1][c].status == "o" &&
		tablado[2][c].status == "o"
	) {
		alert(`a (O) ganhou na coluna 0!`);
		return;
	}

	if (
		tablado[0][c].status == "x" &&
		tablado[1][c].status == "x" &&
		tablado[2][c].status == "x"
	) {
		alert(`o X ganhou na coluna 0!`);
		return;
	}
}

//          // se coluna valer 1

if (c == 1) {
	if (
		tablado[0][c].status == "o" &&
		tablado[1][c].status == "o" &&
		tablado[2][c].status == "o"
	) {
		alert(`a (O) ganhou na coluna 0!`);
		return;
	}

	if (
		tablado[0][c].status == "x" &&
		tablado[1][c].status == "x" &&
		tablado[2][c].status == "x"
	) {
		alert(`o X ganhou na coluna 0!`);
		return;
	}
}

//          // se coluna valer 2

if (c == 2) {
	if (
		tablado[0][c].status == "o" &&
		tablado[1][c].status == "o" &&
		tablado[2][c].status == "o"
	) {
		alert(`a (O) ganhou na coluna 0!`);
		return;
	}

	if (
		tablado[0][c].status == "x" &&
		tablado[1][c].status == "x" &&
		tablado[2][c].status == "x"
	) {
		alert(`o X ganhou na coluna 0 ${c}!`);
		return;
	}
}
