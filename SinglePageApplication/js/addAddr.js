//ToDo: glaube es soll nicht addAddr sein

function addAddr() {
	var username = document.getElementById('username').value
		
	if(username == "admina") {
	var titel=document.getElementById("titel").value;
		document.getElementById("test2").innerHTML="Titel: "+titel;
		//toDo: nicht mit "test" und "testXY" arbeiten
		return
	}
	else
	{
		document.getElementById("test2").innerHTML="Error: Keine Berechtigung";
		return
	}
	
			//for(var i = 0; i < objPeople.length; i++) {
						//}
}