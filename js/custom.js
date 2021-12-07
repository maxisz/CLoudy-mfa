let name = window.prompt('hey whats your name?');
let names = ['spodie', 'scavenger', 'NewBie', 'Philbert Dolton', 'Zea Beck', 'Shirley Foster', 'Calvert Potter', 'Aldrich Blair'];
let temperature = Math.floor(Math.random() * 36);
let topPhrases = [
    'It seems to be rainy, try associating your self with your duvet cover :)',
    'Yoow , This sun be burning today Tell me what you planning next maybe I could Advice you better',

]

let phrase = topPhrases[Math.floor(Math.random() * topPhrases.length)];

document.getElementById('phrase').innerHTML = phrase + '<br>';
document.getElementById('temp').innerHTML = `${temperature}C`;

if (name == '') {
    name = names[Math.floor(Math.random() * names.length - 1)];
    window.alert('Dont worry Ill call you  ' + name);
}
document.getElementById('header').innerHTML = `Welcome ${name}!`;



var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById('date').innerHTML = "today " + date;