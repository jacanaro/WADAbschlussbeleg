function logOut(){
	username=null;
	password=null;
	document.getElementById('password').value=null;
	document.getElementById('username').value=null;
	document.getElementById("logIn").style.display = 'block';
	document.getElementById("loggedIn").style.display ='none';
	document.getElementById("loginFail").innerHTML ="";
}