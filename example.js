
let myVariable = "hello There"
const myName = "Juan"
console.log(myVariable)
console.log("Hello World!")

console.log("Hello " + myName + ', How are you?')
console.log("Hello myName, what's up?")
console.log('and then juan said "hello there"')

function testFunction() {
  console.log("Hello from my test function");




  console.log("Hello there again from my function");


  console.log("Oh hi mark there. ");
}

function greetPeople(firstPerson, secondPerson) {
  console.log("hello " + firstPerson);
  console.log("Hello " + secondPerson);
  console.log("How are you both?")
}

// greetPeople("Juan", "Mark")
// greetPeople("Jack", "Josh")
// greetPeople()

function calculateTaxes(income) {
  let federalTax = income * 0.15;
  let medicaidTax = income * 0.08;
  let sociaSecutityTax = income * 0.075;

  return federalTax + medicaidTax + sociaSecutityTax
}

const incomeInput = document.getElementById("income").value;

function formSubmit() {
  let userIncome = document.getElementById("income").value
  console.log(userIncome);

  console.log(calculateTaxes(userIncome));
}

console.log(calculateTaxes(50000))
let tatxesFor150kIncome = calculateTaxes(150000)


function showHideSecret() {
  document.getElementById("secret").classList.toggle("hide");
}


// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// testFunction();