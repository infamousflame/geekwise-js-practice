function Bank(balance) {
    balance = parseInt(balance, 10);
    balance = isNaN(balance) ? 100 : balance;
    this.balance = balance;
}

Bank.prototype.credit = function (credit) {
        credit = parseInt(credit, 10);

        if (isNaN(credit)) {
            return;
        }

        this.balance += credit;
      };

Bank.prototype.debit = function (debit) {
        debit = parseInt(debit, 10);

        if (isNaN(debit)) {
            return;
        }

        this.balance -= debit;
      };

function doDebitCredit(numLoops, action, desc) {
  for (i=0; i<numLoops; i++) {
    var value = prompt(desc);
    action.call(EECU, value);
  }
}

var EECU = new Bank();
doDebitCredit(3, EECU.credit, "Enter ammount to credit to account.");
doDebitCredit(2, EECU.debit, "Enter ammount to debit to account.");

console.log(EECU.balance);
