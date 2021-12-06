const name = window.prompt('hey whats your name?');
document.getElementById('header').innerHTML = `Welcome ${name}`;




var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById('date').innerHTML = "today " + date;