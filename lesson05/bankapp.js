let bankOpen = true;
let balance = 1000;

while (bankOpen) {
  const userInput = prompt("Enter One. Q: Quit, B: Balance, D: Deposit, W: Withdrawl ");

  if (userInput === "Q") {
  bankOpen = false;
  } else if (userInput === "B") {
  alert(balance);
  } else if (userInput === "D") {
  const valueToDeposit = prompt("How much would you like to deposit?");
  balance = balance + Number(valueToDeposit);
  } else if (userInput === "W") {
    const valueToWithdrawl = prompt("How much would you like to withdrawl?");
    balance = balance - Number(valueToWithdrawl);
  }

  console.log("Bank Still Open");
}

console.log('DONE');
