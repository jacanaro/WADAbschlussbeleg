//user obj is in result var of call back function --> how to use: getCurrentUser(function(userObj){
// 		do something with userObj here
// 	});

function getCurrentUser(cb) {
    var req = new XMLHttpRequest();
    var url = `http://localhost:3000/adviz/loginData`
    req.open('GET', url, true);
    req.onreadystatechange = function() {
        if (this.readyState === 4) {
            cb(JSON.parse(this.response));
        }
        else{
            cb(null);
        }
    }
    req.send();
}