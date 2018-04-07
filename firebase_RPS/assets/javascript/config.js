$(document).on('ready', function() {
	// Links to Firebase
	var mainURL="https://smuproject01.firebaseio.com/";
	var database = new Firebase(mainURL);
	var presenceRef = new Firebase(mainURL+'.info/connected');
	var playersRef = new Firebase(mainURL+'playersRef');
	var turnRef = new Firebase(mainURL+'turn');
	var chatRef = new Firebase(mainURL+'chat');

});