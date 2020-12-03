function showAllContacts(){
			if (username=="admina"){
				document.getElementById("normalosContacts").style.display = 'block';
				document.getElementById("adminasPublicContacts").style.display = 'block';
				document.getElementById("adminasPrivateContacts").style.display = 'block';
			}
			else if (username=="normalo"){
				document.getElementById("normalosContacts").style.display = 'block';
				document.getElementById("adminasPublicContacts").style.display = 'block';
			}
			return
}