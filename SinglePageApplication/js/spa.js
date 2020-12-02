// Loop through Array of Objects
		var objPeople = [
			{ // Object @ 0 index
				username: "admina",
				password: "mama"
			},
			{ // Object @ 1 index
				username: "normalo",
				password: "mimi"
			}

		]

		function getInfo() {
			var username = document.getElementById('username').value
			var password = document.getElementById('password').value

			for(var i = 0; i < objPeople.length; i++) {
				// check is user input matches username and password of a current index of the objPeople array
				if(username == objPeople[i].username && password == objPeople[i].password) {
					document.getElementById("logIn").style.display='none';
					document.getElementById("loggedIn").style.display='block';
					document.getElementById("test").innerHTML=username + " is logged in!!!";
					console.log(username + " is logged in!!!")
					// stop the function if this is found to be true
					return
				}
			}
			document.getElementById("test").innerHTML="incorrect username or password";
		}