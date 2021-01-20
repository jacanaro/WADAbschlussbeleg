function showMyContacts(){
	deleteContactsFromClient();
	initMap();
	requestAndCreateContactsAndMarker(username);
}