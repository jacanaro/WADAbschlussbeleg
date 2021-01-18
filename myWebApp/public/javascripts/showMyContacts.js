function showMyContacts(){
	deleteContactsFromClient();
	initMap();
	//user object=callback-functions userObject
	getCurrentUser(function(userObject){
		requestAndCreateContactsAndMarker(userObject.userID);
	});
}