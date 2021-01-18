function showAllContacts(){
	deleteContactsFromClient();
	initMap();
	requestAndCreateContactsAndMarker("all");
}