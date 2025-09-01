// 🚀 Part 1: Basics - Variables, Conditionals
let userAge = 20; // pretend this came from user input
if (userAge >= 18) {
  document.getElementById("ageResult").textContent = "You are an adult ✅";
} else {
  document.getElementById("ageResult").textContent = "You are underage ❌";
}

// ❤️ Part 2: Functions
function greetUser(name) {
  let message = `Hello, ${name}! 👋`;
  document.getElementById("greetMessage").textContent = message;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total price:", calculateTotal(50, 3)); // example usage

// 🔁 Part 3: Loops
let items = ["Apple", "Banana", "Mango", "Orange"];
let listContainer = document.getElementById("loopList");

// Example 1: for loop
for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  listContainer.appendChild(li);
}

// Example 2: while loop - countdown
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// 🌐 Part 4: DOM Manipulation
// Example 1: Change background color
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Example 2: Toggle text visibility
document.getElementById("toggleBtn").addEventListener("click", function () {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
});

// Example 3: Create element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This text was added dynamically with JavaScript 🎉";
document.body.appendChild(newParagraph);
