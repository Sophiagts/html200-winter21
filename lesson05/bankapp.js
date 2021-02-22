let bankOpen = true;
let balance = 1000;

while (bankOpen) {
  const userInput = prompt("Enter One. Q: Quit, B: Balance, D: Deposit, W: Withdrawl ");

  if (userInput === "Q") {
  bankOpen = false;
  } else if (userInput === "B") {
  alert(balance);
  } else if (userInput === "D") {
  const depositValue = prompt("How much would you like to deposit?");
  balance = balance + Number(depositValue);
  } else if (userInput === "W") {
    const withdrawlValue = prompt("How much would you like to withdrawl?");
    balance = balance - Number(withdrawlValue);
  }
}
