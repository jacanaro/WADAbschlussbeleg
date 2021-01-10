function showMyContacts(){
			if (username=="admina"){
				document.getElementById("adminasPublicContacts").style.display = 'block';
				document.getElementById("adminasPrivateContacts").style.display = 'block';
				document.getElementById("normalosContacts").style.display = 'none';
			}
			else if (username=="normalo"){
				document.getElementById("adminasPublicContacts").style.display = 'none';
				document.getElementById("adminasPrivateContacts").style.display = 'none';
				document.getElementById("normalosContacts").style.display = 'block';
			}
			return
}