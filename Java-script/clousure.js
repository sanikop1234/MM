function outer() {
    let a =0;
    function inner() {
        count++;

    }
}
let inner = new outer();
inner();
inner();

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdrw:function(amount) {
            if(amount > balance) {
                console.log("ins fun");
            } else {
                balance -= amount;
                console.log(balance);
            }
        }
    };
}

let amount = new createBankAccount(100000);
amount.deposite(500);
amount.withdraw(500);
