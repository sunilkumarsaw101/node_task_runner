// Create a new paragraph element
var newParagraph = document.createElement("p");

// Set the text content of the paragraph
newParagraph.textContent = "This is a dynamically created paragraph.";

// Add a class to the paragraph
newParagraph.classList.add("highlight");

// Append the paragraph to the body of the document
document.body.appendChild(newParagraph);
