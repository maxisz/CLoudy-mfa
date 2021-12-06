let name = window.prompt('hey whats your name?');
let names = ['spodie', 'scavenger', 'NewBie'];
let temperature = Math.floor(Math.random() * 36);

document.getElementById('temp').innerHTML = `${temperature}C`;

if (name == '') {
    name = names[Math.floor(Math.random() * 2)];
    window.alert('Dont worry Ill call you  ' + name);
}
document.getElementById('header').innerHTML = `Welcome ${name}!`;



var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById('date').innerHTML = "today " + date;