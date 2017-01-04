var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function()
{
	setUserName();
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Hello, " + storedName;
}

function setUserName()
{
	var myName = prompt('Enter name:');
	localStorage.setItem('name',myName);
	myHeading.textContent = "Hello, " + myName;
}