

	function Suma()
	{
		var valorA = (prompt('Dame el valor A:'));
		var valorB = (prompt('Dame valor B:'));
		var resultado=valorA + valorB;
		document.getElementById("btn_suma").onclick = suma;
        document.getElementById("resultado").onclick = (valorA+"  +  " + valorB + " = " + resultado);

	}
	
	function Resta()
	{
				var valorA = (prompt('Dame el valor A:'));
		var valorB = (prompt('Dame valor B:'));
		var resultado=valorA - valorB;
		document.getElementById('resultado').value = (valorA+"  +  " + valorB + " = " + resultado);
	}
	
	function Division()
	{
				var valorA = (prompt('Dame el valor A:'));
		var valorB = (prompt('Dame valor B:'));
		var resultado=valorA / valorB;
		document.getElementById('resultado').value = (valorA+"  +  " + valorB + " = " + resultado);
	}
	
	function Multiplicacion()
	{
	            var valorA = (prompt('Dame el valor A:'));
		var valorB = (prompt('Dame valor B:'));
		var resultado=valorA * valorB;
		document.getElementById('resultado').value = (valorA+"  +  " + valorB + " = " + resultado);
	}	


