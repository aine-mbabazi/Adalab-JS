const container = document.getElementById('container');
console.log('parent',container.parentElement);
console.log('previous Sibling',container.previousElementSibling);
console.log('next Sibling',container.nextElementSibling);
console.log('children',container.children);
const body = document.body;
console.log('lastchild',body.lastElementChild);

// Editing DOM content

const containerText = document.getElementById('container-text')
containerText.innerHTML = 'Am I really a child?';

// Creating DOM Element 
const newHeading= document.createElement('h1');
container.appendChild(newHeading);
newHeading.innerHTML = 'Introduction';
newHeading.style.color='red'

const button = document.getElementByid('button');
bet

