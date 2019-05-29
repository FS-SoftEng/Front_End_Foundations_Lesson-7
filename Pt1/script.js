// var myButton = document.getElementById("submitButton");

// var firstName = document.getElementById('firstName').value;
// var lastName = document.getElementById('lastName').value;
// var email = document.getElementById('email').value;

// var fruit = document.getElementsByTagName("li");

// var text = document.getElementById("paragraph").innerHTML;
// document.getElementById("paragraph").innerHTML = text + " and I am awesome!";

// var myButton = document.getElementById("submitButton");

// myButton.addEventListener("click", function(){
//   alert("Click!!");
// })

// let container = document.getElementById('container');
// container.innerHTML = '<h1>Hello World!</h1>';

// let heading = document.createElement('h1'); // create the heading element
// heading.innerHTML = "Hello World!" // add text to the element

// let container = document.getElementById('container'); // select the element you want to insert into
// container.appendChild(heading);  // insert the heading into the container

let heading = document.createElement('h1'); // create the heading
heading.innerHTML = document.getElementById('message').value; // add the input value as text
document.getElementById('output').appendChild(heading); // append the heading to the div element