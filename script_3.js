let etages = prompt("Combien d'etages veux tu a ta pryramides?")

function createHalfPyramid (etages) {

  for ( i = 1; i <= etages; i++) {
    var row = '';

	for (e = 1; e <= (etages - i); e++){
    	row += ' ';
    }

   for ( j = 1; j <= i; j++) {
      row += '*';
    }

    



    console.log(row);
  }
}

createHalfPyramid(etages);


