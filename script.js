const container = document.getElementById('container');
const containerTwo = document.querySelector('#container');
const listItems = document.querySelectorAll('.second');
const liThird = document.querySelector('ol > .third');
const footer = document.querySelector('.footer');
const ul = document.querySelector('ul');
const olLis = document.querySelectorAll('ol > li')




const newLi = document.createElement('li');
newLi.innerText = 'four';

ul.appendChild(newLi);

for (let li of olLis) {
    li.style.backgroundColor = 'green'
}



container.innerText = 'Hello!';
footer.classList.add('main');
footer.classList.remove('main');

footer.remove();