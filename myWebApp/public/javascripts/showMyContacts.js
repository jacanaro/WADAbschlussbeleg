function showMyContacts(){
	deleteContactsFromClient();
	//user object=callback-functions userObject
	getCurrentUser(function(userObject){
		requestContacts(userObject.username);
	});
}