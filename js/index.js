// index.js

console.log("JS connected"); // <== just a quick check up to make sure js doc is connected properly

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
let theCatDiv = document.getElementById("cat");

console.log(theCatDiv); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML"
theCatDiv.innerHTML = "I'm a cat";

// set the HTML content of "otherElement" to "I'm a cat"
otherElement.innerHTML = theCatDiv.innerHTML;
