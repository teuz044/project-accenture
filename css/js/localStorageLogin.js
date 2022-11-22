
if (localStorage.username) {
	document.getElementById('username').value = localStorage.username;
}

var salvarData = function() {
	var username = document.getElementById('username').value;
	localStorage.setItem('username', username);
};

document.onchange = salvarData;